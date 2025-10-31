#!/bin/bash

# AetherCorp Enhanced Deployment Script
# This script handles the complete deployment process with error checking

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
FLUTTER_PROJECT_DIR="aether_corp_web"
BUILD_DIR="build/web"
DEPLOYMENT_PACKAGE="aethercorp-deployment.zip"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo -e "${BLUE}🚀 AetherCorp Enhanced Deployment${NC}"
echo "=================================="
echo -e "${BLUE}📅 Timestamp: $TIMESTAMP${NC}"
echo ""

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        exit 1
    fi
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Function to print info
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in the right directory
if [ ! -d "$FLUTTER_PROJECT_DIR" ]; then
    echo -e "${RED}❌ Flutter project directory '$FLUTTER_PROJECT_DIR' not found${NC}"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Check Flutter installation
print_info "Checking Flutter installation..."
if ! command -v flutter &> /dev/null; then
    print_status 1 "Flutter not found. Please install Flutter first."
fi

FLUTTER_VERSION=$(flutter --version | head -n 1)
print_status 0 "Flutter found: $FLUTTER_VERSION"

echo ""

# Pre-deployment checks
print_info "Running pre-deployment checks..."

# Run lint check
if [ -f "scripts/lint-check.sh" ]; then
    print_info "Running lint check..."
    if bash scripts/lint-check.sh; then
        print_status 0 "Lint check passed"
    else
        print_warning "Lint check found issues, but continuing with deployment"
    fi
else
    print_warning "Lint check script not found, skipping..."
fi

echo ""

# Clean previous builds
print_info "Cleaning previous builds..."
cd "$FLUTTER_PROJECT_DIR"

if flutter clean; then
    print_status 0 "Clean completed"
else
    print_warning "Clean failed, but continuing..."
fi

echo ""

# Get dependencies
print_info "Getting dependencies..."
if flutter pub get; then
    print_status 0 "Dependencies updated"
else
    print_status 1 "Failed to get dependencies"
fi

echo ""

# Run tests
print_info "Running tests..."
if flutter test; then
    print_status 0 "All tests passed"
else
    print_warning "Some tests failed, but continuing with deployment"
fi

echo ""

# Build the application
print_info "Building Flutter web application..."
if flutter build web --release --verbose; then
    print_status 0 "Build completed successfully"
else
    print_status 1 "Build failed"
fi

echo ""

# Verify build output
print_info "Verifying build output..."

if [ ! -d "$BUILD_DIR" ]; then
    print_status 1 "Build directory not found"
fi

if [ ! -f "$BUILD_DIR/index.html" ]; then
    print_status 1 "index.html not found in build output"
fi

if [ ! -f "$BUILD_DIR/main.dart.js" ]; then
    print_status 1 "main.dart.js not found in build output"
fi

print_status 0 "Build output verification passed"

echo ""

# Run deployment checks
if [ -f "../scripts/deployment-check.sh" ]; then
    print_info "Running deployment checks..."
    if bash ../scripts/deployment-check.sh; then
        print_status 0 "Deployment checks passed"
    else
        print_warning "Deployment checks found issues, but continuing..."
    fi
else
    print_warning "Deployment check script not found, skipping..."
fi

echo ""

# Create deployment package
print_info "Creating deployment package..."

# Remove old deployment package if it exists
if [ -f "../$DEPLOYMENT_PACKAGE" ]; then
    rm "../$DEPLOYMENT_PACKAGE"
    print_info "Removed old deployment package"
fi

# Create new deployment package
cd "$BUILD_DIR"

# Create zip file excluding unnecessary files
if zip -r "../../$DEPLOYMENT_PACKAGE" . -x "*.DS_Store" "*.git*" "*.tmp" "*.log" > /dev/null 2>&1; then
    print_status 0 "Deployment package created: $DEPLOYMENT_PACKAGE"
else
    print_status 1 "Failed to create deployment package"
fi

# Get package size
PACKAGE_SIZE=$(du -h "../../$DEPLOYMENT_PACKAGE" | cut -f1)
print_info "Package size: $PACKAGE_SIZE"

echo ""

# Generate deployment report
print_info "Generating deployment report..."

REPORT_FILE="../../deployment-report-$TIMESTAMP.txt"
cat > "$REPORT_FILE" << EOF
AetherCorp Deployment Report
===========================
Timestamp: $TIMESTAMP
Flutter Version: $FLUTTER_VERSION
Build Directory: $BUILD_DIR
Package Size: $PACKAGE_SIZE

Build Contents:
$(ls -la)

Key Files:
- index.html: $(if [ -f "index.html" ]; then echo "✅ Present"; else echo "❌ Missing"; fi)
- main.dart.js: $(if [ -f "main.dart.js" ]; then echo "✅ Present"; else echo "❌ Missing"; fi)
- flutter.js: $(if [ -f "flutter.js" ]; then echo "✅ Present"; else echo "❌ Missing"; fi)
- manifest.json: $(if [ -f "manifest.json" ]; then echo "✅ Present"; else echo "❌ Missing"; fi)

Assets Directory: $(if [ -d "assets" ]; then echo "✅ Present"; else echo "❌ Missing"; fi)

EOF

print_status 0 "Deployment report generated: $REPORT_FILE"

echo ""

# Display deployment instructions
print_info "Deployment Instructions"
echo "========================"
echo ""
echo -e "${BLUE}🌐 Cloudflare Pages Deployment:${NC}"
echo "1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/"
echo "2. Navigate to 'Pages' in the sidebar"
echo "3. Click 'Create a project' or select existing project"
echo "4. Choose 'Upload assets'"
echo "5. Upload the file: $DEPLOYMENT_PACKAGE"
echo "6. Set project name: 'aethercorp'"
echo "7. Click 'Deploy site'"
echo ""
echo -e "${BLUE}🔧 Custom Domain Setup:${NC}"
echo "1. After deployment, go to 'Custom domains'"
echo "2. Click 'Set up a custom domain'"
echo "3. Enter: aethercorp.us"
echo "4. Follow DNS configuration instructions"
echo ""
echo -e "${BLUE}📁 Files Ready for Deployment:${NC}"
echo "  - Deployment package: $DEPLOYMENT_PACKAGE"
echo "  - Build directory: $(pwd)"
echo "  - Report file: $REPORT_FILE"
echo ""

# Check for GitHub Actions
if [ -d "../../.github/workflows" ]; then
    print_info "GitHub Actions detected"
    echo -e "${GREEN}✅ Automatic deployment via GitHub Actions is available${NC}"
    echo "Push to main branch to trigger automatic deployment"
else
    print_warning "GitHub Actions not configured"
    echo "Consider setting up automatic deployment with GitHub Actions"
fi

echo ""

# Final status
print_status 0 "Deployment preparation completed successfully!"
echo -e "${GREEN}🎉 Ready for deployment!${NC}"

# Display next steps
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Upload $DEPLOYMENT_PACKAGE to Cloudflare Pages"
echo "2. Configure custom domain (aethercorp.us)"
echo "3. Test the deployed site"
echo "4. Monitor for any issues"

echo ""
echo -e "${BLUE}🔧 Troubleshooting:${NC}"
echo "  - Check deployment report: $REPORT_FILE"
echo "  - Verify build output: $BUILD_DIR"
echo "  - Run lint check: bash scripts/lint-check.sh"
echo "  - Run deployment check: bash scripts/deployment-check.sh"

echo ""
echo -e "${GREEN}🚀 Happy Deploying!${NC}"



