import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../shared/widgets/main_layout.dart';
import '../../core/theme/app_theme.dart';

class ServicesPage extends StatelessWidget {
  const ServicesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MainLayout(
      child: Column(
        children: [
          _buildHeroSection(context),
          _buildServicesGrid(context),
          _buildProcessSection(context),
          _buildCTASection(context),
        ],
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(48),
      decoration: const BoxDecoration(gradient: AppTheme.primaryGradient),
      child: Column(
        children: [
          Text(
            'Our Services',
            style: Theme.of(context).textTheme.displayLarge?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w700,
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                'Comprehensive solutions for your digital transformation journey',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  color: Colors.white.withOpacity(0.9),
                  fontWeight: FontWeight.w400,
                ),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Widget _buildServicesGrid(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    final services = [
      {
        'title': 'Cloud Consulting & DevOps',
        'description':
            'Transform your infrastructure with modern cloud solutions and DevOps practices.',
        'features': [
          'AWS, GCP, Azure expertise',
          'Infrastructure-as-Code (Terraform/CDK)',
          'CI/CD pipeline implementation',
          'Serverless architectures',
          'Container orchestration',
          'Security best practices',
        ],
        'icon': Icons.cloud_outlined,
        'color': Colors.blue,
      },
      {
        'title': 'Big Data & Modern ETL Pipelines',
        'description':
            'Build scalable data pipelines and modern data architectures for enterprise analytics.',
        'features': [
          'Apache Spark & Databricks',
          'AWS Glue & EMR',
          'Lakehouse architectures',
          'Medallion data modeling',
          'Redshift, Snowflake, Athena',
          'Real-time streaming solutions',
        ],
        'icon': Icons.analytics_outlined,
        'color': Colors.green,
      },
      {
        'title': 'AI & Machine Learning',
        'description':
            'End-to-end AI solutions from model development to production deployment.',
        'features': [
          'Custom model development',
          'Fine-tuning & model curation',
          'Generative AI implementation',
          'LLMs (OpenAI, Bedrock)',
          'RAG pipeline development',
          'MLOps & model monitoring',
        ],
        'icon': Icons.psychology_outlined,
        'color': Colors.purple,
      },
      {
        'title': 'Prompt Engineering & GenAI UX',
        'description':
            'Design intuitive AI interfaces and optimize prompt strategies for maximum effectiveness.',
        'features': [
          'Structured prompt frameworks',
          'Chatbot integration (Langchain)',
          'Semantic Kernel development',
          'Voice/chat interfaces',
          'Multi-modal AI experiences',
          'AI UX/UI design',
        ],
        'icon': Icons.chat_bubble_outline,
        'color': Colors.orange,
      },
      {
        'title': 'Web & Mobile App Development',
        'description':
            'Build modern, scalable applications across all platforms with cutting-edge technology.',
        'features': [
          'Flutter (Web, iOS, Android)',
          'Firebase & Supabase backends',
          'Node.js & .NET APIs',
          'Secure authentication',
          'Push notifications',
          'Realtime database solutions',
        ],
        'icon': Icons.phone_android_outlined,
        'color': Colors.teal,
      },
      {
        'title': 'Data Migration & Legacy Modernization',
        'description':
            'Seamlessly migrate and modernize legacy systems with automated, reliable processes.',
        'features': [
          'SQL Server & Oracle migration',
          'Workday & Salesforce integration',
          'Schema discovery tools',
          'Data lineage mapping',
          'Automated migration pipelines',
          'Zero-downtime migrations',
        ],
        'icon': Icons.transform_outlined,
        'color': Colors.red,
      },
    ];

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      child: Column(
        children: [
          Text(
            'Comprehensive Service Portfolio',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 48),

          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: isMobile ? 1 : 3,
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: isMobile ? 1.8 : 1.2,
            ),
            itemCount: services.length,
            itemBuilder: (context, index) {
              final service = services[index];

              return Card(
                    elevation: 8,
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Container(
                                padding: const EdgeInsets.all(12),
                                decoration: BoxDecoration(
                                  color: (service['color'] as Color)
                                      .withOpacity(0.1),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Icon(
                                  service['icon'] as IconData,
                                  size: 32,
                                  color: service['color'] as Color,
                                ),
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: Text(
                                  service['title'] as String,
                                  style: Theme.of(context)
                                      .textTheme
                                      .headlineSmall
                                      ?.copyWith(fontWeight: FontWeight.w600),
                                ),
                              ),
                            ],
                          ),

                          const SizedBox(height: 16),

                          Text(
                            service['description'] as String,
                            style: Theme.of(context).textTheme.bodyMedium
                                ?.copyWith(
                                  color: Theme.of(
                                    context,
                                  ).textTheme.bodyMedium?.color,
                                ),
                          ),

                          const SizedBox(height: 16),

                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Key Capabilities:',
                                  style: Theme.of(context).textTheme.bodySmall
                                      ?.copyWith(
                                        fontWeight: FontWeight.w600,
                                        color: Theme.of(
                                          context,
                                        ).colorScheme.primary,
                                      ),
                                ),
                                const SizedBox(height: 8),
                                ...((service['features'] as List<String>)
                                    .map(
                                      (feature) => Padding(
                                        padding: const EdgeInsets.only(
                                          bottom: 4,
                                        ),
                                        child: Row(
                                          children: [
                                            Icon(
                                              Icons.check_circle,
                                              size: 16,
                                              color: service['color'] as Color,
                                            ),
                                            const SizedBox(width: 8),
                                            Expanded(
                                              child: Text(
                                                feature,
                                                style: Theme.of(
                                                  context,
                                                ).textTheme.bodySmall,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    )
                                    .toList()),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  )
                  .animate(delay: (index * 100).ms)
                  .fadeIn(duration: 600.ms)
                  .slideY(begin: 0.3, end: 0);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildProcessSection(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    final steps = [
      {
        'title': 'Discovery & Planning',
        'description':
            'We analyze your current state and define clear objectives for your transformation journey.',
        'icon': Icons.search_outlined,
      },
      {
        'title': 'Architecture & Design',
        'description':
            'Our experts design scalable, secure solutions tailored to your specific requirements.',
        'icon': Icons.architecture_outlined,
      },
      {
        'title': 'Implementation & Development',
        'description':
            'We build and deploy your solutions using industry best practices and agile methodologies.',
        'icon': Icons.build_outlined,
      },
      {
        'title': 'Testing & Optimization',
        'description':
            'Comprehensive testing and performance optimization ensure your solution is production-ready.',
        'icon': Icons.tune_outlined,
      },
      {
        'title': 'Deployment & Support',
        'description':
            'Smooth deployment with ongoing support and monitoring to ensure continued success.',
        'icon': Icons.rocket_launch_outlined,
      },
    ];

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      decoration: BoxDecoration(color: Theme.of(context).colorScheme.surface),
      child: Column(
        children: [
          Text(
            'Our Proven Process',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                'A systematic approach to delivering exceptional results',
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Theme.of(context).textTheme.bodyMedium?.color,
                ),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 48),

          if (isMobile)
            ...steps.asMap().entries.map((entry) {
              final index = entry.key;
              final step = entry.value;

              return Container(
                    margin: const EdgeInsets.only(bottom: 24),
                    child: Row(
                      children: [
                        Container(
                          width: 60,
                          height: 60,
                          decoration: BoxDecoration(
                            color: Theme.of(
                              context,
                            ).colorScheme.primary.withOpacity(0.1),
                            shape: BoxShape.circle,
                          ),
                          child: Center(
                            child: Icon(
                              step['icon'] as IconData,
                              color: Theme.of(context).colorScheme.primary,
                              size: 24,
                            ),
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                '${index + 1}. ${step['title'] as String}',
                                style: Theme.of(context).textTheme.headlineSmall
                                    ?.copyWith(fontWeight: FontWeight.w600),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                step['description'] as String,
                                style: Theme.of(context).textTheme.bodyMedium,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  )
                  .animate(delay: (index * 100).ms)
                  .fadeIn(duration: 600.ms)
                  .slideX(begin: -0.3, end: 0);
            })
          else
            Row(
              children: steps.asMap().entries.map((entry) {
                final index = entry.key;
                final step = entry.value;

                return Expanded(
                      child: Column(
                        children: [
                          Container(
                            width: 80,
                            height: 80,
                            decoration: BoxDecoration(
                              color: Theme.of(
                                context,
                              ).colorScheme.primary.withOpacity(0.1),
                              shape: BoxShape.circle,
                            ),
                            child: Center(
                              child: Icon(
                                step['icon'] as IconData,
                                color: Theme.of(context).colorScheme.primary,
                                size: 32,
                              ),
                            ),
                          ),
                          const SizedBox(height: 16),
                          Text(
                            '${index + 1}. ${step['title'] as String}',
                            style: Theme.of(context).textTheme.headlineSmall
                                ?.copyWith(fontWeight: FontWeight.w600),
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 8),
                          Text(
                            step['description'] as String,
                            style: Theme.of(context).textTheme.bodyMedium,
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                    )
                    .animate(delay: (index * 100).ms)
                    .fadeIn(duration: 600.ms)
                    .slideY(begin: 0.3, end: 0);
              }).toList(),
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
            'Ready to Start Your Project?',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w700,
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                'Let\'s discuss how we can help transform your business',
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
                onPressed: () => Navigator.pushNamed(context, '/contact'),
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
                child: const Text('Schedule a Consultation'),
              )
              .animate()
              .fadeIn(delay: 400.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }
}
