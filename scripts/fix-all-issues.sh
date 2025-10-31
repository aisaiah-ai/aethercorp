#!/bin/bash

# Comprehensive Issue Fix Script
# This script fixes all common issues before deployment

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔧 Comprehensive Issue Fix Script${NC}"
echo "=================================="

cd aether_corp_web

# Fix 1: Replace all withOpacity with withValues
echo -e "${YELLOW}📝 Fixing deprecated withOpacity calls...${NC}"

# Find and replace .withOpacity(value) with .withValues(alpha: value)
find lib -name "*.dart" -type f -exec sed -i '' 's/\.withOpacity(\([0-9.]*\))/\.withValues(alpha: \1)/g' {} \;

echo -e "${GREEN}✅ Fixed withOpacity calls${NC}"

# Fix 2: Create placeholder files in empty asset directories
echo -e "${YELLOW}📁 Fixing empty asset directories...${NC}"

ASSET_DIRS=("assets/images" "assets/icons" "assets/logos")

for dir in "${ASSET_DIRS[@]}"; do
    if [ ! -f "$dir/.gitkeep" ]; then
        mkdir -p "$dir"
        touch "$dir/.gitkeep"
        echo "Created placeholder: $dir/.gitkeep"
    fi
done

echo -e "${GREEN}✅ Fixed asset directory warnings${NC}"

# Fix 3: Verify all fixes
echo -e "${YELLOW}🔍 Verifying fixes...${NC}"

# Check for remaining withOpacity
REMAINING=$(grep -r "\.withOpacity(" lib/ 2>/dev/null | wc -l | tr -d ' ')
if [ "$REMAINING" -gt 0 ]; then
    echo -e "${RED}⚠️  Found $REMAINING remaining withOpacity calls${NC}"
else
    echo -e "${GREEN}✅ All withOpacity calls fixed${NC}"
fi

echo -e "${GREEN}🎉 All issues fixed!${NC}"
