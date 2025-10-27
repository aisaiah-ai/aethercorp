import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../shared/widgets/main_layout.dart';
import '../../core/theme/app_theme.dart';

class CaseStudyDetailPage extends StatelessWidget {
  final String caseStudyId;

  const CaseStudyDetailPage({super.key, required this.caseStudyId});

  @override
  Widget build(BuildContext context) {
    // Mock data - in a real app, this would come from an API or database
    final caseStudy = _getCaseStudyById(caseStudyId);

    if (caseStudy == null) {
      return MainLayout(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.error_outline, size: 64, color: Colors.red),
              const SizedBox(height: 16),
              Text(
                'Case study not found',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
              const SizedBox(height: 8),
              ElevatedButton(
                onPressed: () => context.go('/case-studies'),
                child: const Text('Back to Case Studies'),
              ),
            ],
          ),
        ),
      );
    }

    return MainLayout(
      child: Column(
        children: [
          _buildHeroSection(context, caseStudy),
          _buildOverviewSection(context, caseStudy),
          _buildChallengeSection(context, caseStudy),
          _buildSolutionSection(context, caseStudy),
          _buildResultsSection(context, caseStudy),
          _buildTechnologiesSection(context, caseStudy),
          _buildCTASection(context),
        ],
      ),
    );
  }

  Widget _buildHeroSection(
    BuildContext context,
    Map<String, dynamic> caseStudy,
  ) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(48),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            caseStudy['color'] as Color,
            (caseStudy['color'] as Color).withOpacity(0.8),
          ],
        ),
      ),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.2),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Text(
              caseStudy['industry'] as String,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),

          const SizedBox(height: 24),

          Text(
            caseStudy['title'] as String,
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.displayLarge?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w700,
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          Text(
                caseStudy['subtitle'] as String,
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

  Widget _buildOverviewSection(
    BuildContext context,
    Map<String, dynamic> caseStudy,
  ) {
    return Container(
      padding: const EdgeInsets.all(48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Project Overview',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                caseStudy['description'] as String,
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(height: 1.6),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Widget _buildChallengeSection(
    BuildContext context,
    Map<String, dynamic> caseStudy,
  ) {
    return Container(
      padding: const EdgeInsets.all(48),
      decoration: BoxDecoration(color: Theme.of(context).colorScheme.surface),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'The Challenge',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Card(
                elevation: 4,
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(
                            Icons.warning_outlined,
                            color: Colors.orange,
                            size: 32,
                          ),
                          const SizedBox(width: 16),
                          Text(
                            'Key Challenges',
                            style: Theme.of(context).textTheme.headlineSmall
                                ?.copyWith(fontWeight: FontWeight.w600),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      ...((caseStudy['challenges'] as List<String>? ??
                              [
                                'Legacy system integration complexity',
                                'Data migration without downtime',
                                'Performance optimization requirements',
                                'Scalability and security concerns',
                              ])
                          .map(
                            (challenge) => Padding(
                              padding: const EdgeInsets.only(bottom: 8),
                              child: Row(
                                children: [
                                  Icon(
                                    Icons.arrow_right,
                                    color: Theme.of(
                                      context,
                                    ).colorScheme.primary,
                                    size: 20,
                                  ),
                                  const SizedBox(width: 8),
                                  Expanded(
                                    child: Text(
                                      challenge,
                                      style: Theme.of(
                                        context,
                                      ).textTheme.bodyMedium,
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
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Widget _buildSolutionSection(
    BuildContext context,
    Map<String, dynamic> caseStudy,
  ) {
    return Container(
      padding: const EdgeInsets.all(48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Our Solution',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Card(
                elevation: 4,
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(
                            Icons.lightbulb_outline,
                            color: Colors.green,
                            size: 32,
                          ),
                          const SizedBox(width: 16),
                          Text(
                            'Solution Approach',
                            style: Theme.of(context).textTheme.headlineSmall
                                ?.copyWith(fontWeight: FontWeight.w600),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      ...((caseStudy['solution'] as List<String>? ??
                              [
                                'Comprehensive architecture design and planning',
                                'Phased implementation with minimal disruption',
                                'Advanced monitoring and optimization',
                                'Comprehensive testing and quality assurance',
                              ])
                          .map(
                            (solution) => Padding(
                              padding: const EdgeInsets.only(bottom: 8),
                              child: Row(
                                children: [
                                  Icon(
                                    Icons.check_circle,
                                    color: Colors.green,
                                    size: 20,
                                  ),
                                  const SizedBox(width: 8),
                                  Expanded(
                                    child: Text(
                                      solution,
                                      style: Theme.of(
                                        context,
                                      ).textTheme.bodyMedium,
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
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Widget _buildResultsSection(
    BuildContext context,
    Map<String, dynamic> caseStudy,
  ) {
    return Container(
      padding: const EdgeInsets.all(48),
      decoration: BoxDecoration(color: Theme.of(context).colorScheme.surface),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Results & Impact',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: 2,
            ),
            itemCount: (caseStudy['results'] as List<String>).length,
            itemBuilder: (context, index) {
              final result = (caseStudy['results'] as List<String>)[index];

              return Card(
                    elevation: 4,
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Row(
                        children: [
                          Container(
                            width: 60,
                            height: 60,
                            decoration: BoxDecoration(
                              color: Colors.green.withOpacity(0.1),
                              shape: BoxShape.circle,
                            ),
                            child: Center(
                              child: Icon(
                                Icons.trending_up,
                                color: Colors.green,
                                size: 32,
                              ),
                            ),
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: Text(
                              result,
                              style: Theme.of(context).textTheme.bodyLarge
                                  ?.copyWith(fontWeight: FontWeight.w600),
                            ),
                          ),
                        ],
                      ),
                    ),
                  )
                  .animate(delay: (index * 100).ms)
                  .fadeIn(duration: 600.ms)
                  .scale(
                    begin: const Offset(0.8, 0.8),
                    end: const Offset(1.0, 1.0),
                  );
            },
          ),
        ],
      ),
    );
  }

  Widget _buildTechnologiesSection(
    BuildContext context,
    Map<String, dynamic> caseStudy,
  ) {
    return Container(
      padding: const EdgeInsets.all(48),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Technologies Used',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Wrap(
            spacing: 16,
            runSpacing: 16,
            children: (caseStudy['technologies'] as List<String>)
                .map(
                  (tech) =>
                      Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 20,
                              vertical: 12,
                            ),
                            decoration: BoxDecoration(
                              color: Theme.of(
                                context,
                              ).colorScheme.primary.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(25),
                              border: Border.all(
                                color: Theme.of(
                                  context,
                                ).colorScheme.primary.withOpacity(0.3),
                                width: 1,
                              ),
                            ),
                            child: Text(
                              tech,
                              style: Theme.of(context).textTheme.bodyLarge
                                  ?.copyWith(
                                    color: Theme.of(
                                      context,
                                    ).colorScheme.primary,
                                    fontWeight: FontWeight.w600,
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
            'Inspired by This Success Story?',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w700,
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                'Let\'s discuss how we can help you achieve similar results',
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
                child: const Text('Start Your Project'),
              )
              .animate()
              .fadeIn(delay: 400.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Map<String, dynamic>? _getCaseStudyById(String id) {
    final caseStudies = {
      'healthcare-migration': {
        'id': 'healthcare-migration',
        'title': 'Healthcare Data Migration',
        'subtitle': 'From On-prem SQL to Redshift Lakehouse',
        'description':
            'We successfully migrated 50TB of patient data from legacy SQL Server infrastructure to a modern AWS Redshift data warehouse with zero downtime. The project involved complex data transformation, ensuring HIPAA compliance, and implementing real-time monitoring systems.',
        'industry': 'Healthcare',
        'technologies': [
          'AWS',
          'Redshift',
          'DMS',
          'Lambda',
          'CloudFormation',
          'Glue',
          'S3',
        ],
        'results': [
          '99.9% uptime during migration',
          '60% reduction in query time',
          '40% cost savings',
          'Improved compliance & security',
        ],
        'color': Colors.blue,
        'challenges': [
          'Zero-downtime migration requirements',
          'HIPAA compliance and data security',
          'Complex data transformation logic',
          'Legacy system integration challenges',
        ],
        'solution': [
          'Implemented blue-green deployment strategy',
          'Built comprehensive data validation pipeline',
          'Created automated monitoring and alerting',
          'Developed rollback procedures for safety',
        ],
      },
      'fintech-ai': {
        'id': 'fintech-ai',
        'title': 'AI-Powered Fraud Detection',
        'subtitle': 'Real-time ML Pipeline for Financial Services',
        'description':
            'Built a comprehensive machine learning pipeline for real-time fraud detection processing over 1 million transactions daily. The system uses advanced ML algorithms to identify fraudulent patterns and prevent financial losses.',
        'industry': 'Financial Services',
        'technologies': [
          'Python',
          'Spark',
          'MLflow',
          'Kafka',
          'Kubernetes',
          'TensorFlow',
          'Redis',
        ],
        'results': [
          '95% fraud detection accuracy',
          'Real-time processing <100ms',
          '80% reduction in false positives',
          '\$2M+ saved in prevented fraud',
        ],
        'color': Colors.green,
        'challenges': [
          'Real-time processing requirements',
          'High accuracy with low false positives',
          'Scalable ML model deployment',
          'Regulatory compliance requirements',
        ],
        'solution': [
          'Implemented ensemble ML models',
          'Built streaming data pipeline with Kafka',
          'Created model versioning and monitoring',
          'Established comprehensive testing framework',
        ],
      },
    };

    return caseStudies[id];
  }
}
