# AetherCorp CI/CD Configuration

This document describes the automated CI/CD setup for the AetherCorp Flutter web application.

## 🚀 Overview

The CI/CD pipeline includes:
- **Automated linting and code quality checks**
- **Comprehensive error detection**
- **Build verification and testing**
- **Deployment to Cloudflare Pages**
- **Performance and security monitoring**

## 📁 File Structure

```
aether_corp/
├── .github/workflows/
│   ├── ci-cd.yml              # Main CI/CD pipeline
│   └── pr-validation.yml      # Pull request validation
├── scripts/
│   ├── lint-check.sh          # Comprehensive lint checking
│   ├── error-check.sh         # Error detection and analysis
│   ├── deployment-check.sh    # Deployment verification
│   ├── deploy.sh              # Enhanced deployment script
│   ├── run-all-checks.sh      # Master check script
│   └── pre-commit-hook.sh     # Git pre-commit hook
├── Makefile                   # Easy command execution
├── wrangler.toml              # Cloudflare Pages configuration
├── _headers                   # Security headers
└── README-CI-CD.md           # This documentation
```

## 🔧 Quick Start

### Using Make Commands

```bash
# Run all checks
make check

# Deploy to Cloudflare Pages
make deploy

# Run lint check only
make lint

# Run tests only
make test

# Build the application
make build

# Clean build artifacts
make clean

# Install git hooks
make install-hooks

# Get help
make help
```

### Using Scripts Directly

```bash
# Run all checks
bash scripts/run-all-checks.sh

# Run individual checks
bash scripts/lint-check.sh
bash scripts/error-check.sh
bash scripts/deployment-check.sh

# Deploy application
bash scripts/deploy.sh
```

## 🔍 CI/CD Pipeline

### GitHub Actions Workflows

#### 1. Main CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches
- Manual workflow dispatch

**Jobs:**
1. **Lint & Analyze** - Code quality checks
2. **Test** - Unit tests with coverage
3. **Build** - Web application build
4. **Deploy** - Cloudflare Pages deployment (main branch only)
5. **Security** - Security audit
6. **Performance** - Bundle size and performance checks

#### 2. Pull Request Validation (`.github/workflows/pr-validation.yml`)

**Triggers:**
- Pull requests to `main` or `develop` branches

**Features:**
- Quick validation for PRs
- Automated PR comments with status
- Fast feedback loop

### Scripts Overview

#### 1. Lint Check Script (`scripts/lint-check.sh`)

**Checks:**
- Flutter analyze
- Code formatting
- Linter rules
- Unused imports
- TODO comments
- Print statements
- Security audit

**Usage:**
```bash
bash scripts/lint-check.sh
```

#### 2. Error Check Script (`scripts/error-check.sh`)

**Checks:**
- Flutter environment
- Dependencies
- Code analysis
- Build verification
- Test execution
- Security vulnerabilities
- Performance issues
- Configuration validation

**Usage:**
```bash
bash scripts/error-check.sh
```

#### 3. Deployment Check Script (`scripts/deployment-check.sh`)

**Checks:**
- Build directory existence
- Essential files (index.html, main.dart.js, etc.)
- Asset integrity
- JavaScript errors
- Performance metrics
- Security headers
- Cloudflare configuration

**Usage:**
```bash
bash scripts/deployment-check.sh
```

#### 4. Enhanced Deploy Script (`scripts/deploy.sh`)

**Features:**
- Pre-deployment checks
- Clean build process
- Build verification
- Deployment package creation
- Detailed reporting
- Error handling

**Usage:**
```bash
bash scripts/deploy.sh
```

#### 5. Master Check Script (`scripts/run-all-checks.sh`)

**Features:**
- Runs all check scripts
- Generates comprehensive report
- Provides summary statistics
- Exit codes for automation

**Usage:**
```bash
bash scripts/run-all-checks.sh
```

## 🛠️ Setup Instructions

### 1. Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd aether_corp

# Install dependencies
make deps

# Install git hooks
make install-hooks

# Run initial checks
make check
```

### 2. GitHub Secrets Configuration

Configure these secrets in your GitHub repository:

```
CLOUDFLARE_API_TOKEN    # Cloudflare API token
CLOUDFLARE_ACCOUNT_ID   # Cloudflare account ID
```

### 3. Cloudflare Pages Setup

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command:** `cd aether_corp_web && flutter build web --release`
   - **Build output directory:** `aether_corp_web/build/web`
   - **Root directory:** `/`

### 4. Custom Domain Setup

1. Add custom domain `aethercorp.us` in Cloudflare Pages
2. Configure DNS settings as instructed
3. Verify SSL certificate activation

## 📊 Monitoring and Reports

### Generated Reports

The scripts generate detailed reports:

- `ci-cd-report-YYYYMMDD_HHMMSS.txt` - Master check report
- `error-check-report-YYYYMMDD_HHMMSS.txt` - Error analysis report
- `deployment-report-YYYYMMDD_HHMMSS.txt` - Deployment report

### GitHub Actions Logs

- Check the "Actions" tab in your GitHub repository
- View detailed logs for each workflow run
- Monitor build and deployment status

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Failures

```bash
# Clean and rebuild
make clean
make build

# Check for dependency issues
cd aether_corp_web
flutter pub deps
```

#### 2. Lint Errors

```bash
# Fix formatting
make format

# Fix imports
cd aether_corp_web
dart fix --apply
```

#### 3. Test Failures

```bash
# Run tests with verbose output
cd aether_corp_web
flutter test --verbose
```

#### 4. Deployment Issues

```bash
# Check deployment configuration
bash scripts/deployment-check.sh

# Verify build output
ls -la aether_corp_web/build/web/
```

### Debug Commands

```bash
# Check Flutter environment
cd aether_corp_web
flutter doctor -v

# Check dependencies
flutter pub deps

# Analyze code
flutter analyze --verbose

# Check build output
ls -la build/web/
```

## 🚀 Deployment Process

### Automatic Deployment

1. **Push to main branch** → Triggers GitHub Actions
2. **Build process** → Flutter web build
3. **Deploy to Cloudflare** → Automatic deployment
4. **Live site** → Available at https://aethercorp.us

### Manual Deployment

```bash
# Run full deployment process
make deploy

# Or use the script directly
bash scripts/deploy.sh
```

## 📈 Performance Monitoring

### Bundle Size Monitoring

- Main JS bundle size tracking
- Asset size analysis
- Performance warnings for large files

### Security Monitoring

- Dependency vulnerability scanning
- Security header verification
- Hardcoded secret detection

## 🔄 Maintenance

### Regular Tasks

1. **Update dependencies:**
   ```bash
   make upgrade
   ```

2. **Run full checks:**
   ```bash
   make check
   ```

3. **Clean build artifacts:**
   ```bash
   make clean
   ```

### Monitoring

- Check GitHub Actions status regularly
- Review generated reports
- Monitor Cloudflare Pages deployment logs
- Verify site functionality after deployments

## 📞 Support

If you encounter issues:

1. Check the generated reports
2. Review GitHub Actions logs
3. Run individual check scripts for debugging
4. Verify all configuration files are present
5. Ensure all secrets are properly configured

---

**🎉 Your AetherCorp CI/CD pipeline is now fully automated!**



