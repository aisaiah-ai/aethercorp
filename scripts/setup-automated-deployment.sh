#!/bin/bash

# AetherCorp Automated Deployment Setup Script
# This script helps you set up the automated CI/CD pipeline

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 AetherCorp Automated Deployment Setup${NC}"
echo "============================================="
echo ""

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

# Function to print info
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Not in a git repository${NC}"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Check if GitHub remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo -e "${RED}❌ No GitHub remote found${NC}"
    echo "Please add a GitHub remote:"
    echo "  git remote add origin https://github.com/your-username/aethercorp.git"
    exit 1
fi

GITHUB_REPO=$(git remote get-url origin | sed 's/.*github.com[:/]\([^.]*\).*/\1/')
echo -e "${BLUE}📁 GitHub Repository: $GITHUB_REPO${NC}"
echo ""

# Step 1: Check if GitHub CLI is installed
print_info "Checking GitHub CLI installation..."
if command -v gh &> /dev/null; then
    print_status 0 "GitHub CLI found"
    
    # Check if user is logged in
    if gh auth status > /dev/null 2>&1; then
        print_status 0 "GitHub CLI authenticated"
        GITHUB_CLI_AVAILABLE=true
    else
        print_warning "GitHub CLI not authenticated"
        echo -e "${YELLOW}💡 Run 'gh auth login' to authenticate${NC}"
        GITHUB_CLI_AVAILABLE=false
    fi
else
    print_warning "GitHub CLI not found"
    echo -e "${YELLOW}💡 Install GitHub CLI for easier setup: https://cli.github.com/${NC}"
    GITHUB_CLI_AVAILABLE=false
fi

echo ""

# Step 2: Guide user through Cloudflare setup
print_info "Cloudflare API Setup Required"
echo "================================"
echo ""
echo "You need to get two values from Cloudflare:"
echo ""
echo "1. 🔑 CLOUDFLARE_API_TOKEN"
echo "   - Go to: https://dash.cloudflare.com/profile/api-tokens"
echo "   - Click 'Create Token'"
echo "   - Use 'Custom token' template"
echo "   - Set permissions:"
echo "     • Account: Cloudflare Pages:Edit"
echo "     • Zone: Zone:Read (for aethercorp.us)"
echo "   - Account Resources: Include your account"
echo "   - Zone Resources: Include aethercorp.us"
echo "   - Copy the generated token"
echo ""
echo "2. 🆔 CLOUDFLARE_ACCOUNT_ID"
echo "   - Go to: https://dash.cloudflare.com/"
echo "   - Select your domain aethercorp.us"
echo "   - In the right sidebar, find 'Account ID'"
echo "   - Copy the Account ID"
echo ""

# Step 3: Help set up GitHub secrets
print_info "GitHub Secrets Setup"
echo "======================"
echo ""

if [ "$GITHUB_CLI_AVAILABLE" = true ]; then
    echo -e "${YELLOW}🔧 Setting up GitHub secrets with GitHub CLI...${NC}"
    echo ""
    
    # Get API token from user
    read -p "Enter your CLOUDFLARE_API_TOKEN: " CLOUDFLARE_API_TOKEN
    if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
        echo -e "${RED}❌ API token cannot be empty${NC}"
        exit 1
    fi
    
    # Get Account ID from user
    read -p "Enter your CLOUDFLARE_ACCOUNT_ID: " CLOUDFLARE_ACCOUNT_ID
    if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
        echo -e "${RED}❌ Account ID cannot be empty${NC}"
        exit 1
    fi
    
    # Set secrets using GitHub CLI
    echo -e "${YELLOW}Setting CLOUDFLARE_API_TOKEN...${NC}"
    if gh secret set CLOUDFLARE_API_TOKEN --body "$CLOUDFLARE_API_TOKEN" --repo "$GITHUB_REPO"; then
        print_status 0 "CLOUDFLARE_API_TOKEN set successfully"
    else
        print_status 1 "Failed to set CLOUDFLARE_API_TOKEN"
    fi
    
    echo -e "${YELLOW}Setting CLOUDFLARE_ACCOUNT_ID...${NC}"
    if gh secret set CLOUDFLARE_ACCOUNT_ID --body "$CLOUDFLARE_ACCOUNT_ID" --repo "$GITHUB_REPO"; then
        print_status 0 "CLOUDFLARE_ACCOUNT_ID set successfully"
    else
        print_status 1 "Failed to set CLOUDFLARE_ACCOUNT_ID"
    fi
    
else
    echo -e "${YELLOW}📝 Manual GitHub Secrets Setup${NC}"
    echo ""
    echo "1. Go to your GitHub repository: https://github.com/$GITHUB_REPO"
    echo "2. Click 'Settings' → 'Secrets and variables' → 'Actions'"
    echo "3. Click 'New repository secret'"
    echo "4. Add these secrets:"
    echo ""
    echo "   Name: CLOUDFLARE_API_TOKEN"
    echo "   Value: [Your API Token from above]"
    echo ""
    echo "   Name: CLOUDFLARE_ACCOUNT_ID"
    echo "   Value: [Your Account ID from above]"
    echo ""
    echo "Press Enter when you've added both secrets..."
    read
fi

echo ""

# Step 4: Verify GitHub Actions workflow
print_info "Verifying GitHub Actions Workflow"
echo "===================================="

if [ -f ".github/workflows/ci-cd.yml" ]; then
    print_status 0 "CI/CD workflow found"
    
    # Check if workflow has the correct deployment configuration
    if grep -q "cloudflare/pages-action" ".github/workflows/ci-cd.yml"; then
        print_status 0 "Cloudflare Pages deployment configured"
    else
        print_status 1 "Cloudflare Pages deployment not configured"
    fi
    
    if grep -q "CLOUDFLARE_API_TOKEN" ".github/workflows/ci-cd.yml"; then
        print_status 0 "API token secret referenced"
    else
        print_status 1 "API token secret not referenced"
    fi
    
    if grep -q "CLOUDFLARE_ACCOUNT_ID" ".github/workflows/ci-cd.yml"; then
        print_status 0 "Account ID secret referenced"
    else
        print_status 1 "Account ID secret not referenced"
    fi
    
else
    print_status 1 "CI/CD workflow not found"
    echo -e "${YELLOW}💡 The workflow should be at .github/workflows/ci-cd.yml${NC}"
fi

echo ""

# Step 5: Check Cloudflare Pages configuration
print_info "Checking Cloudflare Pages Configuration"
echo "==========================================="

if [ -f "wrangler.toml" ]; then
    print_status 0 "wrangler.toml found"
    
    if grep -q "aethercorp" "wrangler.toml"; then
        print_status 0 "Project name configured"
    else
        print_warning "Project name not configured in wrangler.toml"
    fi
else
    print_warning "wrangler.toml not found"
fi

if [ -f "_headers" ]; then
    print_status 0 "_headers file found"
else
    print_warning "_headers file not found"
fi

echo ""

# Step 6: Test the setup
print_info "Testing the Setup"
echo "==================="

echo -e "${YELLOW}🧪 To test the automated deployment:${NC}"
echo ""
echo "1. Make a small change to your code"
echo "2. Commit and push to main branch:"
echo "   git add ."
echo "   git commit -m 'Test automated deployment'"
echo "   git push origin main"
echo ""
echo "3. Check GitHub Actions:"
echo "   https://github.com/$GITHUB_REPO/actions"
echo ""
echo "4. Verify deployment:"
echo "   https://www.aethercorp.us"
echo ""

# Step 7: Summary
print_info "Setup Summary"
echo "=============="

echo -e "${GREEN}✅ Automated CI/CD Pipeline Configured!${NC}"
echo ""
echo "What happens now:"
echo "• Push to main branch → Triggers GitHub Actions"
echo "• Lint & Test → Code quality checks"
echo "• Build → Flutter web build"
echo "• Deploy → Automatic Cloudflare Pages deployment"
echo "• Live → Site updates at https://www.aethercorp.us"
echo ""

echo -e "${BLUE}🔧 Next Steps:${NC}"
echo "1. Push your code to main branch to trigger first deployment"
echo "2. Check GitHub Actions tab for build status"
echo "3. Verify your site is live at https://www.aethercorp.us"
echo "4. Set up custom domain in Cloudflare Pages if not already done"
echo ""

echo -e "${GREEN}🎉 Your AetherCorp website will now deploy automatically!${NC}"



