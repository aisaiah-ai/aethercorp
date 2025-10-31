#!/bin/bash

# AetherCorp Master Check Script
# This script runs all checks: lint, error, and deployment checks

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
REPORT_FILE="$PROJECT_ROOT/ci-cd-report-$TIMESTAMP.txt"

echo -e "${BLUE}🔍 AetherCorp Master Check Suite${NC}"
echo "================================="
echo -e "${BLUE}📅 Timestamp: $TIMESTAMP${NC}"
echo -e "${BLUE}📁 Project Root: $PROJECT_ROOT${NC}"
echo ""

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

# Function to print section header
print_section() {
    echo ""
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
    echo ""
}

# Initialize report
cat > "$REPORT_FILE" << EOF
AetherCorp CI/CD Master Report
=============================
Timestamp: $TIMESTAMP
Project Root: $PROJECT_ROOT

EOF

# Change to project root
cd "$PROJECT_ROOT"

# 1. Lint Check
print_section "🔍 LINT CHECK"
echo "Running comprehensive lint check..."

if [ -f "scripts/lint-check.sh" ]; then
    if bash scripts/lint-check.sh >> "$REPORT_FILE" 2>&1; then
        print_status 0 "Lint check completed successfully"
        echo "LINT CHECK: PASSED" >> "$REPORT_FILE"
    else
        print_status 1 "Lint check found issues"
        echo "LINT CHECK: FAILED" >> "$REPORT_FILE"
    fi
else
    print_status 1 "Lint check script not found"
    echo "LINT CHECK: SCRIPT NOT FOUND" >> "$REPORT_FILE"
fi

# 2. Error Check
print_section "🔍 ERROR CHECK"
echo "Running comprehensive error check..."

if [ -f "scripts/error-check.sh" ]; then
    if bash scripts/error-check.sh >> "$REPORT_FILE" 2>&1; then
        print_status 0 "Error check completed successfully"
        echo "ERROR CHECK: PASSED" >> "$REPORT_FILE"
    else
        print_status 1 "Error check found issues"
        echo "ERROR CHECK: FAILED" >> "$REPORT_FILE"
    fi
else
    print_status 1 "Error check script not found"
    echo "ERROR CHECK: SCRIPT NOT FOUND" >> "$REPORT_FILE"
fi

# 3. Build Check
print_section "🏗️  BUILD CHECK"
echo "Running build verification..."

cd aether_corp_web

# Clean and build
echo "Cleaning previous builds..."
if flutter clean >> "$REPORT_FILE" 2>&1; then
    print_status 0 "Clean completed"
else
    print_status 1 "Clean failed"
fi

echo "Getting dependencies..."
if flutter pub get >> "$REPORT_FILE" 2>&1; then
    print_status 0 "Dependencies retrieved"
else
    print_status 1 "Failed to get dependencies"
fi

echo "Building web application..."
if flutter build web --release >> "$REPORT_FILE" 2>&1; then
    print_status 0 "Build completed successfully"
    echo "BUILD CHECK: PASSED" >> "$REPORT_FILE"
else
    print_status 1 "Build failed"
    echo "BUILD CHECK: FAILED" >> "$REPORT_FILE"
fi

# 4. Deployment Check
print_section "🚀 DEPLOYMENT CHECK"
echo "Running deployment verification..."

cd "$PROJECT_ROOT"

if [ -f "scripts/deployment-check.sh" ]; then
    if bash scripts/deployment-check.sh >> "$REPORT_FILE" 2>&1; then
        print_status 0 "Deployment check completed successfully"
        echo "DEPLOYMENT CHECK: PASSED" >> "$REPORT_FILE"
    else
        print_status 1 "Deployment check found issues"
        echo "DEPLOYMENT CHECK: FAILED" >> "$REPORT_FILE"
    fi
else
    print_status 1 "Deployment check script not found"
    echo "DEPLOYMENT CHECK: SCRIPT NOT FOUND" >> "$REPORT_FILE"
fi

# 5. Test Check
print_section "🧪 TEST CHECK"
echo "Running test suite..."

cd aether_corp_web

if flutter test >> "$REPORT_FILE" 2>&1; then
    print_status 0 "All tests passed"
    echo "TEST CHECK: PASSED" >> "$REPORT_FILE"
else
    print_status 1 "Some tests failed"
    echo "TEST CHECK: FAILED" >> "$REPORT_FILE"
fi

# 6. Security Check
print_section "🔒 SECURITY CHECK"
echo "Running security audit..."

if flutter pub audit >> "$REPORT_FILE" 2>&1; then
    print_status 0 "No security vulnerabilities found"
    echo "SECURITY CHECK: PASSED" >> "$REPORT_FILE"
else
    print_status 1 "Security vulnerabilities found"
    echo "SECURITY CHECK: FAILED" >> "$REPORT_FILE"
fi

# 7. Performance Check
print_section "⚡ PERFORMANCE CHECK"
echo "Running performance analysis..."

if [ -d "build/web" ]; then
    # Check bundle size
    if [ -f "build/web/main.dart.js" ]; then
        MAIN_JS_SIZE=$(stat -f%z "build/web/main.dart.js" 2>/dev/null || stat -c%s "build/web/main.dart.js")
        MAIN_JS_SIZE_MB=$((MAIN_JS_SIZE / 1024 / 1024))
        
        if [ "$MAIN_JS_SIZE_MB" -gt 5 ]; then
            print_status 1 "Main JS bundle is large: ${MAIN_JS_SIZE_MB}MB"
            echo "PERFORMANCE CHECK: FAILED - Large bundle size" >> "$REPORT_FILE"
        else
            print_status 0 "Main JS bundle size is acceptable: ${MAIN_JS_SIZE_MB}MB"
            echo "PERFORMANCE CHECK: PASSED" >> "$REPORT_FILE"
        fi
    else
        print_status 1 "Main JS file not found"
        echo "PERFORMANCE CHECK: FAILED - No main.js" >> "$REPORT_FILE"
    fi
else
    print_status 1 "Build directory not found"
    echo "PERFORMANCE CHECK: FAILED - No build directory" >> "$REPORT_FILE"
fi

# 8. Configuration Check
print_section "⚙️  CONFIGURATION CHECK"
echo "Checking project configuration..."

cd "$PROJECT_ROOT"

# Check for essential config files
CONFIG_FILES=(
    "aether_corp_web/pubspec.yaml"
    "aether_corp_web/analysis_options.yaml"
    "wrangler.toml"
    "_headers"
    ".github/workflows/ci-cd.yml"
)

CONFIG_ISSUES=0
for file in "${CONFIG_FILES[@]}"; do
    if [ -f "$file" ]; then
        print_status 0 "$file exists"
    else
        print_status 1 "$file missing"
        CONFIG_ISSUES=$((CONFIG_ISSUES + 1))
    fi
done

if [ $CONFIG_ISSUES -eq 0 ]; then
    echo "CONFIGURATION CHECK: PASSED" >> "$REPORT_FILE"
else
    echo "CONFIGURATION CHECK: FAILED - $CONFIG_ISSUES missing files" >> "$REPORT_FILE"
fi

# 9. Final Summary
print_section "📊 FINAL SUMMARY"

# Count results from report
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

while IFS= read -r line; do
    if [[ $line == *"CHECK: PASSED" ]]; then
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
        TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    elif [[ $line == *"CHECK: FAILED" ]]; then
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
        TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    fi
done < "$REPORT_FILE"

echo -e "${BLUE}Total Checks: $TOTAL_CHECKS${NC}"
echo -e "${GREEN}Passed: $PASSED_CHECKS${NC}"
echo -e "${RED}Failed: $FAILED_CHECKS${NC}"

if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! Project is ready for deployment.${NC}"
    echo "OVERALL STATUS: PASSED" >> "$REPORT_FILE"
    EXIT_CODE=0
else
    echo -e "${RED}❌ $FAILED_CHECKS checks failed. Please fix issues before deploying.${NC}"
    echo "OVERALL STATUS: FAILED" >> "$REPORT_FILE"
    EXIT_CODE=1
fi

echo ""
echo -e "${BLUE}📋 Detailed Report: $REPORT_FILE${NC}"
echo -e "${BLUE}🔧 Quick Fix Commands:${NC}"
echo "  Run lint check:    bash scripts/lint-check.sh"
echo "  Run error check:   bash scripts/error-check.sh"
echo "  Run deployment:    bash scripts/deploy.sh"
echo "  Clean and build:   cd aether_corp_web && flutter clean && flutter build web --release"

echo ""
echo -e "${BLUE}🚀 Next Steps:${NC}"
if [ $EXIT_CODE -eq 0 ]; then
    echo "1. ✅ All checks passed - ready for deployment"
    echo "2. 🚀 Run deployment script: bash scripts/deploy.sh"
    echo "3. 🌐 Deploy to Cloudflare Pages"
    echo "4. 🔍 Monitor deployment for any issues"
else
    echo "1. ❌ Fix failed checks first"
    echo "2. 🔧 Review detailed report: $REPORT_FILE"
    echo "3. 🧪 Run individual check scripts to debug"
    echo "4. 🔄 Re-run this script after fixes"
fi

echo ""
echo -e "${GREEN}🏁 Master check completed!${NC}"

exit $EXIT_CODE



