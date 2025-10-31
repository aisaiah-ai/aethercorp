#!/bin/bash

# Comprehensive Pre-Deployment Check Script
# This script checks for ALL issues before deployment and prevents bad deployments

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

EXIT_CODE=0
ERRORS_FOUND=0
WARNINGS_FOUND=0

echo -e "${BLUE}🔍 Comprehensive Pre-Deployment Check${NC}"
echo "=========================================="
echo ""

cd aether_corp_web || exit 1

# Function to report error
report_error() {
    echo -e "${RED}❌ $1${NC}"
    EXIT_CODE=1
    ERRORS_FOUND=$((ERRORS_FOUND + 1))
}

# Function to report warning
report_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
}

# Function to report success
report_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Check 1: Flutter environment
echo -e "${BLUE}1. Checking Flutter environment...${NC}"
if command -v flutter &> /dev/null; then
    FLUTTER_VERSION=$(flutter --version | head -n 1)
    report_success "Flutter found: $FLUTTER_VERSION"
else
    report_error "Flutter not found"
fi
echo ""

# Check 2: Dependencies
echo -e "${BLUE}2. Checking dependencies...${NC}"
if flutter pub get > /tmp/pub_get.log 2>&1; then
    report_success "Dependencies resolved"
else
    report_error "Dependency resolution failed"
    cat /tmp/pub_get.log | grep -i error | head -5
fi
echo ""

# Check 3: Code analysis
echo -e "${BLUE}3. Running code analysis...${NC}"
if flutter analyze --fatal-warnings > /tmp/analyze.log 2>&1; then
    report_success "Code analysis passed"
else
    report_error "Code analysis failed"
    echo -e "${RED}Errors found:${NC}"
    grep -E "(error|Error)" /tmp/analyze.log | head -10
fi
echo ""

# Check 4: Formatting
echo -e "${BLUE}4. Checking code formatting...${NC}"
if dart format --output=none --set-exit-if-changed . > /tmp/format.log 2>&1; then
    report_success "Code formatting is correct"
else
    report_warning "Code formatting issues found"
    echo -e "${YELLOW}Run 'dart format .' to fix${NC}"
fi
echo ""

# Check 5: Linter
echo -e "${BLUE}5. Running linter...${NC}"
if dart run flutter_lints > /tmp/lints.log 2>&1; then
    report_success "Linter passed"
else
    report_warning "Linter found issues"
fi
echo ""

# Check 6: Tests
echo -e "${BLUE}6. Running tests...${NC}"
if flutter test > /tmp/test.log 2>&1; then
    report_success "All tests passed"
else
    report_error "Some tests failed"
    echo -e "${RED}Test failures:${NC}"
    grep -E "(FAILED|Error)" /tmp/test.log | head -5
fi
echo ""

# Check 7: Build
echo -e "${BLUE}7. Building web application...${NC}"
if flutter build web --release > /tmp/build.log 2>&1; then
    report_success "Build completed successfully"
    
    # Verify build output
    if [ ! -d "build/web" ]; then
        report_error "Build directory not found"
    elif [ ! -f "build/web/index.html" ]; then
        report_error "index.html not found in build output"
    elif [ ! -f "build/web/main.dart.js" ]; then
        report_error "main.dart.js not found in build output"
    else
        report_success "Build output verified"
    fi
else
    report_error "Build failed"
    echo -e "${RED}Build errors:${NC}"
    grep -E "(error|Error|ERROR)" /tmp/build.log | head -10
fi
echo ""

# Check 8: Specific issues
echo -e "${BLUE}8. Checking for specific issues...${NC}"

# Check for print statements
PRINT_COUNT=$(grep -r "print(" lib/ 2>/dev/null | grep -v "debugPrint\|//.*print" | wc -l | tr -d ' ')
if [ "$PRINT_COUNT" -gt 0 ]; then
    report_warning "Found $PRINT_COUNT print statements (should use debugPrint)"
else
    report_success "No print statements found"
fi

# Check for withOpacity (should be withValues now)
WITHOPACITY_COUNT=$(grep -r "\.withOpacity(" lib/ 2>/dev/null | wc -l | tr -d ' ')
if [ "$WITHOPACITY_COUNT" -gt 0 ]; then
    report_error "Found $WITHOPACITY_COUNT withOpacity calls (should use withValues)"
else
    report_success "No deprecated withOpacity calls found"
fi

# Check for initialValue
INITIALVALUE_COUNT=$(grep -r "initialValue:" lib/ 2>/dev/null | wc -l | tr -d ' ')
if [ "$INITIALVALUE_COUNT" -gt 0 ]; then
    report_warning "Found $INITIALVALUE_COUNT initialValue parameters (may need update)"
else
    report_success "No initialValue parameters found"
fi

# Check for BuildContext async gaps
BUILDCONTEXT_COUNT=$(grep -r "use_build_context_synchronously" /tmp/analyze.log 2>/dev/null | wc -l | tr -d ' ')
if [ "$BUILDCONTEXT_COUNT" -gt 0 ]; then
    report_warning "Found $BUILDCONTEXT_COUNT BuildContext async gap issues"
else
    report_success "No BuildContext async gap issues found"
fi

# Check asset directories
for dir in assets/images assets/icons assets/logos; do
    if [ ! -d "$dir" ] || [ -z "$(ls -A $dir 2>/dev/null)" ]; then
        report_warning "Empty asset directory: $dir"
    else
        report_success "Asset directory OK: $dir"
    fi
done

echo ""

# Summary
echo -e "${BLUE}📊 Summary${NC}"
echo "===================="
echo -e "Errors: ${RED}$ERRORS_FOUND${NC}"
echo -e "Warnings: ${YELLOW}$WARNINGS_FOUND${NC}"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! Ready for deployment.${NC}"
    exit 0
else
    echo -e "${RED}❌ Checks failed. Please fix errors before deploying.${NC}"
    echo ""
    echo -e "${YELLOW}💡 Quick fixes:${NC}"
    echo "  - Run: dart format ."
    echo "  - Run: flutter analyze"
    echo "  - Run: flutter test"
    echo "  - Fix all errors listed above"
    exit 1
fi
