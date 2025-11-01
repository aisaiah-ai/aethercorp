# AetherCorp Makefile
# Easy commands for development and deployment

.PHONY: help lint test build deploy check clean install-hooks

# Default target
help:
	@echo "AetherCorp Development Commands"
	@echo "==============================="
	@echo ""
	@echo "Development:"
	@echo "  make lint          - Run lint check"
	@echo "  make test          - Run tests"
	@echo "  make build         - Build web application"
	@echo "  make clean         - Clean build artifacts"
	@echo ""
	@echo "CI/CD:"
	@echo "  make pre-commit    - Run pre-commit checks (format, analyze, build)"
	@echo "  make pre-deploy-check - Run comprehensive pre-deployment check"
	@echo "  make check         - Run all checks (lint, error, deployment)"
	@echo "  make deploy         - Deploy to Cloudflare Pages"
	@echo "  make error-check    - Run comprehensive error check"
	@echo "  make deploy-check   - Run deployment verification"
	@echo ""
	@echo "Setup:"
	@echo "  make install-hooks - Install git pre-commit hooks"
	@echo "  make setup          - Initial project setup"
	@echo "  make setup-automated-deployment - Set up automated CI/CD"
	@echo ""
	@echo "Utilities:"
	@echo "  make format         - Format code"
	@echo "  make analyze        - Run code analysis"
	@echo "  make deps           - Get dependencies"
	@echo "  make upgrade        - Upgrade dependencies"

# Development commands
lint:
	@echo "🔍 Running lint check..."
	@bash scripts/lint-check.sh

test:
	@echo "🧪 Running tests..."
	@cd aether_corp_web && flutter test

build:
	@echo "🏗️  Building web application..."
	@cd aether_corp_web && flutter build web --release

clean:
	@echo "🧹 Cleaning build artifacts..."
	@cd aether_corp_web && flutter clean
	@rm -f aethercorp-deployment.zip
	@rm -f deployment-report-*.txt
	@rm -f error-check-report-*.txt
	@rm -f ci-cd-report-*.txt

format:
	@echo "🎨 Formatting code..."
	@cd aether_corp_web && dart format .

analyze:
	@echo "🔍 Running code analysis..."
	@cd aether_corp_web && flutter analyze

deps:
	@echo "📦 Getting dependencies..."
	@cd aether_corp_web && flutter pub get

upgrade:
	@echo "⬆️  Upgrading dependencies..."
	@cd aether_corp_web && flutter pub upgrade

# CI/CD commands
pre-commit:
	@echo "🔍 Running pre-commit checks..."
	@bash scripts/pre-commit-hook.sh

pre-deploy-check:
	@echo "🔍 Running pre-deployment check..."
	@bash scripts/pre-deployment-check.sh

check:
	@echo "🔍 Running all checks..."
	@bash scripts/run-all-checks.sh

deploy:
	@echo "🚀 Deploying to Cloudflare Pages..."
	@bash scripts/deploy.sh

error-check:
	@echo "🔍 Running error check..."
	@bash scripts/error-check.sh

deploy-check:
	@echo "🚀 Running deployment check..."
	@bash scripts/deployment-check.sh

# Setup commands
install-hooks:
	@echo "🔧 Installing git pre-commit hooks..."
	@cp scripts/pre-commit-hook.sh .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit
	@echo "✅ Pre-commit hook installed"

setup:
	@echo "⚙️  Setting up project..."
	@make deps
	@make install-hooks
	@echo "✅ Project setup completed"

setup-automated-deployment:
	@echo "🚀 Setting up automated deployment..."
	@bash scripts/setup-automated-deployment.sh

# Quick development workflow
dev: deps lint test build
	@echo "✅ Development workflow completed"

# Full CI/CD workflow
ci: clean deps lint test build deploy-check
	@echo "✅ CI/CD workflow completed"

# Emergency commands
force-deploy:
	@echo "🚨 Force deploying (skipping checks)..."
	@cd aether_corp_web && flutter build web --release
	@bash scripts/deploy.sh

# Status check
status:
	@echo "📊 Project Status"
	@echo "================"
	@echo "Flutter version: $$(cd aether_corp_web && flutter --version | head -n 1)"
	@echo "Build status: $$(if [ -d "aether_corp_web/build/web" ]; then echo "✅ Built"; else echo "❌ Not built"; fi)"
	@echo "Dependencies: $$(cd aether_corp_web && flutter pub deps --no-dev > /dev/null 2>&1 && echo "✅ OK" || echo "❌ Issues")"
	@echo "Tests: $$(cd aether_corp_web && flutter test > /dev/null 2>&1 && echo "✅ Passing" || echo "❌ Failing")"

# Help for specific commands
lint-help:
	@echo "Lint Check Help"
	@echo "==============="
	@echo "The lint check script performs:"
	@echo "- Flutter analyze"
	@echo "- Code formatting check"
	@echo "- Linter rules check"
	@echo "- Unused imports check"
	@echo "- TODO comments check"
	@echo "- Print statements check"
	@echo "- Security audit"

deploy-help:
	@echo "Deployment Help"
	@echo "==============="
	@echo "The deployment script:"
	@echo "1. Runs pre-deployment checks"
	@echo "2. Cleans and builds the project"
	@echo "3. Verifies build output"
	@echo "4. Creates deployment package"
	@echo "5. Generates deployment report"
	@echo ""
	@echo "Manual deployment steps:"
	@echo "1. Upload aethercorp-deployment.zip to Cloudflare Pages"
	@echo "2. Configure custom domain (aethercorp.us)"
	@echo "3. Test the deployed site"
