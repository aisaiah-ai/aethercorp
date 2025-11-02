import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Modern theme configuration for AetherCorp
/// Features: Poppins for headlines, Inter for body, light/dark mode
class ModernTheme {
  // Modern color palette
  static const Color aetherBlue = Color(0xFF0A84FF);
  static const Color electricCyan = Color(0xFF00C2FF);
  static const Color midnightGray = Color(0xFF1E1E2F);
  static const Color softWhite = Color(0xFFF8F9FC);

  // Gradient colors
  static const gradientBlueIndigoCyan = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [aetherBlue, Color(0xFF6366F1), electricCyan],
    stops: [0.0, 0.5, 1.0],
  );

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      colorScheme: ColorScheme.fromSeed(
        seedColor: aetherBlue,
        brightness: Brightness.light,
        primary: aetherBlue,
        secondary: electricCyan,
        surface: softWhite,
        error: const Color(0xFFEF4444),
      ),

      // Typography: Poppins for headlines, Inter for body
      textTheme: GoogleFonts.interTextTheme()
          .apply(
            displayColor: midnightGray,
            bodyColor: midnightGray.withValues(alpha: 0.8),
          )
          .copyWith(
            // H1: 40px Bold (Poppins)
            displayLarge: GoogleFonts.poppins(
              fontSize: 40,
              fontWeight: FontWeight.bold,
              color: midnightGray,
              height: 1.2,
            ),
            // H2: 28px SemiBold (Poppins)
            displayMedium: GoogleFonts.poppins(
              fontSize: 28,
              fontWeight: FontWeight.w600,
              color: midnightGray,
              height: 1.3,
            ),
            // Body: 16px Regular (Inter)
            bodyLarge: GoogleFonts.inter(
              fontSize: 16,
              fontWeight: FontWeight.w400,
              color: midnightGray.withValues(alpha: 0.8),
              height: 1.5,
            ),
          ),

      // AppBar theme
      appBarTheme: AppBarTheme(
        backgroundColor: softWhite,
        foregroundColor: midnightGray,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: GoogleFonts.poppins(
          fontSize: 20,
          fontWeight: FontWeight.w600,
          color: midnightGray,
        ),
      ),

      // Card theme
      cardTheme: CardThemeData(
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
        color: Colors.white,
      ),

      // Button themes
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: aetherBlue,
          foregroundColor: Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
          elevation: 4,
        ),
      ),

      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: aetherBlue,
          side: const BorderSide(color: aetherBlue, width: 2),
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

      // Input decoration
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: softWhite,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: Colors.grey.shade300),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: Colors.grey.shade300),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: aetherBlue, width: 2),
        ),
      ),

      // Scaffold background
      scaffoldBackgroundColor: softWhite,
    );
  }

  static ThemeData get darkTheme {
    const darkSurface = Color(0xFF1A1A2E);
    const darkCard = Color(0xFF2A2A3E);

    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      colorScheme: ColorScheme.fromSeed(
        seedColor: electricCyan,
        brightness: Brightness.dark,
        primary: electricCyan,
        secondary: aetherBlue,
        surface: darkSurface,
        error: const Color(0xFFF87171),
      ),

      // Typography: Poppins for headlines, Inter for body
      textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme)
          .apply(
            displayColor: Colors.white,
            bodyColor: Colors.white.withValues(alpha: 0.9),
          )
          .copyWith(
            // H1: 40px Bold (Poppins)
            displayLarge: GoogleFonts.poppins(
              fontSize: 40,
              fontWeight: FontWeight.bold,
              color: Colors.white,
              height: 1.2,
            ),
            // H2: 28px SemiBold (Poppins)
            displayMedium: GoogleFonts.poppins(
              fontSize: 28,
              fontWeight: FontWeight.w600,
              color: Colors.white,
              height: 1.3,
            ),
            // Body: 16px Regular (Inter)
            bodyLarge: GoogleFonts.inter(
              fontSize: 16,
              fontWeight: FontWeight.w400,
              color: Colors.white.withValues(alpha: 0.9),
              height: 1.5,
            ),
          ),

      // AppBar theme
      appBarTheme: AppBarTheme(
        backgroundColor: darkSurface,
        foregroundColor: Colors.white,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: GoogleFonts.poppins(
          fontSize: 20,
          fontWeight: FontWeight.w600,
          color: Colors.white,
        ),
      ),

      // Card theme
      cardTheme: CardThemeData(
        elevation: 4,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
        color: darkCard,
      ),

      // Button themes
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: electricCyan,
          foregroundColor: darkSurface,
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
          elevation: 4,
        ),
      ),

      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: electricCyan,
          side: const BorderSide(color: electricCyan, width: 2),
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

      // Input decoration
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: darkCard,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: Colors.grey.shade700),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: Colors.grey.shade700),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: electricCyan, width: 2),
        ),
      ),

      // Scaffold background
      scaffoldBackgroundColor: darkSurface,
    );
  }
}
