import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../pages/home/home_page.dart';
import '../../pages/services/services_page.dart';
import '../../pages/case_studies/case_studies_page.dart';
import '../../pages/contact/contact_page.dart';
import '../../pages/blog/blog_page.dart';
import '../../pages/case_study_detail/case_study_detail_page.dart';

final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>();

final GoRouter appRouter = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      name: 'home',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/services',
      name: 'services',
      builder: (context, state) => const ServicesPage(),
    ),
    GoRoute(
      path: '/case-studies',
      name: 'case-studies',
      builder: (context, state) => const CaseStudiesPage(),
      routes: [
        GoRoute(
          path: '/:id',
          name: 'case-study-detail',
          builder: (context, state) {
            final id = state.pathParameters['id']!;
            return CaseStudyDetailPage(caseStudyId: id);
          },
        ),
      ],
    ),
    GoRoute(
      path: '/contact',
      name: 'contact',
      builder: (context, state) => const ContactPage(),
    ),
    GoRoute(
      path: '/blog',
      name: 'blog',
      builder: (context, state) => const BlogPage(),
    ),
  ],
  errorBuilder: (context, state) => Scaffold(
    body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(Icons.error_outline, size: 64, color: Colors.red),
          const SizedBox(height: 16),
          Text(
            'Page not found',
            style: Theme.of(context).textTheme.headlineMedium,
          ),
          const SizedBox(height: 8),
          Text(
            state.error.toString(),
            style: Theme.of(context).textTheme.bodyMedium,
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () => context.go('/'),
            child: const Text('Go Home'),
          ),
        ],
      ),
    ),
  ),
);
