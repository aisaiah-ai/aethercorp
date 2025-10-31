#!/bin/bash

# AetherCorp Automated Lint Check Script
# This script performs comprehensive linting and code quality checks

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

echo -e "${BLUE}🔍 AetherCorp Lint Check${NC}"
echo "=========================="

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        EXIT_CODE=1
    fi
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
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

# Check Flutter installation
echo -e "${YELLOW}🔧 Checking Flutter installation...${NC}"
if command_exists flutter; then
    FLUTTER_VERSION=$(flutter --version | head -n 1)
    echo -e "${GREEN}✅ Flutter found: $FLUTTER_VERSION${NC}"
else
    echo -e "${RED}❌ Flutter not found. Please install Flutter first.${NC}"
    exit 1
fi

# Get dependencies
echo -e "${YELLOW}📦 Getting dependencies...${NC}"
if flutter pub get; then
    print_status 0 "Dependencies updated"
else
    print_status 1 "Failed to get dependencies"
    exit 1
fi

echo ""

# Run Flutter analyze
echo -e "${YELLOW}🔍 Running Flutter analyze...${NC}"
if flutter analyze --fatal-infos; then
    print_status 0 "Flutter analyze passed"
else
    print_status 1 "Flutter analyze failed"
fi

echo ""

# Check code formatting
echo -e "${YELLOW}🎨 Checking code formatting...${NC}"
if dart format --output=none --set-exit-if-changed .; then
    print_status 0 "Code formatting is correct"
else
    print_status 1 "Code formatting issues found"
    echo -e "${YELLOW}💡 Run 'dart format .' to fix formatting issues${NC}"
fi

echo ""

# Run linter
echo -e "${YELLOW}🧹 Running linter...${NC}"
if dart run flutter_lints; then
    print_status 0 "Linter passed"
else
    print_status 1 "Linter found issues"
fi

echo ""

# Check for unused imports
echo -e "${YELLOW}🔍 Checking for unused imports...${NC}"
UNUSED_IMPORTS=$(dart run flutter_lints --no-fatal-infos 2>&1 | grep -c "unused_import" || true)
if [ "$UNUSED_IMPORTS" -eq 0 ]; then
    print_status 0 "No unused imports found"
else
    print_status 1 "Found $UNUSED_IMPORTS unused imports"
fi

echo ""

# Check for TODO comments
echo -e "${YELLOW}📝 Checking for TODO comments...${NC}"
TODO_COUNT=$(find lib -name "*.dart" -exec grep -l "TODO\|FIXME\|HACK" {} \; | wc -l || true)
if [ "$TODO_COUNT" -eq 0 ]; then
    print_status 0 "No TODO comments found"
else
    echo -e "${YELLOW}⚠️  Found TODO comments in $TODO_COUNT files${NC}"
    find lib -name "*.dart" -exec grep -l "TODO\|FIXME\|HACK" {} \; | while read file; do
        echo "  - $file"
    done
fi

echo ""

# Check for print statements (should be removed in production)
echo -e "${YELLOW}🖨️  Checking for print statements...${NC}"
PRINT_COUNT=$(find lib -name "*.dart" -exec grep -c "print(" {} \; | awk '{sum += $1} END {print sum}' || true)
if [ "$PRINT_COUNT" -eq 0 ]; then
    print_status 0 "No print statements found"
else
    echo -e "${YELLOW}⚠️  Found $PRINT_COUNT print statements${NC}"
    echo -e "${YELLOW}💡 Consider using debugPrint or removing print statements for production${NC}"
fi

echo ""

# Check pubspec.yaml for issues
echo -e "${YELLOW}📋 Checking pubspec.yaml...${NC}"
if flutter pub deps --no-dev; then
    print_status 0 "pubspec.yaml is valid"
else
    print_status 1 "pubspec.yaml has issues"
fi

echo ""

# Security audit
echo -e "${YELLOW}🔒 Running security audit...${NC}"
if flutter pub audit; then
    print_status 0 "No security vulnerabilities found"
else
    print_status 1 "Security vulnerabilities found"
    echo -e "${YELLOW}💡 Run 'flutter pub audit' for details${NC}"
fi

echo ""

# Summary
echo -e "${BLUE}📊 Lint Check Summary${NC}"
echo "===================="

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}🎉 All lint checks passed!${NC}"
    echo -e "${GREEN}✅ Code is ready for commit/merge${NC}"
else
    echo -e "${RED}❌ Some lint checks failed${NC}"
    echo -e "${YELLOW}💡 Please fix the issues above before committing${NC}"
fi

echo ""
echo -e "${BLUE}🔧 Quick Fix Commands:${NC}"
echo "  Format code:     dart format ."
echo "  Fix imports:     dart fix --apply"
echo "  Run analyze:     flutter analyze"
echo "  Run linter:      dart run flutter_lints"

exit $EXIT_CODE



