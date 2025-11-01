#!/bin/bash

# AetherCorp Pre-commit Hook
# This script runs before each commit to ensure code quality

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 AetherCorp Pre-commit Check${NC}"
echo "=============================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Not in a git repository${NC}"
    exit 1
fi

# Get the list of staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACMR | grep -E '\.(dart)$' || true)

if [ -z "$STAGED_FILES" ]; then
    echo -e "${YELLOW}ℹ️  No Dart files staged for commit${NC}"
    exit 0
fi

echo -e "${BLUE}📁 Staged Dart files:${NC}"
echo "$STAGED_FILES"
echo ""

# Change to Flutter project directory
if [ -d "aether_corp_web" ]; then
    cd aether_corp_web
else
    echo -e "${RED}❌ Flutter project directory not found${NC}"
    exit 1
fi

# Run quick checks
echo -e "${YELLOW}🔍 Running quick pre-commit checks...${NC}"

# 1. Format check
echo -e "${YELLOW}🎨 Checking code formatting...${NC}"
if dart format --output=none --set-exit-if-changed .; then
    echo -e "${GREEN}✅ Code formatting is correct${NC}"
else
    echo -e "${RED}❌ Code formatting issues found${NC}"
    echo -e "${YELLOW}💡 Run 'dart format .' to fix formatting issues${NC}"
    exit 1
fi

# 2. Analyze check
echo -e "${YELLOW}🔍 Running code analysis...${NC}"
if flutter analyze --fatal-infos; then
    echo -e "${GREEN}✅ Code analysis passed${NC}"
else
    echo -e "${RED}❌ Code analysis found issues${NC}"
    echo -e "${YELLOW}💡 Fix the analysis issues before committing${NC}"
    exit 1
fi

# 3. Build check
echo -e "${YELLOW}🏗️  Checking build...${NC}"
if flutter build web --release > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build passed${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    echo -e "${YELLOW}💡 Fix the build errors before committing${NC}"
    exit 1
fi

# 4. Quick test check (warning only, doesn't block commit)
echo -e "${YELLOW}🧪 Running tests...${NC}"
if flutter test --reporter=compact; then
    echo -e "${GREEN}✅ Tests passed${NC}"
else
    echo -e "${YELLOW}⚠️  Tests failed - please fix when possible${NC}"
    echo -e "${YELLOW}💡 This won't block your commit, but CI/CD may fail${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Pre-commit checks passed!${NC}"
echo -e "${GREEN}✅ Ready to commit${NC}"

exit 0



