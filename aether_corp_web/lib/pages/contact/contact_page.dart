import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../../shared/widgets/main_layout.dart';
import '../../core/theme/app_theme.dart';
import '../../core/services/firebase_service.dart';

class ContactPage extends StatefulWidget {
  const ContactPage({super.key});

  @override
  State<ContactPage> createState() => _ContactPageState();
}

class _ContactPageState extends State<ContactPage> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _companyController = TextEditingController();
  final _phoneController = TextEditingController();
  final _messageController = TextEditingController();

  String _selectedService = '';
  bool _isSubmitting = false;

  final List<String> _services = [
    'Cloud Consulting & DevOps',
    'Big Data & Modern ETL Pipelines',
    'AI & Machine Learning',
    'Prompt Engineering & GenAI UX',
    'Web & Mobile App Development',
    'Data Migration & Legacy Modernization',
  ];

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _companyController.dispose();
    _phoneController.dispose();
    _messageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MainLayout(
      child: Column(
        children: [
          _buildHeroSection(context),
          _buildContactImageSection(context),
          _buildContactForm(context),
          _buildContactInfo(context),
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
            'Get in Touch',
            style: Theme.of(context).textTheme.displayLarge?.copyWith(
                  color: Colors.white,
                  fontWeight: FontWeight.w700,
                ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),
          const SizedBox(height: 24),
          Text(
            'Let\'s discuss your project and how we can help transform your business',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  color: Colors.white.withValues(alpha: 0.9),
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

  Widget _buildContactForm(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      child: Column(
        children: [
          Text(
            'Start Your Project',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),
          const SizedBox(height: 48),
          Card(
            elevation: 8,
            child: Padding(
              padding: const EdgeInsets.all(32),
              child: Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: TextFormField(
                            controller: _nameController,
                            decoration: const InputDecoration(
                              labelText: 'Full Name *',
                              prefixIcon: Icon(Icons.person_outline),
                              border: OutlineInputBorder(),
                            ),
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Please enter your name';
                              }
                              return null;
                            },
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: TextFormField(
                            controller: _emailController,
                            decoration: const InputDecoration(
                              labelText: 'Email Address *',
                              prefixIcon: Icon(Icons.email_outlined),
                              border: OutlineInputBorder(),
                            ),
                            keyboardType: TextInputType.emailAddress,
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Please enter your email';
                              }
                              if (!RegExp(
                                r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
                              ).hasMatch(value)) {
                                return 'Please enter a valid email';
                              }
                              return null;
                            },
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 24),
                    Row(
                      children: [
                        Expanded(
                          child: TextFormField(
                            controller: _companyController,
                            decoration: const InputDecoration(
                              labelText: 'Company',
                              prefixIcon: Icon(Icons.business_outlined),
                              border: OutlineInputBorder(),
                            ),
                          ),
                        ),
                        const SizedBox(width: 16),
                        Expanded(
                          child: TextFormField(
                            controller: _phoneController,
                            decoration: const InputDecoration(
                              labelText: 'Phone Number',
                              prefixIcon: Icon(Icons.phone_outlined),
                              border: OutlineInputBorder(),
                            ),
                            keyboardType: TextInputType.phone,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 24),
                    DropdownButtonFormField<String>(
                      initialValue:
                          _selectedService.isEmpty ? null : _selectedService,
                      decoration: const InputDecoration(
                        labelText: 'Service Interest',
                        prefixIcon: Icon(Icons.engineering_outlined),
                        border: OutlineInputBorder(),
                      ),
                      items: _services
                          .map(
                            (service) => DropdownMenuItem(
                              value: service,
                              child: Text(service),
                            ),
                          )
                          .toList(),
                      onChanged: (value) {
                        setState(() {
                          _selectedService = value ?? '';
                        });
                      },
                    ),
                    const SizedBox(height: 24),
                    TextFormField(
                      controller: _messageController,
                      decoration: const InputDecoration(
                        labelText: 'Project Details *',
                        prefixIcon: Icon(Icons.message_outlined),
                        border: OutlineInputBorder(),
                        alignLabelWithHint: true,
                      ),
                      maxLines: 5,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please describe your project';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 32),
                    SizedBox(
                      width: double.infinity,
                      height: 56,
                      child: ElevatedButton(
                        onPressed: _isSubmitting ? null : _submitForm,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.primaryBlue,
                          foregroundColor: Colors.white,
                          textStyle: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        child: _isSubmitting
                            ? const Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  SizedBox(
                                    width: 20,
                                    height: 20,
                                    child: CircularProgressIndicator(
                                      strokeWidth: 2,
                                      valueColor: AlwaysStoppedAnimation<Color>(
                                        Colors.white,
                                      ),
                                    ),
                                  ),
                                  SizedBox(width: 12),
                                  Text('Submitting...'),
                                ],
                              )
                            : const Text('Send Message'),
                      ),
                    ),
                  ],
                ),
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

  Widget _buildContactInfo(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      decoration: BoxDecoration(color: Theme.of(context).colorScheme.surface),
      child: Column(
        children: [
          Text(
            'Contact Information',
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w700),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),
          const SizedBox(height: 48),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: isMobile ? 1 : 2,
              crossAxisSpacing: 32,
              mainAxisSpacing: 32,
              childAspectRatio: isMobile ? 1.6 : 1.3,
            ),
            itemCount: 2,
            itemBuilder: (context, index) {
              final contactInfo = [
                {
                  'title': 'Email Us',
                  'subtitle': 'Get in touch via email',
                  'content': 'info@aethercorp.us',
                  'icon': Icons.email_outlined,
                  'color': Colors.blue,
                },
                {
                  'title': 'Office Location',
                  'subtitle': 'Visit our headquarters',
                  'content': 'Tampa, Florida',
                  'icon': Icons.location_on_outlined,
                  'color': Colors.purple,
                },
              ];

              final info = contactInfo[index];

              return Card(
                elevation: 8,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Container(
                  padding: const EdgeInsets.all(32),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        Colors.white,
                        (info['color'] as Color).withValues(alpha: 0.05),
                      ],
                    ),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        width: 100,
                        height: 100,
                        decoration: BoxDecoration(
                          color:
                              (info['color'] as Color).withValues(alpha: 0.1),
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: (info['color'] as Color).withValues(
                              alpha: 0.2,
                            ),
                            width: 2,
                          ),
                        ),
                        child: Center(
                          child: Icon(
                            info['icon'] as IconData,
                            size: 50,
                            color: info['color'] as Color,
                          ),
                        ),
                      ),
                      const SizedBox(height: 24),
                      Text(
                        info['title'] as String,
                        style:
                            Theme.of(context).textTheme.headlineSmall?.copyWith(
                                  fontWeight: FontWeight.w700,
                                  color: AppTheme.primaryBlue,
                                ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 8),
                      Text(
                        info['subtitle'] as String,
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: Colors.grey[600],
                              height: 1.4,
                            ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 16),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 12,
                        ),
                        decoration: BoxDecoration(
                          color:
                              (info['color'] as Color).withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: (info['color'] as Color).withValues(
                              alpha: 0.2,
                            ),
                            width: 1,
                          ),
                        ),
                        child: Text(
                          info['content'] as String,
                          style:
                              Theme.of(context).textTheme.titleLarge?.copyWith(
                                    fontWeight: FontWeight.w600,
                                    color: info['color'] as Color,
                                  ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
              ).animate(delay: (index * 100).ms).fadeIn(duration: 600.ms).scale(
                    begin: const Offset(0.8, 0.8),
                    end: const Offset(1.0, 1.0),
                  );
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
            'Ready to Transform Your Business?',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  color: Colors.white,
                  fontWeight: FontWeight.w700,
                ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),
          const SizedBox(height: 24),
          Text(
            'Join hundreds of companies that trust AetherCorp for their digital transformation',
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
            onPressed: () => _scrollToForm(),
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
            child: const Text('Start Your Project Today'),
          )
              .animate()
              .fadeIn(delay: 400.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),
        ],
      ),
    );
  }

  void _submitForm() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    setState(() {
      _isSubmitting = true;
    });

    try {
      // Submit to Firebase
      final success = await FirebaseService.submitProjectRequest(
        name: _nameController.text.trim(),
        email: _emailController.text.trim(),
        message: _messageController.text.trim(),
        company: _companyController.text.trim(),
        phone: _phoneController.text.trim(),
        serviceInterest: _selectedService,
      );

      if (!mounted) return;

      setState(() {
        _isSubmitting = false;
      });

      if (success) {
        // Show success message
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Thank you! We\'ll get back to you within 24 hours.'),
            backgroundColor: Colors.green,
            duration: Duration(seconds: 4),
          ),
        );

        // Clear form
        _formKey.currentState!.reset();
        _nameController.clear();
        _emailController.clear();
        _companyController.clear();
        _phoneController.clear();
        _messageController.clear();
        setState(() {
          _selectedService = '';
        });
      } else {
        // Show error message
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Sorry, there was an error submitting your request. Please try again.',
            ),
            backgroundColor: Colors.red,
            duration: Duration(seconds: 4),
          ),
        );
      }
    } catch (e) {
      if (!mounted) return;

      setState(() {
        _isSubmitting = false;
      });

      // Show error message
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error: ${e.toString()}'),
          backgroundColor: Colors.red,
          duration: const Duration(seconds: 4),
        ),
      );
    }
  }

  void _scrollToForm() {
    // Scroll to form section
    // In a real implementation, you would use a ScrollController
    // For now, we'll just show a message
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Scroll to the form above to get started!')),
    );
  }

  Widget _buildContactImageSection(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: EdgeInsets.all(isMobile ? 24 : 48),
      color: Theme.of(context).colorScheme.surface,
      child: Column(
        children: [
          Text(
            'Ready to Transform Your Business?',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.w700,
                  color: AppTheme.primaryBlue,
                ),
          ).animate().fadeIn(duration: 600.ms).slideY(begin: 0.3, end: 0),

          const SizedBox(height: 16),

          Text(
            'Let\'s discuss how we can help you achieve your digital transformation goals',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  color: Theme.of(context).textTheme.bodyLarge?.color,
                ),
          )
              .animate()
              .fadeIn(delay: 200.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 48),

          // Contact image section
          Container(
            width: double.infinity,
            height: isMobile ? 300 : 500,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.1),
                  blurRadius: 20,
                  offset: const Offset(0, 10),
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: Container(
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
                    // Background pattern
                    Positioned.fill(
                      child: Container(
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: AssetImage(
                              'assets/images/contact-hero.jpg',
                            ),
                            fit: BoxFit.cover,
                            colorFilter: ColorFilter.mode(
                              Colors.black.withValues(alpha: 0.3),
                              BlendMode.darken,
                            ),
                          ),
                        ),
                      ),
                    ),

                    // Content overlay
                    Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            width: 120,
                            height: 120,
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.2),
                              shape: BoxShape.circle,
                              border: Border.all(
                                color: Colors.white.withValues(alpha: 0.3),
                                width: 3,
                              ),
                            ),
                            child: const Icon(
                              Icons.handshake_outlined,
                              color: Colors.white,
                              size: 60,
                            ),
                          ),
                          const SizedBox(height: 24),
                          Text(
                            'Let\'s Work Together',
                            style: Theme.of(context)
                                .textTheme
                                .headlineSmall
                                ?.copyWith(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w600,
                                ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            'Transform your business with our expertise',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.9),
                              fontSize: 16,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          )
              .animate()
              .fadeIn(delay: 400.ms, duration: 600.ms)
              .slideY(begin: 0.3, end: 0),

          const SizedBox(height: 32),

          // Key benefits
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildBenefitItem(
                Icons.speed,
                'Fast Delivery',
                'Quick turnaround times',
              ),
              _buildBenefitItem(
                Icons.security,
                'Secure & Reliable',
                'Enterprise-grade security',
              ),
              _buildBenefitItem(
                Icons.support_agent,
                '24/7 Support',
                'Round-the-clock assistance',
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

  Widget _buildBenefitItem(IconData icon, String title, String description) {
    return Expanded(
      child: Column(
        children: [
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(
              color: AppTheme.primaryBlue.withValues(alpha: 0.1),
              shape: BoxShape.circle,
              border: Border.all(
                color: AppTheme.primaryBlue.withValues(alpha: 0.3),
                width: 2,
              ),
            ),
            child: Center(
              child: Icon(icon, color: AppTheme.primaryBlue, size: 24),
            ),
          ),
          const SizedBox(height: 16),
          Text(
            title,
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  fontWeight: FontWeight.w600,
                  color: AppTheme.primaryBlue,
                ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 8),
          Text(
            description,
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: Theme.of(
                    context,
                  ).textTheme.bodySmall?.color?.withValues(alpha: 0.7),
                ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
