import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../shared/widgets/main_layout.dart';
import '../../shared/widgets/animated_illustration.dart';
import '../../shared/widgets/tech_grid_painter.dart';
import '../../core/theme/app_theme.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return MainLayout(
      child: Column(
        children: [
          _buildHeroSection(context),
          _buildServicesOverview(context),
          _buildTechStackSection(context),
          _buildCTASection(context),
          _buildFooter(context),
        ],
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return SizedBox(
      height: isMobile ? 600 : 700,
      width: double.infinity,
      child: Stack(
        children: [
          // Enhanced animated background with video and particles
          _buildEnhancedBackground(context),

          // Floating particles overlay
          const FloatingParticles(
            particleCount: 30,
            particleColor: Colors.white,
            particleSize: 3.0,
          ),

          // Main content
          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: isMobile ? 24 : 48),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Animated tech illustration
                  Icon(Icons.auto_awesome, size: 80, color: Colors.white)
                      .animate()
                      .fadeIn(duration: 1000.ms)
                      .scale(
                        begin: const Offset(0.5, 0.5),
                        end: const Offset(1.0, 1.0),
                      )
                      .then()
                      .shimmer(duration: const Duration(seconds: 2)),

                  const SizedBox(height: 24),

                  // Main heading with enhanced typography
                  Text(
                        'Engineering the Future\nwith Data + AI',
                        textAlign: TextAlign.center,
                        style: Theme.of(context).textTheme.displayLarge
                            ?.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.w700,
                              height: 1.2,
                              shadows: [
                                Shadow(
                                  color: Colors.black.withOpacity(0.3),
                                  offset: const Offset(0, 2),
                                  blurRadius: 4,
                                ),
                              ],
                            ),
                      )
                      .animate()
                      .fadeIn(duration: 800.ms)
                      .slideY(begin: 0.3, end: 0),

                  const SizedBox(height: 24),

                  // Enhanced subtitle with animation
                  Text(
                        'Elite AI, Cloud, and Data Consultancy for Enterprise Success',
                        textAlign: TextAlign.center,
                        style: Theme.of(context).textTheme.headlineMedium
                            ?.copyWith(
                              color: Colors.white.withOpacity(0.9),
                              fontWeight: FontWeight.w400,
                            ),
                      )
                      .animate()
                      .fadeIn(delay: 200.ms, duration: 800.ms)
                      .slideY(begin: 0.3, end: 0),

                  const SizedBox(height: 40),

                  // Enhanced CTA Buttons with animations
                  Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ElevatedButton.icon(
                            onPressed: () => context.go('/contact'),
                            icon: const Icon(Icons.video_call, size: 20),
                            label: const Text('Schedule a Discovery Call'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.white,
                              foregroundColor: AppTheme.primaryBlue,
                              padding: const EdgeInsets.symmetric(
                                horizontal: 32,
                                vertical: 16,
                              ),
                              textStyle: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.w600,
                              ),
                              elevation: 8,
                              shadowColor: Colors.black.withOpacity(0.3),
                            ),
                          ),
                          const SizedBox(width: 16),
                          OutlinedButton.icon(
                            onPressed: () => context.go('/services'),
                            icon: const Icon(Icons.explore, size: 20),
                            label: const Text('Explore Services'),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: Colors.white,
                              side: const BorderSide(
                                color: Colors.white,
                                width: 2,
                              ),
                              padding: const EdgeInsets.symmetric(
                                horizontal: 32,
                                vertical: 16,
                              ),
                              textStyle: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ],
                      )
                      .animate()
                      .fadeIn(delay: 400.ms, duration: 800.ms)
                      .slideY(begin: 0.3, end: 0)
                      .then()
                      .shimmer(duration: const Duration(seconds: 1)),

                  const SizedBox(height: 32),

                  // Trust indicators
                  _buildTrustIndicators(context),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEnhancedBackground(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            AppTheme.primaryBlue,
            AppTheme.primaryViolet,
            AppTheme.accentViolet,
          ],
        ),
      ),
      child: Stack(
        children: [
          // Animated geometric shapes
          _buildAnimatedShapes(),

          // Optional: Background video (uncomment when video assets are available)
          // BackgroundVideoPlayer(
          //   videoPath: 'assets/videos/tech-background.mp4',
          //   child: Container(),
          // ),
        ],
      ),
    );
  }

  Widget _buildAnimatedShapes() {
    return Stack(
      children: [
        // Large floating circle
        Positioned(
          top: 100,
          left: 100,
          child:
              Container(
                    width: 80,
                    height: 80,
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.1),
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: Colors.white.withOpacity(0.2),
                        width: 1,
                      ),
                    ),
                  )
                  .animate(onPlay: (controller) => controller.repeat())
                  .scale(
                    duration: 4.seconds,
                    begin: const Offset(0.8, 0.8),
                    end: const Offset(1.2, 1.2),
                  )
                  .then()
                  .scale(
                    duration: 4.seconds,
                    begin: const Offset(1.2, 1.2),
                    end: const Offset(0.8, 0.8),
                  ),
        ),

        // Medium circle
        Positioned(
          top: 200,
          right: 150,
          child:
              Container(
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.08),
                      shape: BoxShape.circle,
                    ),
                  )
                  .animate(onPlay: (controller) => controller.repeat())
                  .scale(
                    duration: 3.seconds,
                    begin: const Offset(0.9, 0.9),
                    end: const Offset(1.1, 1.1),
                  )
                  .then()
                  .scale(
                    duration: 3.seconds,
                    begin: const Offset(1.1, 1.1),
                    end: const Offset(0.9, 0.9),
                  ),
        ),

        // Small circle
        Positioned(
          bottom: 150,
          left: 200,
          child:
              Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.12),
                      shape: BoxShape.circle,
                    ),
                  )
                  .animate(onPlay: (controller) => controller.repeat())
                  .scale(
                    duration: 2.seconds,
                    begin: const Offset(0.7, 0.7),
                    end: const Offset(1.3, 1.3),
                  )
                  .then()
                  .scale(
                    duration: 2.seconds,
                    begin: const Offset(1.3, 1.3),
                    end: const Offset(0.7, 0.7),
                  ),
        ),

        // Tech grid pattern
        Positioned.fill(child: CustomPaint(painter: TechGridPainter())),
      ],
    );
  }

  Widget _buildTrustIndicators(BuildContext context) {
    return Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildTrustBadge('500+', 'Projects'),
            const SizedBox(width: 32),
            _buildTrustBadge('99%', 'Success Rate'),
            const SizedBox(width: 32),
            _buildTrustBadge('24/7', 'Support'),
          ],
        )
        .animate()
        .fadeIn(delay: 600.ms, duration: 800.ms)
        .slideY(begin: 0.3, end: 0);
  }

  Widget _buildTrustBadge(String value, String label) {
    return Column(
      children: [
        Text(
          value,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          label,
          style: TextStyle(
            color: Colors.white.withOpacity(0.8),
            fontSize: 12,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }

  Widget _buildEnhancedServiceCard(
    BuildContext context,
    Map<String, dynamic> service,
    int index,
  ) {
    return Card(
          elevation: 8,
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.white,
                  (service['color'] as Color).withOpacity(0.05),
                ],
              ),
            ),
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Enhanced header with animated illustration
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: (service['color'] as Color).withOpacity(0.1),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                            color: (service['color'] as Color).withOpacity(0.2),
                            width: 1,
                          ),
                        ),
                        child: ServiceIllustration(
                          serviceType: service['serviceType'] as String,
                          size: 40,
                          animate: true,
                        ),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              service['title'] as String,
                              style: Theme.of(context).textTheme.headlineSmall
                                  ?.copyWith(fontWeight: FontWeight.w600),
                            ),
                            const SizedBox(height: 4),
                            Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 8,
                                vertical: 4,
                              ),
                              decoration: BoxDecoration(
                                color: (service['color'] as Color).withOpacity(
                                  0.1,
                                ),
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Text(
                                service['serviceType'] as String,
                                style: TextStyle(
                                  color: service['color'] as Color,
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 16),

                  // Description
                  Text(
                    service['description'] as String,
                    style: Theme.of(
                      context,
                    ).textTheme.bodyMedium?.copyWith(height: 1.5),
                  ),

                  const SizedBox(height: 16),

                  // Technology tags
                  Wrap(
                    spacing: 8,
                    runSpacing: 4,
                    children: ((service['technologies'] as List<String>)
                        .take(3)
                        .map(
                          (tech) => Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 8,
                              vertical: 4,
                            ),
                            decoration: BoxDecoration(
                              color: (service['color'] as Color).withOpacity(
                                0.1,
                              ),
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(
                                color: (service['color'] as Color).withOpacity(
                                  0.2,
                                ),
                                width: 1,
                              ),
                            ),
                            child: Text(
                              tech,
                              style: TextStyle(
                                color: service['color'] as Color,
                                fontSize: 11,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                        )
                        .toList()),
                  ),

                  if ((service['technologies'] as List<String>).length > 3)
                    Padding(
                      padding: const EdgeInsets.only(top: 8),
                      child: Text(
                        '+${(service['technologies'] as List<String>).length - 3} more technologies',
                        style: TextStyle(
                          color: (service['color'] as Color),
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
        )
        .animate(delay: (index * 100).ms)
        .fadeIn(duration: 600.ms)
        .slideY(begin: 0.3, end: 0)
        .then()
        .shimmer(duration: const Duration(seconds: 1));
  }

  Widget _buildServicesOverview(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      child: Column(
        children: [
          Text(
            'Our Core Services',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          Text(
                'Comprehensive solutions for your digital transformation journey',
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Theme.of(context).textTheme.bodyMedium?.color,
                ),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 48),

          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: isMobile ? 1 : 3,
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: isMobile ? 1.5 : 1.2,
            ),
            itemCount: 6,
            itemBuilder: (context, index) {
              final services = [
                {
                  'title': 'Cloud Consulting & DevOps',
                  'description':
                      'AWS, GCP, Azure infrastructure with Infrastructure-as-Code',
                  'icon': Icons.cloud_outlined,
                  'serviceType': 'cloud',
                  'color': Colors.blue,
                  'technologies': [
                    'AWS',
                    'GCP',
                    'Azure',
                    'Terraform',
                    'Kubernetes',
                  ],
                },
                {
                  'title': 'Big Data & Modern ETL',
                  'description':
                      'Apache Spark, Databricks, Lakehouse architectures',
                  'icon': Icons.analytics_outlined,
                  'serviceType': 'data',
                  'color': Colors.green,
                  'technologies': [
                    'Spark',
                    'Databricks',
                    'Snowflake',
                    'Redshift',
                  ],
                },
                {
                  'title': 'AI & Machine Learning',
                  'description':
                      'End-to-end model development and Generative AI solutions',
                  'icon': Icons.psychology_outlined,
                  'serviceType': 'ai',
                  'color': Colors.purple,
                  'technologies': ['TensorFlow', 'PyTorch', 'OpenAI', 'MLflow'],
                },
                {
                  'title': 'Prompt Engineering & GenAI UX',
                  'description':
                      'Structured frameworks and chatbot integrations',
                  'icon': Icons.chat_bubble_outline,
                  'serviceType': 'ai',
                  'color': Colors.orange,
                  'technologies': ['LangChain', 'RAG', 'LLMs', 'ChatGPT'],
                },
                {
                  'title': 'Web & Mobile Development',
                  'description':
                      'Flutter, Firebase, secure auth and realtime solutions',
                  'icon': Icons.phone_android_outlined,
                  'serviceType': 'web',
                  'color': Colors.teal,
                  'technologies': ['Flutter', 'React', 'Node.js', 'Firebase'],
                },
                {
                  'title': 'Data Migration & Modernization',
                  'description':
                      'Legacy system migration and automated pipelines',
                  'icon': Icons.transform_outlined,
                  'serviceType': 'migration',
                  'color': Colors.red,
                  'technologies': ['DMS', 'Glue', 'Lambda', 'CloudFormation'],
                },
              ];

              final service = services[index];

              return _buildEnhancedServiceCard(context, service, index);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildTechStackSection(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    final techLogos = [
      'AWS',
      'GCP',
      'Azure',
      'Databricks',
      'OpenAI',
      'Flutter',
      'Salesforce',
    ];

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      decoration: BoxDecoration(color: Theme.of(context).colorScheme.surface),
      child: Column(
        children: [
          Text(
            'Trusted by Leading Companies',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 48),

          Wrap(
            spacing: 32,
            runSpacing: 24,
            alignment: WrapAlignment.center,
            children: techLogos
                .map(
                  (tech) =>
                      Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                              vertical: 12,
                            ),
                            decoration: BoxDecoration(
                              color: Theme.of(context).cardColor,
                              borderRadius: BorderRadius.circular(8),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.black.withOpacity(0.1),
                                  blurRadius: 8,
                                  offset: const Offset(0, 2),
                                ),
                              ],
                            ),
                            child: Text(
                              tech,
                              style: Theme.of(context).textTheme.bodyLarge
                                  ?.copyWith(
                                    fontWeight: FontWeight.w600,
                                    color: Theme.of(
                                      context,
                                    ).colorScheme.primary,
                                  ),
                            ),
                          )
                          .animate()
                          .fadeIn(duration: 600.ms)
                          .scale(
                            begin: const Offset(0.8, 0.8),
                            end: const Offset(1.0, 1.0),
                          ),
                )
                .toList(),
          ),
        ],
      ),
    );
  }

  Widget _buildCTASection(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(48),
      decoration: const BoxDecoration(gradient: AppTheme.primaryGradient),
      child: Column(
        children: [
          Text(
            'Ready to Transform Your Business?',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w700,
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                'Let\'s build your next big thing together',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.white.withOpacity(0.9),
                ),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 32),

          ElevatedButton(
                onPressed: () => context.go('/contact'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: AppTheme.primaryBlue,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 48,
                    vertical: 20,
                  ),
                  textStyle: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                child: const Text('Get Started Today'),
              )
              .animate()
              .fadeIn(delay: 400.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Widget _buildFooter(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(32),
      color: Theme.of(context).colorScheme.surface,
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '© 2024 AetherCorp. All rights reserved.',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              Text(
                'aethercorp.us',
                style: Theme.of(
                  context,
                ).textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.w600),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
