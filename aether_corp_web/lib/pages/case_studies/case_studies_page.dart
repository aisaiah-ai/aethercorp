import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../shared/widgets/main_layout.dart';
import '../../core/theme/app_theme.dart';

class CaseStudiesPage extends StatelessWidget {
  const CaseStudiesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MainLayout(
      child: Column(
        children: [
          _buildHeroSection(context),
          _buildCaseStudiesGrid(context),
          _buildVideoTestimonialsSection(context),
          _buildCTASection(context),
        ],
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(isMobile ? 32 : 64),
      decoration: BoxDecoration(
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
      child: Column(
        children: [
          // Success metrics banner
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.2),
              borderRadius: BorderRadius.circular(25),
              border: Border.all(
                color: Colors.white.withValues(alpha: 0.3),
                width: 1,
              ),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.trending_up, color: Colors.white, size: 20),
                const SizedBox(width: 8),
                Text(
                  '500+ Successful Projects • 99% Client Satisfaction',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 32),

          Text(
            'Case Studies',
            style: Theme.of(context).textTheme.displayLarge?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w800,
              fontSize: isMobile ? 48 : 64,
              shadows: [
                Shadow(
                  color: Colors.black.withValues(alpha: 0.3),
                  offset: const Offset(0, 4),
                  blurRadius: 8,
                ),
              ],
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 24),

          Text(
                'Real-world success stories from our enterprise clients',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  color: Colors.white.withValues(alpha: 0.95),
                  fontWeight: FontWeight.w500,
                  fontSize: isMobile ? 20 : 24,
                ),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          Text(
                'Discover how we\'ve transformed businesses with cutting-edge AI, Cloud, and Data solutions',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  color: Colors.white.withValues(alpha: 0.8),
                  fontWeight: FontWeight.w400,
                ),
              )
              .animate()
              .fadeIn(delay: 400.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 32),

          // Call-to-action buttons
          Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton.icon(
                    onPressed: () {
                      // Scroll to case studies grid
                    },
                    icon: const Icon(Icons.visibility, size: 20),
                    label: const Text('View All Case Studies'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: AppTheme.primaryBlue,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 32,
                        vertical: 16,
                      ),
                      textStyle: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                      elevation: 8,
                      shadowColor: Colors.black.withValues(alpha: 0.3),
                    ),
                  ),
                  const SizedBox(width: 16),
                  OutlinedButton.icon(
                    onPressed: () => context.go('/contact'),
                    icon: const Icon(Icons.contact_mail, size: 20),
                    label: const Text('Start Your Project'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.white,
                      side: const BorderSide(color: Colors.white, width: 2),
                      padding: const EdgeInsets.symmetric(
                        horizontal: 32,
                        vertical: 16,
                      ),
                      textStyle: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              )
              .animate()
              .fadeIn(delay: 600.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  Widget _buildCaseStudiesGrid(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    final caseStudies = [
      {
        'id': 'healthcare-migration',
        'title': 'Healthcare Data Migration',
        'subtitle': 'From On-prem SQL to Redshift Lakehouse',
        'description':
            'Migrated 50TB of patient data from legacy SQL Server to AWS Redshift with zero downtime.',
        'industry': 'Healthcare',
        'technologies': ['AWS', 'Redshift', 'DMS', 'Lambda', 'CloudFormation'],
        'results': [
          '99.9% uptime during migration',
          '60% reduction in query time',
          '40% cost savings',
          'Improved compliance & security',
        ],
        'image': 'assets/images/healthcare.jpg',
        'color': Colors.blue,
      },
      {
        'id': 'fintech-ai',
        'title': 'AI-Powered Fraud Detection',
        'subtitle': 'Real-time ML Pipeline for Financial Services',
        'description':
            'Built end-to-end machine learning pipeline for real-time fraud detection processing 1M+ transactions daily.',
        'industry': 'Financial Services',
        'technologies': ['Python', 'Spark', 'MLflow', 'Kafka', 'Kubernetes'],
        'results': [
          '95% fraud detection accuracy',
          'Real-time processing <100ms',
          '80% reduction in false positives',
          r'$2M+ saved in prevented fraud',
        ],
        'image': 'assets/images/fintech.jpg',
        'color': Colors.green,
      },
      {
        'id': 'retail-analytics',
        'title': 'Retail Customer Analytics',
        'subtitle': 'Personalized Recommendation Engine',
        'description':
            'Developed AI-driven recommendation system that increased customer engagement by 35%.',
        'industry': 'Retail',
        'technologies': [
          'TensorFlow',
          'BigQuery',
          'Cloud Functions',
          'Firestore',
        ],
        'results': [
          '35% increase in engagement',
          '25% boost in conversion rate',
          '50% improvement in recommendation accuracy',
          'Real-time personalization',
        ],
        'image': 'assets/images/retail.jpg',
        'color': Colors.purple,
      },
      {
        'id': 'manufacturing-iot',
        'title': 'Manufacturing IoT Platform',
        'subtitle': 'Predictive Maintenance with Edge Computing',
        'description':
            'Built comprehensive IoT platform for predictive maintenance reducing equipment downtime by 45%.',
        'industry': 'Manufacturing',
        'technologies': ['IoT Core', 'Edge TPU', 'BigQuery', 'Data Studio'],
        'results': [
          '45% reduction in downtime',
          '30% decrease in maintenance costs',
          'Real-time equipment monitoring',
          'Predictive maintenance alerts',
        ],
        'image': 'assets/images/manufacturing.jpg',
        'color': Colors.orange,
      },
      {
        'id': 'media-streaming',
        'title': 'Media Streaming Platform',
        'subtitle': 'Scalable Video Delivery Infrastructure',
        'description':
            'Architected and deployed global CDN solution supporting 10M+ concurrent users.',
        'industry': 'Media & Entertainment',
        'technologies': [
          'CloudFront',
          'Lambda@Edge',
          'S3',
          'ECS',
          'CloudWatch',
        ],
        'results': [
          '99.99% uptime SLA',
          'Global content delivery',
          '50% reduction in bandwidth costs',
          'Sub-second video start times',
        ],
        'image': 'assets/images/media.jpg',
        'color': Colors.red,
      },
      {
        'id': 'logistics-optimization',
        'title': 'Logistics Route Optimization',
        'subtitle': 'AI-Driven Supply Chain Optimization',
        'description':
            'Implemented machine learning algorithms for route optimization reducing delivery time by 30%.',
        'industry': 'Logistics',
        'technologies': [
          'Google Maps API',
          'TensorFlow',
          'Cloud Run',
          'BigQuery',
        ],
        'results': [
          '30% reduction in delivery time',
          '20% fuel cost savings',
          'Dynamic route optimization',
          'Real-time tracking & updates',
        ],
        'image': 'assets/images/logistics.jpg',
        'color': Colors.teal,
      },
    ];

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      child: Column(
        children: [
          // Enhanced section header
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(32),
            margin: const EdgeInsets.only(bottom: 32),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  AppTheme.primaryBlue.withValues(alpha: 0.1),
                  AppTheme.primaryViolet.withValues(alpha: 0.1),
                ],
              ),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(
                color: AppTheme.primaryBlue.withValues(alpha: 0.2),
                width: 2,
              ),
            ),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.work_outline,
                      color: AppTheme.primaryBlue,
                      size: 32,
                    ),
                    const SizedBox(width: 16),
                    Text(
                      'Success Stories',
                      style: Theme.of(context).textTheme.headlineMedium
                          ?.copyWith(
                            color: AppTheme.primaryBlue,
                            fontWeight: FontWeight.w800,
                            fontSize: isMobile ? 24 : 32,
                          ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Text(
                  'Explore our most impactful projects and see how we\'ve transformed businesses across industries',
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    color: Colors.grey[700],
                    fontWeight: FontWeight.w500,
                  ),
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _buildStatBadge('6', 'Industries'),
                    const SizedBox(width: 24),
                    _buildStatBadge('500+', 'Projects'),
                    const SizedBox(width: 24),
                    _buildStatBadge('99%', 'Success Rate'),
                  ],
                ),
              ],
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: isMobile ? 1 : 3,
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: isMobile ? 2.5 : 1.2,
            ),
            itemCount: caseStudies.length,
            itemBuilder: (context, index) {
              final caseStudy = caseStudies[index];

              return Card(
                    elevation: 8,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16),
                        gradient: LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [
                            Colors.white,
                            (caseStudy['color'] as Color).withValues(alpha: 0.08),
                          ],
                        ),
                      ),
                      child: InkWell(
                        onTap: () =>
                            context.go('/case-studies/${caseStudy['id']}'),
                        borderRadius: BorderRadius.circular(20),
                        child: Padding(
                          padding: const EdgeInsets.all(12),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // Header with industry badge
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Container(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 12,
                                      vertical: 6,
                                    ),
                                    decoration: BoxDecoration(
                                      color: (caseStudy['color'] as Color)
                                          .withValues(alpha: 0.15),
                                      borderRadius: BorderRadius.circular(16),
                                      border: Border.all(
                                        color: (caseStudy['color'] as Color)
                                            .withValues(alpha: 0.4),
                                        width: 1,
                                      ),
                                    ),
                                    child: Text(
                                      caseStudy['industry'] as String,
                                      style: TextStyle(
                                        color: caseStudy['color'] as Color,
                                        fontSize: 12,
                                        fontWeight: FontWeight.w700,
                                      ),
                                    ),
                                  ),
                                  Icon(
                                    Icons.arrow_forward_ios,
                                    size: 16,
                                    color: Theme.of(
                                      context,
                                    ).textTheme.bodyMedium?.color,
                                  ),
                                ],
                              ),

                              const SizedBox(height: 8),

                              // Title and subtitle
                              Text(
                                caseStudy['title'] as String,
                                style: Theme.of(context).textTheme.headlineSmall
                                    ?.copyWith(
                                      fontWeight: FontWeight.w700,
                                      color: (caseStudy['color'] as Color),
                                    ),
                              ),

                              const SizedBox(height: 2),

                              Text(
                                caseStudy['subtitle'] as String,
                                style: Theme.of(context).textTheme.bodyMedium
                                    ?.copyWith(
                                      color: (caseStudy['color'] as Color)
                                          .withValues(alpha: 0.8),
                                      fontWeight: FontWeight.w600,
                                    ),
                              ),

                              const SizedBox(height: 8),

                              // Description
                              Expanded(
                                child: Text(
                                  caseStudy['description'] as String,
                                  style: Theme.of(context).textTheme.bodyMedium,
                                  maxLines: 3,
                                  overflow: TextOverflow.ellipsis,
                                ),
                              ),

                              const SizedBox(height: 8),

                              // Technologies
                              Wrap(
                                spacing: 8,
                                runSpacing: 4,
                                children:
                                    ((caseStudy['technologies'] as List<String>)
                                        .take(3)
                                        .map(
                                          (tech) => Container(
                                            padding: const EdgeInsets.symmetric(
                                              horizontal: 8,
                                              vertical: 4,
                                            ),
                                            decoration: BoxDecoration(
                                              color:
                                                  (caseStudy['color'] as Color)
                                                      .withValues(alpha: 0.1),
                                              borderRadius:
                                                  BorderRadius.circular(12),
                                              border: Border.all(
                                                color:
                                                    (caseStudy['color']
                                                            as Color)
                                                        .withValues(alpha: 0.3),
                                                width: 1,
                                              ),
                                            ),
                                            child: Text(
                                              tech,
                                              style: Theme.of(context)
                                                  .textTheme
                                                  .bodySmall
                                                  ?.copyWith(
                                                    fontWeight: FontWeight.w600,
                                                    color:
                                                        (caseStudy['color']
                                                            as Color),
                                                  ),
                                            ),
                                          ),
                                        )
                                        .toList()),
                              ),

                              if ((caseStudy['technologies'] as List<String>)
                                      .length >
                                  3)
                                Padding(
                                  padding: const EdgeInsets.only(top: 4),
                                  child: Text(
                                    '+${(caseStudy['technologies'] as List<String>).length - 3} more',
                                    style: Theme.of(context).textTheme.bodySmall
                                        ?.copyWith(
                                          color: Theme.of(
                                            context,
                                          ).colorScheme.primary,
                                          fontWeight: FontWeight.w500,
                                        ),
                                  ),
                                ),
                            ],
                          ),
                        ),
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

  Widget _buildCTASection(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(48),
      decoration: const BoxDecoration(gradient: AppTheme.primaryGradient),
      child: Column(
        children: [
          Text(
            'Ready to Create Your Success Story?',
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
                  color: Colors.white.withValues(alpha: 0.9),
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

  Widget _buildVideoTestimonialsSection(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      color: Theme.of(context).colorScheme.surface,
      child: Column(
        children: [
          Text(
            'Client Success Stories',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
              fontWeight: FontWeight.w700,
              color: AppTheme.primaryBlue,
            ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          Text(
                'Hear directly from our clients about their transformation journey',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  color: Theme.of(context).textTheme.bodyLarge?.color,
                ),
              )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 48),

          // Video testimonials grid
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: isMobile ? 1 : 2,
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: isMobile ? 16 / 9 : 2.5,
            ),
            itemCount: 3, // Number of video testimonials
            itemBuilder: (context, index) {
              return _buildVideoTestimonialCard(context, index);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildVideoTestimonialCard(BuildContext context, int index) {
    final testimonials = [
      {
        'title': 'Healthcare Data Migration Success',
        'client': 'Dr. Sarah Chen, CTO',
        'company': 'MedTech Solutions',
        'videoPath': 'assets/videos/testimonial-healthcare.mp4',
        'thumbnail': 'assets/images/testimonial-healthcare.jpg',
        'quote':
            'AetherCorp transformed our data infrastructure in just 3 months.',
      },
      {
        'title': 'AI-Powered Fraud Detection',
        'client': 'Michael Rodriguez, VP Engineering',
        'company': 'FinSecure Inc.',
        'videoPath': 'assets/videos/testimonial-fintech.mp4',
        'thumbnail': 'assets/images/testimonial-fintech.jpg',
        'quote': 'The ML pipeline they built processes 1M+ transactions daily.',
      },
      {
        'title': 'Retail Analytics Revolution',
        'client': 'Jennifer Liu, Head of Data',
        'company': 'RetailMax',
        'videoPath': 'assets/videos/testimonial-retail.mp4',
        'thumbnail': 'assets/images/testimonial-retail.jpg',
        'quote':
            '35% increase in customer engagement with their AI recommendations.',
      },
    ];

    final testimonial = testimonials[index];

    return Card(
          elevation: 8,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: Column(
              children: [
                // Video player section
                Expanded(
                  flex: 3,
                  child: Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [
                          AppTheme.primaryBlue.withValues(alpha: 0.8),
                          AppTheme.primaryViolet.withValues(alpha: 0.8),
                        ],
                      ),
                    ),
                    child: Stack(
                      children: [
                        // Video player (placeholder for now)
                        Center(
                          child: Container(
                            width: 80,
                            height: 80,
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.2),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(
                              Icons.play_arrow,
                              color: Colors.white,
                              size: 40,
                            ),
                          ),
                        ),

                        // Play button overlay
                        Positioned.fill(
                          child: Material(
                            color: Colors.transparent,
                            child: InkWell(
                              onTap: () {
                                // TODO: Implement video playback
                                _showVideoModal(context, testimonial);
                              },
                              child: Container(
                                decoration: BoxDecoration(
                                  color: Colors.black.withValues(alpha: 0.3),
                                ),
                                child: const Center(
                                  child: Icon(
                                    Icons.play_circle_filled,
                                    color: Colors.white,
                                    size: 60,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

                // Content section
                Expanded(
                  flex: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Flexible(
                          child: Text(
                            testimonial['title'] as String,
                            style: Theme.of(context).textTheme.titleLarge
                                ?.copyWith(fontWeight: FontWeight.w600),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),

                        const SizedBox(height: 8),

                        Flexible(
                          child: Text(
                            '"${testimonial['quote'] as String}"',
                            style: Theme.of(context).textTheme.bodyMedium
                                ?.copyWith(
                                  fontStyle: FontStyle.italic,
                                  height: 1.4,
                                ),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),

                        const Spacer(),

                        Row(
                          children: [
                            CircleAvatar(
                              radius: 16,
                              backgroundColor: AppTheme.primaryBlue.withValues(alpha: 
                                0.1,
                              ),
                              child: Text(
                                (testimonial['client'] as String)
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join(),
                                style: TextStyle(
                                  color: AppTheme.primaryBlue,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 12,
                                ),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    testimonial['client'] as String,
                                    style: Theme.of(context).textTheme.bodySmall
                                        ?.copyWith(fontWeight: FontWeight.w600),
                                  ),
                                  Text(
                                    testimonial['company'] as String,
                                    style: Theme.of(context).textTheme.bodySmall
                                        ?.copyWith(
                                          color: Theme.of(context)
                                              .textTheme
                                              .bodySmall
                                              ?.color
                                              ?.withValues(alpha: 0.7),
                                        ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        )
        .animate(delay: (index * 200).ms)
        .fadeIn(duration: 600.ms)
        .slideY(begin: 0.3, end: 0);
  }

  void _showVideoModal(BuildContext context, Map<String, dynamic> testimonial) {
    showDialog(
      context: context,
      builder: (context) => Dialog(
        backgroundColor: Colors.transparent,
        child: Container(
          width: MediaQuery.of(context).size.width * 0.8,
          height: MediaQuery.of(context).size.height * 0.6,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            color: Colors.black,
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: Stack(
              children: [
                // Video player
                Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.play_circle_filled,
                        color: Colors.white,
                        size: 80,
                      ),
                      const SizedBox(height: 16),
                      Text(
                        'Video: ${testimonial['title']}',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'Click to play testimonial video',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.7),
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                ),

                // Close button
                Positioned(
                  top: 16,
                  right: 16,
                  child: IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: const Icon(
                      Icons.close,
                      color: Colors.white,
                      size: 24,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildStatBadge(String value, String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: AppTheme.primaryBlue.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: AppTheme.primaryBlue.withValues(alpha: 0.3),
          width: 1,
        ),
      ),
      child: Column(
        children: [
          Text(
            value,
            style: TextStyle(
              color: AppTheme.primaryBlue,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
          Text(
            label,
            style: TextStyle(
              color: AppTheme.primaryBlue.withValues(alpha: 0.8),
              fontSize: 12,
              fontWeight: FontWeight.w500,
            ),
          ),
        ],
      ),
    );
  }
}
