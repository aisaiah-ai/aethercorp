# AetherCorp Web Application

A modern, responsive Flutter web application for AetherCorp - an elite AI, Cloud, and Data consultancy company.

## 🌟 Features

- **Modern Design**: Professional, elegant, tech-forward interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark modes
- **SEO Optimized**: Semantic HTML structure and metadata
- **Interactive Animations**: Smooth transitions and hover effects using flutter_animate
- **Navigation**: Clean navigation with go_router for URL-based routing

## 🏗️ Architecture

### Core Services Showcase
1. **Cloud Consulting & DevOps** - AWS, GCP, Azure infrastructure
2. **Big Data & Modern ETL Pipelines** - Apache Spark, Databricks, Lakehouse architectures
3. **AI & Machine Learning** - End-to-end model development and Generative AI solutions
4. **Prompt Engineering & GenAI UX** - Structured frameworks and chatbot integrations
5. **Web & Mobile App Development** - Flutter, Firebase, secure auth solutions
6. **Data Migration & Legacy Modernization** - Automated migration pipelines

### Pages
- **Home**: Animated hero section with company overview
- **Services**: Detailed service portfolio with capabilities
- **Case Studies**: Success stories and project showcases
- **Team**: Expert team member profiles
- **Contact**: Interactive contact form
- **Blog**: Technical insights and industry trends

## 🚀 Getting Started

### Prerequisites
- Flutter SDK (3.9.2 or higher)
- Dart SDK
- Web browser for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aether_corp_web
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Run the application**
   ```bash
   flutter run -d web-server --web-port 8080
   ```

4. **Build for production**
   ```bash
   flutter build web --release
   ```

## 🛠️ Tech Stack

### Core Framework
- **Flutter**: Cross-platform UI framework
- **Dart**: Programming language

### Key Packages
- `go_router`: Navigation and routing
- `provider`: State management
- `flutter_animate`: Smooth animations
- `responsive_framework`: Responsive design
- `google_fonts`: Typography
- `font_awesome_flutter`: Icons

### Firebase Integration
- `firebase_core`: Firebase initialization
- `firebase_auth`: Authentication
- `cloud_firestore`: Database

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#1A365D`
- **Primary Violet**: `#553C9A`
- **Accent Blue**: `#2D5A87`
- **Accent Violet**: `#7C3AED`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Components
- Material Design 3 components
- Custom card designs
- Gradient backgrounds
- Animated elements

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 450px
- **Tablet**: 451px - 800px
- **Desktop**: 801px - 1920px
- **4K**: > 1921px

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase project**
   ```bash
   firebase init hosting
   ```

4. **Build and deploy**
   ```bash
   flutter build web --release
   firebase deploy
   ```

### Alternative Hosting Options

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the build folder
- **Cloudflare Pages**: Git integration for continuous deployment

### Custom Domain Configuration

1. **Update `web/index.html`** with your domain
2. **Configure DNS** to point to your hosting provider
3. **Enable HTTPS** for secure connections

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_domain
FIREBASE_PROJECT_ID=your_project_id
```

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication and Firestore
3. Add your web app configuration
4. Update `lib/firebase_options.dart`

## 📊 Performance Optimization

- **Code Splitting**: Automatic with Flutter web
- **Image Optimization**: WebP format support
- **Lazy Loading**: Components load as needed
- **Caching**: Browser caching for static assets

## 🧪 Testing

```bash
# Run tests
flutter test

# Run integration tests
flutter drive --target=test_driver/app.dart
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to AetherCorp. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: hello@aethercorp.us
- Website: https://aethercorp.us

---

**Built with ❤️ by the AetherCorp Team**