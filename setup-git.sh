#!/bin/bash

# AetherCorp Git Repository Setup Script
# This script helps initialize Git and push to GitHub for CI/CD

echo "🚀 AetherCorp Git Repository Setup"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOF
# Flutter/Dart
.dart_tool/
.flutter-plugins
.flutter-plugins-dependencies
.packages
.pub-cache/
.pub/
build/
flutter_*.png
linked_*.ds
unlinked.ds
unlinked_spec.ds

# Android
android/app/debug
android/app/profile
android/app/release

# iOS
ios/Flutter/App.framework
ios/Flutter/Flutter.framework
ios/Flutter/Flutter.podspec
ios/Flutter/Generated.xcconfig
ios/Flutter/app.flx
ios/Flutter/app.zip
ios/Flutter/flutter_assets/
ios/Flutter/flutter_export_environment.sh
ios/ServiceDefinitions.json
ios/Runner/GeneratedPluginRegistrant.*

# macOS
macos/Flutter/GeneratedPluginRegistrant.swift

# Web
web/

# IDE
.vscode/
.idea/
*.iml
*.ipr
*.iws

# OS
.DS_Store
Thumbs.db

# Firebase
.firebase/
firebase-debug.log
firestore-debug.log

# Environment
.env
.env.local
.env.production

# Logs
*.log
EOF
    echo "✅ .gitignore created"
else
    echo "✅ .gitignore already exists"
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Initial commit: AetherCorp website with CI/CD setup"
    echo "✅ Changes committed"
fi

echo ""
echo "🌐 Next Steps:"
echo "=============="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: aether-corp"
echo "   - Make it public or private"
echo "   - Don't initialize with README (we already have files)"
echo ""
echo "2. Connect your local repository to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/aether-corp.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Set up GitHub Secrets (see CI-CD-SETUP.md):"
echo "   - CLOUDFLARE_API_TOKEN"
echo "   - CLOUDFLARE_ACCOUNT_ID"
echo ""
echo "4. Connect Cloudflare Pages to GitHub (see CI-CD-SETUP.md)"
echo ""
echo "📖 For detailed instructions, see: CI-CD-SETUP.md"
echo ""
echo "🎉 Ready for CI/CD setup!"
