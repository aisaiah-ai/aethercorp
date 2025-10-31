import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../../core/providers/theme_provider.dart';
import '../../core/theme/app_theme.dart';

class MainLayout extends StatefulWidget {
  final Widget child;
  final bool showNavigation;

  const MainLayout({
    super.key,
    required this.child,
    this.showNavigation = true,
  });

  @override
  State<MainLayout> createState() => _MainLayoutState();
}

class _MainLayoutState extends State<MainLayout> {
  final ScrollController _scrollController = ScrollController();

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Scaffold(
      body: Column(
        children: [
          if (widget.showNavigation) _buildNavigationBar(isMobile),
          Expanded(
            child: SingleChildScrollView(
              controller: _scrollController,
              child: widget.child,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavigationBar(bool isMobile) {
    return Consumer<ThemeProvider>(
      builder: (context, themeProvider, child) {
        return Container(
          decoration: BoxDecoration(
            color: Theme.of(context).scaffoldBackgroundColor,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.1),
                blurRadius: 10,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: SafeArea(
            child: Padding(
              padding: EdgeInsets.symmetric(
                horizontal: isMobile ? 16 : 32,
                vertical: 16,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  _buildLogo(),
                  if (!isMobile) _buildDesktopNavigation(),
                  _buildThemeToggle(),
                  if (isMobile) _buildMobileMenuButton(),
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildLogo() {
    return GestureDetector(
      onTap: () => context.go('/'),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: const BoxDecoration(
              gradient: AppTheme.primaryGradient,
              shape: BoxShape.circle,
            ),
            child: const Icon(
              Icons.auto_awesome,
              color: Colors.white,
              size: 24,
            ),
          ),
          const SizedBox(width: 12),
          Text(
            'AetherCorp',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
              fontWeight: FontWeight.w700,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDesktopNavigation() {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        _buildNavItem('Home', '/', Icons.home_outlined),
        const SizedBox(width: 24),
        _buildNavItem('Services', '/services', Icons.engineering_outlined),
        const SizedBox(width: 24),
        _buildNavItem('Case Studies', '/case-studies', Icons.work_outline),
        const SizedBox(width: 24),
        _buildNavItem('Contact', '/contact', Icons.contact_mail_outlined),
      ],
    );
  }

  Widget _buildNavItem(String label, String route, IconData icon) {
    final currentLocation = GoRouterState.of(context).uri.path;
    final isActive = currentLocation == route;

    return GestureDetector(
      onTap: () => context.go(route),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: isActive
              ? Theme.of(context).colorScheme.primary.withValues(alpha: 0.1)
              : Colors.transparent,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              size: 18,
              color: isActive
                  ? Theme.of(context).colorScheme.primary
                  : Theme.of(context).textTheme.bodyMedium?.color,
            ),
            const SizedBox(width: 8),
            Text(
              label,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: isActive ? Theme.of(context).colorScheme.primary : null,
                fontWeight: isActive ? FontWeight.w600 : FontWeight.w400,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildThemeToggle() {
    return Consumer<ThemeProvider>(
      builder: (context, themeProvider, child) {
        return IconButton(
          onPressed: () => themeProvider.toggleTheme(),
          icon: Icon(
            themeProvider.isDarkMode
                ? FontAwesomeIcons.sun
                : FontAwesomeIcons.moon,
            size: 20,
          ),
          tooltip: themeProvider.isDarkMode
              ? 'Switch to light mode'
              : 'Switch to dark mode',
        );
      },
    );
  }

  Widget _buildMobileMenuButton() {
    return IconButton(
      onPressed: () => _showMobileMenu(),
      icon: const Icon(Icons.menu),
    );
  }

  void _showMobileMenu() {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => Container(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey[300],
                borderRadius: BorderRadius.circular(2),
              ),
            ),
            const SizedBox(height: 24),
            _buildMobileNavItem('Home', '/', Icons.home_outlined),
            _buildMobileNavItem(
              'Services',
              '/services',
              Icons.engineering_outlined,
            ),
            _buildMobileNavItem(
              'Case Studies',
              '/case-studies',
              Icons.work_outline,
            ),
            _buildMobileNavItem(
              'Contact',
              '/contact',
              Icons.contact_mail_outlined,
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }

  Widget _buildMobileNavItem(String label, String route, IconData icon) {
    return ListTile(
      leading: Icon(icon),
      title: Text(label),
      onTap: () {
        Navigator.pop(context);
        context.go(route);
      },
    );
  }
}
