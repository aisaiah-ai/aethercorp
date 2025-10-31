#!/bin/bash

# AetherCorp Comprehensive Error Check Script
# This script checks for various types of errors in the project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
FLUTTER_PROJECT_DIR="aether_corp_web"
EXIT_CODE=0
ERROR_COUNT=0
WARNING_COUNT=0

echo -e "${BLUE}🔍 AetherCorp Comprehensive Error Check${NC}"
echo "=========================================="

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        EXIT_CODE=1
        ERROR_COUNT=$((ERROR_COUNT + 1))
    fi
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    WARNING_COUNT=$((WARNING_COUNT + 1))
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

cd "$FLUTTER_PROJECT_DIR"

echo -e "${BLUE}📁 Working directory: $(pwd)${NC}"
echo ""

# 1. Flutter Environment Check
echo -e "${YELLOW}🔧 Flutter Environment Check${NC}"
echo "============================="

# Check Flutter installation
if command -v flutter &> /dev/null; then
    FLUTTER_VERSION=$(flutter --version | head -n 1)
    print_status 0 "Flutter installed: $FLUTTER_VERSION"
else
    print_status 1 "Flutter not installed"
fi

# Check Flutter doctor
print_info "Running Flutter doctor..."
if flutter doctor --verbose > /tmp/flutter_doctor.log 2>&1; then
    print_status 0 "Flutter doctor passed"
else
    print_warning "Flutter doctor found issues"
    echo -e "${YELLOW}Flutter doctor output:${NC}"
    cat /tmp/flutter_doctor.log | grep -E "(✗|!|ERROR)" | head -10
fi

echo ""

# 2. Dependencies Check
echo -e "${YELLOW}📦 Dependencies Check${NC}"
echo "====================="

# Check pubspec.yaml
if [ -f "pubspec.yaml" ]; then
    print_status 0 "pubspec.yaml exists"
    
    # Check for version conflicts
    if flutter pub deps --no-dev > /tmp/pub_deps.log 2>&1; then
        print_status 0 "Dependencies resolved successfully"
    else
        print_status 1 "Dependency resolution failed"
        echo -e "${YELLOW}Dependency errors:${NC}"
        cat /tmp/pub_deps.log | grep -i error | head -5
    fi
else
    print_status 1 "pubspec.yaml not found"
fi

# Check for outdated packages
print_info "Checking for outdated packages..."
if flutter pub outdated > /tmp/pub_outdated.log 2>&1; then
    OUTDATED_COUNT=$(grep -c "outdated" /tmp/pub_outdated.log || true)
    if [ "$OUTDATED_COUNT" -gt 0 ]; then
        print_warning "Found $OUTDATED_COUNT outdated packages"
        echo -e "${YELLOW}Outdated packages:${NC}"
        grep "outdated" /tmp/pub_outdated.log | head -5
    else
        print_status 0 "All packages are up to date"
    fi
else
    print_warning "Could not check for outdated packages"
fi

echo ""

# 3. Code Analysis
echo -e "${YELLOW}🔍 Code Analysis${NC}"
echo "================="

# Run Flutter analyze
print_info "Running Flutter analyze..."
if flutter analyze --fatal-infos > /tmp/flutter_analyze.log 2>&1; then
    print_status 0 "Flutter analyze passed"
else
    print_status 1 "Flutter analyze found issues"
    echo -e "${YELLOW}Analysis errors:${NC}"
    grep -E "(error|warning)" /tmp/flutter_analyze.log | head -10
fi

# Check for specific error patterns
print_info "Checking for common error patterns..."

# Check for null safety issues
NULL_SAFETY_ISSUES=$(grep -r "!" lib/ 2>/dev/null | grep -v "//" | wc -l || true)
if [ "$NULL_SAFETY_ISSUES" -gt 10 ]; then
    print_warning "Found $NULL_SAFETY_ISSUES null assertion operators"
else
    print_status 0 "Null safety usage looks reasonable"
fi

# Check for unused imports
UNUSED_IMPORTS=$(grep -r "unused_import" /tmp/flutter_analyze.log 2>/dev/null | wc -l || true)
if [ "$UNUSED_IMPORTS" -gt 0 ]; then
    print_warning "Found $UNUSED_IMPORTS unused imports"
else
    print_status 0 "No unused imports found"
fi

# Check for missing return statements
MISSING_RETURNS=$(grep -r "missing_return" /tmp/flutter_analyze.log 2>/dev/null | wc -l || true)
if [ "$MISSING_RETURNS" -gt 0 ]; then
    print_warning "Found $MISSING_RETURNS missing return statements"
else
    print_status 0 "No missing return statements found"
fi

echo ""

# 4. Build Check
echo -e "${YELLOW}🏗️  Build Check${NC}"
echo "==============="

# Clean build
print_info "Cleaning previous builds..."
if flutter clean > /tmp/flutter_clean.log 2>&1; then
    print_status 0 "Clean completed"
else
    print_warning "Clean had issues"
fi

# Get dependencies
print_info "Getting dependencies..."
if flutter pub get > /tmp/flutter_pub_get.log 2>&1; then
    print_status 0 "Dependencies retrieved"
else
    print_status 1 "Failed to get dependencies"
    echo -e "${YELLOW}Pub get errors:${NC}"
    grep -i error /tmp/flutter_pub_get.log | head -5
fi

# Build web app
print_info "Building web application..."
if flutter build web --release > /tmp/flutter_build.log 2>&1; then
    print_status 0 "Build completed successfully"
    
    # Check build output
    if [ -d "build/web" ]; then
        print_status 0 "Build directory created"
        
        # Check essential files
        if [ -f "build/web/index.html" ]; then
            print_status 0 "index.html generated"
        else
            print_status 1 "index.html missing"
        fi
        
        if [ -f "build/web/main.dart.js" ]; then
            print_status 0 "main.dart.js generated"
        else
            print_status 1 "main.dart.js missing"
        fi
    else
        print_status 1 "Build directory not created"
    fi
else
    print_status 1 "Build failed"
    echo -e "${YELLOW}Build errors:${NC}"
    grep -E "(error|Error|ERROR)" /tmp/flutter_build.log | head -10
fi

echo ""

# 5. Test Check
echo -e "${YELLOW}🧪 Test Check${NC}"
echo "============="

# Run tests
print_info "Running tests..."
if flutter test > /tmp/flutter_test.log 2>&1; then
    print_status 0 "All tests passed"
else
    print_status 1 "Some tests failed"
    echo -e "${YELLOW}Test failures:${NC}"
    grep -E "(FAILED|Error)" /tmp/flutter_test.log | head -10
fi

echo ""

# 6. Security Check
echo -e "${YELLOW}🔒 Security Check${NC}"
echo "================="

# Run security audit
print_info "Running security audit..."
if flutter pub audit > /tmp/flutter_audit.log 2>&1; then
    print_status 0 "No security vulnerabilities found"
else
    VULNERABILITIES=$(grep -c "vulnerability" /tmp/flutter_audit.log || true)
    if [ "$VULNERABILITIES" -gt 0 ]; then
        print_status 1 "Found $VULNERABILITIES security vulnerabilities"
        echo -e "${YELLOW}Security issues:${NC}"
        grep "vulnerability" /tmp/flutter_audit.log | head -5
    else
        print_warning "Security audit had issues but no vulnerabilities found"
    fi
fi

# Check for hardcoded secrets
print_info "Checking for hardcoded secrets..."
SECRET_PATTERNS=("password" "secret" "key" "token" "api_key")
SECRET_COUNT=0

for pattern in "${SECRET_PATTERNS[@]}"; do
    COUNT=$(grep -r -i "$pattern" lib/ 2>/dev/null | grep -v "//" | grep -v "TODO" | wc -l || true)
    if [ "$COUNT" -gt 0 ]; then
        print_warning "Found $COUNT instances of '$pattern' in code"
        SECRET_COUNT=$((SECRET_COUNT + COUNT))
    fi
done

if [ "$SECRET_COUNT" -eq 0 ]; then
    print_status 0 "No obvious hardcoded secrets found"
else
    print_warning "Found $SECRET_COUNT potential hardcoded secrets"
fi

echo ""

# 7. Performance Check
echo -e "${YELLOW}⚡ Performance Check${NC}"
echo "===================="

if [ -d "build/web" ]; then
    # Check bundle size
    print_info "Checking bundle size..."
    
    if [ -f "build/web/main.dart.js" ]; then
        MAIN_JS_SIZE=$(stat -f%z "build/web/main.dart.js" 2>/dev/null || stat -c%s "build/web/main.dart.js")
        MAIN_JS_SIZE_MB=$((MAIN_JS_SIZE / 1024 / 1024))
        
        if [ "$MAIN_JS_SIZE_MB" -gt 5 ]; then
            print_warning "Main JS bundle is large: ${MAIN_JS_SIZE_MB}MB"
        else
            print_status 0 "Main JS bundle size is acceptable: ${MAIN_JS_SIZE_MB}MB"
        fi
    fi
    
    # Check total build size
    TOTAL_SIZE=$(du -sh "build/web" | cut -f1)
    print_info "Total build size: $TOTAL_SIZE"
    
    # Check for large assets
    print_info "Checking for large assets..."
    LARGE_ASSETS=0
    find "build/web" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -exec sh -c '
        size=$(stat -f%z "$1" 2>/dev/null || stat -c%s "$1")
        size_mb=$((size / 1024 / 1024))
        if [ "$size_mb" -gt 1 ]; then
            echo "  - $(basename "$1"): ${size_mb}MB"
        fi
    ' _ {} \; | while read -r line; do
        if [ -n "$line" ]; then
            print_warning "Large asset: $line"
            LARGE_ASSETS=$((LARGE_ASSETS + 1))
        fi
    done
    
    if [ $LARGE_ASSETS -eq 0 ]; then
        print_status 0 "No excessively large assets found"
    fi
else
    print_warning "Build directory not found, skipping performance checks"
fi

echo ""

# 8. Configuration Check
echo -e "${YELLOW}⚙️  Configuration Check${NC}"
echo "======================="

# Check analysis_options.yaml
if [ -f "analysis_options.yaml" ]; then
    print_status 0 "analysis_options.yaml exists"
else
    print_warning "analysis_options.yaml not found"
fi

# Check for environment files
if [ -f ".env" ] || [ -f ".env.local" ] || [ -f ".env.production" ]; then
    print_status 0 "Environment files found"
else
    print_warning "No environment files found"
fi

# Check for Firebase configuration
if [ -f "lib/firebase_options.dart" ]; then
    print_status 0 "Firebase configuration found"
else
    print_warning "Firebase configuration not found"
fi

echo ""

# 9. Summary
echo -e "${BLUE}📊 Error Check Summary${NC}"
echo "====================="

echo -e "${BLUE}Total Errors: $ERROR_COUNT${NC}"
echo -e "${BLUE}Total Warnings: $WARNING_COUNT${NC}"

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}🎉 All error checks passed!${NC}"
    echo -e "${GREEN}✅ Project is in good condition${NC}"
else
    echo -e "${RED}❌ Some error checks failed${NC}"
    echo -e "${YELLOW}💡 Please fix the issues above${NC}"
fi

echo ""

# Generate detailed report
REPORT_FILE="../error-check-report-$(date +%Y%m%d_%H%M%S).txt"
cat > "$REPORT_FILE" << EOF
AetherCorp Error Check Report
============================
Timestamp: $(date)
Errors: $ERROR_COUNT
Warnings: $WARNING_COUNT
Status: $(if [ $EXIT_CODE -eq 0 ]; then echo "PASSED"; else echo "FAILED"; fi)

Flutter Version: $(flutter --version | head -n 1)

Build Status: $(if [ -d "build/web" ]; then echo "SUCCESS"; else echo "FAILED"; fi)

Analysis Log:
$(cat /tmp/flutter_analyze.log 2>/dev/null || echo "No analysis log")

Build Log:
$(cat /tmp/flutter_build.log 2>/dev/null || echo "No build log")

Test Log:
$(cat /tmp/flutter_test.log 2>/dev/null || echo "No test log")

EOF

print_info "Detailed report saved to: $REPORT_FILE"

echo ""
echo -e "${BLUE}🔧 Quick Fix Commands:${NC}"
echo "  Fix imports:     dart fix --apply"
echo "  Format code:     dart format ."
echo "  Clean build:     flutter clean && flutter build web --release"
echo "  Run tests:       flutter test"
echo "  Update deps:     flutter pub upgrade"

exit $EXIT_CODE



