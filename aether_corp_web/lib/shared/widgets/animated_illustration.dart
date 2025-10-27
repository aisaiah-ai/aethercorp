import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:lottie/lottie.dart';
import 'package:flutter_animate/flutter_animate.dart';

class AnimatedIllustration extends StatelessWidget {
  final String? svgPath;
  final String? lottiePath;
  final IconData? icon;
  final double size;
  final Color? color;
  final bool animate;
  final Duration animationDuration;

  const AnimatedIllustration({
    super.key,
    this.svgPath,
    this.lottiePath,
    this.icon,
    this.size = 100,
    this.color,
    this.animate = true,
    this.animationDuration = const Duration(seconds: 2),
  });

  @override
  Widget build(BuildContext context) {
    Widget illustration;

    if (lottiePath != null) {
      illustration = Lottie.asset(
        lottiePath!,
        width: size,
        height: size,
        fit: BoxFit.contain,
      );
    } else if (svgPath != null) {
      illustration = SvgPicture.asset(
        svgPath!,
        width: size,
        height: size,
        colorFilter: color != null
            ? ColorFilter.mode(color!, BlendMode.srcIn)
            : null,
      );
    } else if (icon != null) {
      illustration = Icon(
        icon!,
        size: size,
        color: color ?? Theme.of(context).colorScheme.primary,
      );
    } else {
      illustration = Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          color: Colors.grey[300],
          borderRadius: BorderRadius.circular(8),
        ),
        child: const Icon(Icons.image),
      );
    }

    if (animate) {
      return illustration
          .animate()
          .fadeIn(duration: animationDuration)
          .scale(begin: const Offset(0.8, 0.8), end: const Offset(1.0, 1.0))
          .then()
          .shimmer(duration: const Duration(seconds: 1));
    }

    return illustration;
  }
}

class ServiceIllustration extends StatelessWidget {
  final String serviceType;
  final double size;
  final bool animate;

  const ServiceIllustration({
    super.key,
    required this.serviceType,
    this.size = 80,
    this.animate = true,
  });

  @override
  Widget build(BuildContext context) {
    IconData icon;
    Color color;

    switch (serviceType.toLowerCase()) {
      case 'cloud':
      case 'aws':
      case 'gcp':
      case 'azure':
        icon = Icons.cloud_outlined;
        color = Colors.blue;
        break;
      case 'ai':
      case 'ml':
      case 'machine learning':
        icon = Icons.psychology_outlined;
        color = Colors.purple;
        break;
      case 'data':
      case 'big data':
      case 'analytics':
        icon = Icons.analytics_outlined;
        color = Colors.green;
        break;
      case 'web':
      case 'mobile':
      case 'development':
        icon = Icons.code_outlined;
        color = Colors.orange;
        break;
      case 'devops':
      case 'infrastructure':
        icon = Icons.settings_outlined;
        color = Colors.teal;
        break;
      case 'migration':
      case 'modernization':
        icon = Icons.transform_outlined;
        color = Colors.red;
        break;
      default:
        icon = Icons.engineering_outlined;
        color = Theme.of(context).colorScheme.primary;
    }

    return AnimatedIllustration(
      icon: icon,
      size: size,
      color: color,
      animate: animate,
    );
  }
}

class FloatingParticles extends StatelessWidget {
  final int particleCount;
  final Color particleColor;
  final double particleSize;
  final Duration animationDuration;

  const FloatingParticles({
    super.key,
    this.particleCount = 20,
    this.particleColor = Colors.white,
    this.particleSize = 4.0,
    this.animationDuration = const Duration(seconds: 3),
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: List.generate(particleCount, (index) {
        return Positioned(
          left: (index * 50.0) % MediaQuery.of(context).size.width,
          top: (index * 30.0) % MediaQuery.of(context).size.height,
          child:
              Container(
                    width: particleSize,
                    height: particleSize,
                    decoration: BoxDecoration(
                      color: particleColor.withOpacity(0.6),
                      shape: BoxShape.circle,
                    ),
                  )
                  .animate(onPlay: (controller) => controller.repeat())
                  .fadeIn(duration: animationDuration)
                  .then()
                  .fadeOut(duration: animationDuration)
                  .then()
                  .moveY(
                    begin: 0,
                    end: -100,
                    duration: animationDuration,
                    curve: Curves.easeInOut,
                  ),
        );
      }),
    );
  }
}
