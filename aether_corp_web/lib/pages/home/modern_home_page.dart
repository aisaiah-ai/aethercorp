import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../shared/widgets/main_layout.dart';
import '../../core/theme/modern_theme.dart';

/// Modern, redesigned home page with glassmorphic effects, animated hero,
/// smooth transitions, and responsive design
class ModernHomePage extends StatefulWidget {
  const ModernHomePage({super.key});

  @override
  State<ModernHomePage> createState() => _ModernHomePageState();
}

class _ModernHomePageState extends State<ModernHomePage> {
  final ScrollController _scrollController = ScrollController();

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return MainLayout(
      showNavigation: false,
      child: SingleChildScrollView(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        child: Column(
          children: [
            _buildHeroSection(context, isMobile),
            _buildServicesSection(context, isMobile),
            _buildStatsSection(context, isMobile),
            _buildCTASection(context, isMobile),
            _buildFooter(context, isMobile),
          ],
        ),
      ),
    );
  }

  /// Hero section with animated gradient background, animated text, and glowing CTA
  Widget _buildHeroSection(BuildContext context, bool isMobile) {
    return Container(
      height: isMobile ? 700 : 800,
      width: double.infinity,
      decoration: BoxDecoration(
        gradient: ModernTheme.gradientBlueIndigoCyan,
      ),
      child: Stack(
        children: [
          // Animated gradient overlay for depth
          _buildAnimatedGradientOverlay(),

          // Floating particles effect
          _buildFloatingParticles(),

          // Main content
          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: isMobile ? 24 : 64),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Glowing icon
                  Container(
                    width: 120,
                    height: 120,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      boxShadow: [
                        BoxShadow(
                          color: Colors.white.withValues(alpha: 0.3),
                          blurRadius: 40,
                          spreadRadius: 10,
                        ),
                      ],
                    ),
                    child: Icon(
                      Icons.auto_awesome,
                      size: 60,
                      color: Colors.white,
                    ),
                  )
                      .animate()
                      .fadeIn(duration: 800.ms)
                      .scale(
                          begin: const Offset(0.5, 0.5),
                          end: const Offset(1.0, 1.0))
                      .then()
                      .shimmer(duration: const Duration(seconds: 2)),

                  const SizedBox(height: 40),

                  // Animated headline using AnimatedTextKit
                  AnimatedTextKit(
                    animatedTexts: [
                      TyperAnimatedText(
                        'Empowering Data.',
                        textStyle: Theme.of(context)
                                .textTheme
                                .displayLarge
                                ?.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              shadows: [
                                Shadow(
                                  color: Colors.black.withValues(alpha: 0.3),
                                  offset: const Offset(0, 2),
                                  blurRadius: 8,
                                ),
                              ],
                            ) ??
                            const TextStyle(),
                        speed: const Duration(milliseconds: 100),
                      ),
                      TyperAnimatedText(
                        'Accelerating Intelligence.',
                        textStyle: Theme.of(context)
                                .textTheme
                                .displayLarge
                                ?.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              shadows: [
                                Shadow(
                                  color: Colors.black.withValues(alpha: 0.3),
                                  offset: const Offset(0, 2),
                                  blurRadius: 8,
                                ),
                              ],
                            ) ??
                            const TextStyle(),
                        speed: const Duration(milliseconds: 100),
                      ),
                    ],
                    isRepeatingAnimation: true,
                    pause: const Duration(milliseconds: 1500),
                  ),

                  const SizedBox(height: 24),

                  // Subtitle
                  Text(
                    'Transforming enterprises with cutting-edge AI, Cloud, and Data solutions',
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                          color: Colors.white.withValues(alpha: 0.9),
                          fontSize: isMobile ? 16 : 18,
                        ),
                  )
                      .animate()
                      .fadeIn(delay: 200.ms, duration: 800.ms)
                      .slideY(begin: 0.3, end: 0),

                  const SizedBox(height: 48),

                  // Glowing CTA button
                  _buildGlowingCTA(context)
                      .animate()
                      .fadeIn(delay: 400.ms, duration: 800.ms)
                      .slideY(begin: 0.3, end: 0),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// Animated gradient overlay for dynamic effect
  Widget _buildAnimatedGradientOverlay() {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            ModernTheme.aetherBlue.withValues(alpha: 0.3),
            ModernTheme.electricCyan.withValues(alpha: 0.2),
          ],
        ),
      ),
    ).animate(onPlay: (controller) => controller.repeat()).shimmer(
        duration: const Duration(seconds: 3),
        color: Colors.white.withValues(alpha: 0.1));
  }

  /// Floating particles effect
  Widget _buildFloatingParticles() {
    return Stack(
      children: List.generate(15, (index) {
        return Positioned(
          left: (index * 80.0) % MediaQuery.of(context).size.width,
          top: (index * 50.0) % 800.0,
          child: Container(
            width: 4.0,
            height: 4.0,
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.5),
              shape: BoxShape.circle,
            ),
          )
              .animate(onPlay: (controller) => controller.repeat())
              .moveY(
                begin: 0,
                end: -100,
                duration: Duration(seconds: 3 + (index % 3)),
                curve: Curves.easeInOut,
              )
              .fadeOut(duration: Duration(seconds: 2 + (index % 2)))
              .fadeIn(duration: const Duration(seconds: 1)),
        );
      }),
    );
  }

  /// Glowing CTA button with gradient border
  Widget _buildGlowingCTA(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: LinearGradient(
          colors: [
            Colors.white,
            ModernTheme.electricCyan.withValues(alpha: 0.8)
          ],
        ),
        boxShadow: [
          BoxShadow(
            color: ModernTheme.electricCyan.withValues(alpha: 0.5),
            blurRadius: 20,
            spreadRadius: 5,
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => context.go('/contact'),
          borderRadius: BorderRadius.circular(16),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 48, vertical: 20),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text(
                  'Get Started',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w700,
                    color: ModernTheme.midnightGray,
                  ),
                ),
                const SizedBox(width: 12),
                const Icon(Icons.arrow_forward,
                    color: ModernTheme.midnightGray, size: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }

  /// Services section with animated cards and hover effects
  Widget _buildServicesSection(BuildContext context, bool isMobile) {
    return Container(
      padding:
          EdgeInsets.symmetric(vertical: 80, horizontal: isMobile ? 24 : 64),
      child: Column(
        children: [
          Text(
            'Our Core Services',
            style: Theme.of(context).textTheme.displayMedium,
            textAlign: TextAlign.center,
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          Text(
            'Cutting-edge solutions for your digital transformation',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Theme.of(context).textTheme.bodyMedium?.color,
                ),
            textAlign: TextAlign.center,
          ).animate().fadeIn(delay: 200.ms, duration: 600.ms),

          const SizedBox(height: 64),

          // Service cards
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: isMobile ? 1 : 2,
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: isMobile ? 2 : 1.2,
            ),
            itemCount: 4,
            itemBuilder: (context, index) => _buildServiceCard(context, index),
          ),
        ],
      ),
    );
  }

  /// Individual service card with hover effects
  Widget _buildServiceCard(BuildContext context, int index) {
    final services = [
      {
        'title': 'AI Solutions',
        'description':
            'Machine learning, deep learning, and generative AI for intelligent automation',
        'icon': Icons.psychology_outlined,
        'color': const Color(0xFF9333EA),
      },
      {
        'title': 'Cloud Migration',
        'description':
            'AWS, GCP, Azure expertise for seamless infrastructure transformation',
        'icon': Icons.cloud_outlined,
        'color': ModernTheme.aetherBlue,
      },
      {
        'title': 'Data Engineering',
        'description':
            'Spark, Databricks, and big data pipelines for analytics excellence',
        'icon': Icons.analytics_outlined,
        'color': const Color(0xFF10B981),
      },
      {
        'title': 'Prompt Engineering',
        'description':
            'GenAI UX, chatbots, and conversational AI for enhanced user experiences',
        'icon': Icons.chat_bubble_outline,
        'color': ModernTheme.electricCyan,
      },
    ];

    final service = services[index];

    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      child: Card(
        elevation: 4,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: BorderSide(
            color: (service['color'] as Color).withValues(alpha: 0.2),
            width: 1,
          ),
        ),
        child: InkWell(
          onTap: () {},
          borderRadius: BorderRadius.circular(16),
          onHover: (hovering) {
            // Hover effect can be added here
          },
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    color: (service['color'] as Color).withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Icon(
                    service['icon'] as IconData,
                    color: service['color'] as Color,
                    size: 28,
                  ),
                ),
                const SizedBox(height: 20),
                Text(
                  service['title'] as String,
                  style: Theme.of(context).textTheme.displaySmall?.copyWith(
                        fontWeight: FontWeight.w600,
                      ),
                ),
                const SizedBox(height: 8),
                Expanded(
                  child: Text(
                    service['description'] as String,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Text(
                      'Learn more',
                      style: TextStyle(
                        color: service['color'] as Color,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    const SizedBox(width: 8),
                    Icon(
                      Icons.arrow_forward,
                      size: 16,
                      color: service['color'] as Color,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    )
        .animate()
        .fadeIn(delay: (index * 100).ms)
        .slideY(begin: 0.3, end: 0)
        .then()
        .shimmer(
            duration: const Duration(seconds: 1),
            color: Colors.white.withValues(alpha: 0.3));
  }

  /// Stats section with animated counters
  Widget _buildStatsSection(BuildContext context, bool isMobile) {
    return Container(
      padding:
          EdgeInsets.symmetric(vertical: 80, horizontal: isMobile ? 24 : 64),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            ModernTheme.aetherBlue.withValues(alpha: 0.05),
            ModernTheme.electricCyan.withValues(alpha: 0.05),
          ],
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildStatItem(context, '500+', 'Projects Delivered'),
          _buildStatItem(context, '99%', 'Client Satisfaction'),
          _buildStatItem(context, '24/7', 'Support Available'),
        ].animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),
      ),
    );
  }

  /// Individual stat item
  Widget _buildStatItem(BuildContext context, String value, String label) {
    return Column(
      children: [
        Text(
          value,
          style: Theme.of(context).textTheme.displayLarge?.copyWith(
                color: ModernTheme.aetherBlue,
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 8),
        Text(
          label,
          style: Theme.of(context).textTheme.bodyMedium,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  /// CTA section before footer
  Widget _buildCTASection(BuildContext context, bool isMobile) {
    return Container(
      padding: EdgeInsets.all(isMobile ? 48 : 80),
      child: Card(
        elevation: 8,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
        ),
        child: Container(
          padding: const EdgeInsets.all(48),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: ModernTheme.gradientBlueIndigoCyan,
          ),
          child: Column(
            children: [
              Text(
                'Ready to Transform Your Business?',
                style: Theme.of(context).textTheme.displayMedium?.copyWith(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 24),
              Text(
                'Let\'s build your next breakthrough together',
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                      color: Colors.white.withValues(alpha: 0.9),
                      fontSize: 18,
                    ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 32),
              ElevatedButton(
                onPressed: () => context.go('/contact'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: ModernTheme.aetherBlue,
                  padding:
                      const EdgeInsets.symmetric(horizontal: 48, vertical: 20),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  textStyle: const TextStyle(
                      fontSize: 18, fontWeight: FontWeight.w700),
                ),
                child: const Text('Start Your Project'),
              ),
            ],
          ),
        ),
      ),
    ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0);
  }

  /// Glassmorphic footer with gradient overlay
  Widget _buildFooter(BuildContext context, bool isMobile) {
    return Container(
      padding: EdgeInsets.all(isMobile ? 32 : 64),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            ModernTheme.softWhite,
            ModernTheme.midnightGray,
          ],
        ),
      ),
      child: BackdropFilter(
        filter: ui.ImageFilter.blur(sigmaX: 10, sigmaY: 10),
        child: Container(
          padding: EdgeInsets.all(isMobile ? 24 : 48),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Colors.white.withValues(alpha: 0.1),
                Colors.black.withValues(alpha: 0.1),
              ],
            ),
            border: Border.all(
              color: Colors.white.withValues(alpha: 0.2),
              width: 1,
            ),
          ),
          child: Column(
            children: [
              // Logo and tagline
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.auto_awesome,
                    size: 32,
                    color: Colors.white,
                  ),
                  const SizedBox(width: 12),
                  Text(
                    'AetherCorp',
                    style: Theme.of(context).textTheme.displaySmall?.copyWith(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                ],
              ),
              const SizedBox(height: 24),

              // Quick links grid
              if (!isMobile) ..._buildFooterLinks(context),

              const SizedBox(height: 32),

              // Social media icons
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  _buildSocialIcon(Icons.business, 'LinkedIn'),
                  const SizedBox(width: 24),
                  _buildSocialIcon(Icons.code, 'GitHub'),
                  const SizedBox(width: 24),
                  _buildSocialIcon(Icons.email, 'Email'),
                  const SizedBox(width: 24),
                  _buildSocialIcon(Icons.chat_bubble, 'Twitter'),
                ],
              ),

              const SizedBox(height: 32),
              const Divider(color: Colors.white24),
              const SizedBox(height: 24),

              // Copyright
              Text(
                '© 2024 AetherCorp. All rights reserved.',
                style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.white.withValues(alpha: 0.7),
                    ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// Footer links (desktop only)
  List<Widget> _buildFooterLinks(BuildContext context) {
    return [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          _buildFooterLink(context, 'Services', '/services'),
          _buildFooterLink(context, 'Case Studies', '/case-studies'),
          _buildFooterLink(context, 'About', '/about'),
          _buildFooterLink(context, 'Contact', '/contact'),
        ],
      ),
    ];
  }

  /// Individual footer link
  Widget _buildFooterLink(BuildContext context, String label, String route) {
    return TextButton(
      onPressed: () => context.go(route),
      child: Text(
        label,
        style: TextStyle(
          color: Colors.white.withValues(alpha: 0.9),
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }

  /// Social media icon with glow effect
  Widget _buildSocialIcon(IconData icon, String tooltip) {
    return Tooltip(
      message: tooltip,
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: Colors.white.withValues(alpha: 0.3),
            width: 1,
          ),
        ),
        child: Icon(
          icon,
          color: Colors.white,
          size: 20,
        ),
      ),
    );
  }
}
