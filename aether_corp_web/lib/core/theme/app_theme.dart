import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Colors - Deep blue, dark violet, gradient accents
  static const Color primaryBlue = Color(0xFF1A365D);
  static const Color primaryViolet = Color(0xFF553C9A);
  static const Color accentBlue = Color(0xFF2D5A87);
  static const Color accentViolet = Color(0xFF7C3AED);
  static const Color lightBlue = Color(0xFF4299E1);
  static const Color lightViolet = Color(0xFF9F7AEA);

  // Neutral colors
  static const Color darkGray = Color(0xFF2D3748);
  static const Color mediumGray = Color(0xFF4A5568);
  static const Color lightGray = Color(0xFF718096);
  static const Color veryLightGray = Color(0xFFF7FAFC);
  static const Color white = Color(0xFFFFFFFF);

  // Gradient colors
  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primaryBlue, primaryViolet],
  );

  static const LinearGradient accentGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [accentBlue, accentViolet],
  );

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      fontFamily: GoogleFonts.inter().fontFamily,
      colorScheme: const ColorScheme.light(
        primary: primaryBlue,
        secondary: primaryViolet,
        surface: white,
        error: Color(0xFFE53E3E),
        onPrimary: white,
        onSecondary: white,
        onSurface: darkGray,
        onError: white,
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: white,
        foregroundColor: darkGray,
        elevation: 0,
        titleTextStyle: GoogleFonts.inter(
          fontSize: 20,
          fontWeight: FontWeight.w600,
          color: darkGray,
        ),
      ),
      cardTheme: CardThemeData(
        elevation: 4,
        shadowColor: darkGray.withValues(alpha: 0.1),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primaryBlue,
          foregroundColor: white,
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
      textTheme: GoogleFonts.interTextTheme().copyWith(
        displayLarge: GoogleFonts.inter(
          fontSize: 48,
          fontWeight: FontWeight.w700,
          color: darkGray,
        ),
        displayMedium: GoogleFonts.inter(
          fontSize: 36,
          fontWeight: FontWeight.w600,
          color: darkGray,
        ),
        displaySmall: GoogleFonts.inter(
          fontSize: 28,
          fontWeight: FontWeight.w600,
          color: darkGray,
        ),
        headlineLarge: GoogleFonts.inter(
          fontSize: 24,
          fontWeight: FontWeight.w600,
          color: darkGray,
        ),
        headlineMedium: GoogleFonts.inter(
          fontSize: 20,
          fontWeight: FontWeight.w500,
          color: darkGray,
        ),
        headlineSmall: GoogleFonts.inter(
          fontSize: 18,
          fontWeight: FontWeight.w500,
          color: darkGray,
        ),
        bodyLarge: GoogleFonts.inter(
          fontSize: 16,
          fontWeight: FontWeight.w400,
          color: darkGray,
        ),
        bodyMedium: GoogleFonts.inter(
          fontSize: 14,
          fontWeight: FontWeight.w400,
          color: mediumGray,
        ),
        bodySmall: GoogleFonts.inter(
          fontSize: 12,
          fontWeight: FontWeight.w400,
          color: lightGray,
        ),
      ),
    );
  }

  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      fontFamily: GoogleFonts.inter().fontFamily,
      colorScheme: const ColorScheme.dark(
        primary: lightBlue,
        secondary: lightViolet,
        surface: Color(0xFF1A202C),
        error: Color(0xFFFC8181),
        onPrimary: white,
        onSecondary: white,
        onSurface: white,
        onError: darkGray,
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: const Color(0xFF1A202C),
        foregroundColor: white,
        elevation: 0,
        titleTextStyle: GoogleFonts.inter(
          fontSize: 20,
          fontWeight: FontWeight.w600,
          color: white,
        ),
      ),
      cardTheme: CardThemeData(
        elevation: 4,
        shadowColor: Colors.black.withValues(alpha: 0.3),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: lightBlue,
          foregroundColor: white,
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
      textTheme: GoogleFonts.interTextTheme().copyWith(
        displayLarge: GoogleFonts.inter(
          fontSize: 48,
          fontWeight: FontWeight.w700,
          color: white,
        ),
        displayMedium: GoogleFonts.inter(
          fontSize: 36,
          fontWeight: FontWeight.w600,
          color: white,
        ),
        displaySmall: GoogleFonts.inter(
          fontSize: 28,
          fontWeight: FontWeight.w600,
          color: white,
        ),
        headlineLarge: GoogleFonts.inter(
          fontSize: 24,
          fontWeight: FontWeight.w600,
          color: white,
        ),
        headlineMedium: GoogleFonts.inter(
          fontSize: 20,
          fontWeight: FontWeight.w500,
          color: white,
        ),
        headlineSmall: GoogleFonts.inter(
          fontSize: 18,
          fontWeight: FontWeight.w500,
          color: white,
        ),
        bodyLarge: GoogleFonts.inter(
          fontSize: 16,
          fontWeight: FontWeight.w400,
          color: white,
        ),
        bodyMedium: GoogleFonts.inter(
          fontSize: 14,
          fontWeight: FontWeight.w400,
          color: lightGray,
        ),
        bodySmall: GoogleFonts.inter(
          fontSize: 12,
          fontWeight: FontWeight.w400,
          color: lightGray,
        ),
      ),
    );
  }
}
