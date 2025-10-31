#!/bin/bash

# AetherCorp Deployment Error Check Script
# This script checks for common deployment issues and errors

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
EXIT_CODE=0

echo -e "${BLUE}🚀 AetherCorp Deployment Check${NC}"
echo "==============================="

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        EXIT_CODE=1
    fi
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
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

# Check if build directory exists
echo -e "${YELLOW}🔍 Checking build directory...${NC}"
if [ -d "$BUILD_DIR" ]; then
    print_status 0 "Build directory exists"
else
    print_status 1 "Build directory not found"
    echo -e "${YELLOW}💡 Run 'flutter build web --release' first${NC}"
    exit 1
fi

# Check essential files
echo -e "${YELLOW}📄 Checking essential files...${NC}"

# Check index.html
if [ -f "$BUILD_DIR/index.html" ]; then
    print_status 0 "index.html exists"
else
    print_status 1 "index.html missing"
fi

# Check main.dart.js
if [ -f "$BUILD_DIR/main.dart.js" ]; then
    print_status 0 "main.dart.js exists"
    
    # Check file size
    MAIN_JS_SIZE=$(stat -f%z "$BUILD_DIR/main.dart.js" 2>/dev/null || stat -c%s "$BUILD_DIR/main.dart.js")
    MAIN_JS_SIZE_MB=$((MAIN_JS_SIZE / 1024 / 1024))
    
    if [ "$MAIN_JS_SIZE_MB" -gt 5 ]; then
        print_warning "main.dart.js is large: ${MAIN_JS_SIZE_MB}MB"
    else
        print_status 0 "main.dart.js size is acceptable: ${MAIN_JS_SIZE_MB}MB"
    fi
else
    print_status 1 "main.dart.js missing"
fi

# Check flutter.js
if [ -f "$BUILD_DIR/flutter.js" ]; then
    print_status 0 "flutter.js exists"
else
    print_status 1 "flutter.js missing"
fi

# Check manifest.json
if [ -f "$BUILD_DIR/manifest.json" ]; then
    print_status 0 "manifest.json exists"
else
    print_status 1 "manifest.json missing"
fi

echo ""

# Check for broken assets
echo -e "${YELLOW}🖼️  Checking assets...${NC}"

# Check if assets directory exists
if [ -d "$BUILD_DIR/assets" ]; then
    print_status 0 "Assets directory exists"
    
    # Check for common asset issues
    ASSET_ISSUES=0
    
    # Check for missing images referenced in HTML
    if [ -f "$BUILD_DIR/index.html" ]; then
        # Look for image references in HTML
        while IFS= read -r line; do
            if echo "$line" | grep -q 'src="[^"]*\.(png|jpg|jpeg|gif|svg|webp)"'; then
                # Extract image path
                IMG_PATH=$(echo "$line" | grep -o 'src="[^"]*\.(png|jpg|jpeg|gif|svg|webp)"' | sed 's/src="//' | sed 's/"//')
                if [ ! -f "$BUILD_DIR/$IMG_PATH" ]; then
                    print_warning "Missing image: $IMG_PATH"
                    ASSET_ISSUES=$((ASSET_ISSUES + 1))
                fi
            fi
        done < "$BUILD_DIR/index.html"
    fi
    
    if [ $ASSET_ISSUES -eq 0 ]; then
        print_status 0 "No missing assets found"
    else
        print_warning "Found $ASSET_ISSUES missing assets"
    fi
else
    print_warning "Assets directory not found"
fi

echo ""

# Check for console errors in JavaScript
echo -e "${YELLOW}🔍 Checking for potential JavaScript errors...${NC}"

# Check for common error patterns in main.dart.js
if [ -f "$BUILD_DIR/main.dart.js" ]; then
    ERROR_PATTERNS=0
    
    # Check for undefined variables
    if grep -q "undefined" "$BUILD_DIR/main.dart.js"; then
        print_warning "Found 'undefined' references in main.dart.js"
        ERROR_PATTERNS=$((ERROR_PATTERNS + 1))
    fi
    
    # Check for null references
    if grep -q "null" "$BUILD_DIR/main.dart.js" | head -5; then
        print_warning "Found 'null' references in main.dart.js"
        ERROR_PATTERNS=$((ERROR_PATTERNS + 1))
    fi
    
    if [ $ERROR_PATTERNS -eq 0 ]; then
        print_status 0 "No obvious JavaScript errors found"
    else
        print_warning "Found $ERROR_PATTERNS potential JavaScript issues"
    fi
fi

echo ""

# Check for performance issues
echo -e "${YELLOW}⚡ Checking for performance issues...${NC}"

# Check total build size
TOTAL_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
echo -e "${BLUE}📊 Total build size: $TOTAL_SIZE${NC}"

# Check for large files
echo -e "${YELLOW}🔍 Checking for large files...${NC}"
LARGE_FILES=0

find "$BUILD_DIR" -type f \( -name "*.js" -o -name "*.wasm" -o -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -exec sh -c '
    size=$(stat -f%z "$1" 2>/dev/null || stat -c%s "$1")
    size_mb=$((size / 1024 / 1024))
    if [ "$size_mb" -gt 2 ]; then
        echo "  - $(basename "$1"): ${size_mb}MB"
    fi
' _ {} \; | while read -r line; do
    if [ -n "$line" ]; then
        print_warning "Large file: $line"
        LARGE_FILES=$((LARGE_FILES + 1))
    fi
done

if [ $LARGE_FILES -eq 0 ]; then
    print_status 0 "No excessively large files found"
fi

echo ""

# Check for security headers
echo -e "${YELLOW}🔒 Checking security configuration...${NC}"

# Check if _headers file exists in parent directory
if [ -f "../_headers" ]; then
    print_status 0 "_headers file exists"
    
    # Check for important security headers
    if grep -q "X-Frame-Options" "../_headers"; then
        print_status 0 "X-Frame-Options header configured"
    else
        print_warning "X-Frame-Options header missing"
    fi
    
    if grep -q "X-Content-Type-Options" "../_headers"; then
        print_status 0 "X-Content-Type-Options header configured"
    else
        print_warning "X-Content-Type-Options header missing"
    fi
else
    print_warning "_headers file not found"
fi

echo ""

# Check Cloudflare Pages configuration
echo -e "${YELLOW}☁️  Checking Cloudflare Pages configuration...${NC}"

if [ -f "../wrangler.toml" ]; then
    print_status 0 "wrangler.toml exists"
    
    # Check for build command
    if grep -q "command.*flutter build web" "../wrangler.toml"; then
        print_status 0 "Build command configured"
    else
        print_warning "Build command not properly configured"
    fi
    
    # Check for publish directory
    if grep -q "publish.*build/web" "../wrangler.toml"; then
        print_status 0 "Publish directory configured"
    else
        print_warning "Publish directory not properly configured"
    fi
else
    print_warning "wrangler.toml not found"
fi

echo ""

# Check for environment-specific issues
echo -e "${YELLOW}🌍 Checking environment configuration...${NC}"

# Check for hardcoded URLs
if grep -r "localhost\|127.0.0.1\|http://" lib/ 2>/dev/null | grep -v "// TODO\|// FIXME" | head -5; then
    print_warning "Found hardcoded localhost/HTTP URLs in code"
else
    print_status 0 "No hardcoded localhost/HTTP URLs found"
fi

# Check for debug flags
if grep -r "debug.*true\|kDebugMode" lib/ 2>/dev/null | head -3; then
    print_warning "Found debug flags in code"
else
    print_status 0 "No debug flags found in code"
fi

echo ""

# Summary
echo -e "${BLUE}📊 Deployment Check Summary${NC}"
echo "============================="

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}🎉 All deployment checks passed!${NC}"
    echo -e "${GREEN}✅ Build is ready for deployment${NC}"
else
    echo -e "${RED}❌ Some deployment checks failed${NC}"
    echo -e "${YELLOW}💡 Please fix the issues above before deploying${NC}"
fi

echo ""
echo -e "${BLUE}🔧 Quick Fix Commands:${NC}"
echo "  Rebuild:         flutter build web --release"
echo "  Clean build:     flutter clean && flutter build web --release"
echo "  Check assets:    flutter packages get"
echo "  Analyze:         flutter analyze"

exit $EXIT_CODE



