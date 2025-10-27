#!/bin/bash

# AetherCorp Cloudflare Pages Deployment Script
# This script helps deploy the Flutter web app to Cloudflare Pages

echo "🚀 AetherCorp Cloudflare Pages Deployment"
echo "=========================================="

# Check if build directory exists
if [ ! -d "build/web" ]; then
    echo "❌ Build directory not found. Please run 'flutter build web --release' first."
    exit 1
fi

echo "✅ Build directory found"

# Create deployment package
echo "📦 Creating deployment package..."
cd build/web

# Create a zip file for manual upload
zip -r ../../aethercorp-deployment.zip . -x "*.DS_Store" "*.git*"

echo "✅ Deployment package created: aethercorp-deployment.zip"
echo ""
echo "🌐 Next Steps for Cloudflare Pages Deployment:"
echo "=============================================="
echo ""
echo "1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/"
echo "2. Navigate to 'Pages' in the sidebar"
echo "3. Click 'Create a project'"
echo "4. Choose 'Upload assets'"
echo "5. Upload the file: aethercorp-deployment.zip"
echo "6. Set project name: 'aethercorp'"
echo "7. Click 'Deploy site'"
echo ""
echo "🔧 Custom Domain Setup:"
echo "======================="
echo "1. After deployment, go to 'Custom domains'"
echo "2. Click 'Set up a custom domain'"
echo "3. Enter: aethercorp.us"
echo "4. Follow DNS configuration instructions"
echo ""
echo "📁 Build directory: $(pwd)"
echo "📦 Deployment package: aethercorp-deployment.zip"
echo ""
echo "🎉 Ready for deployment!"