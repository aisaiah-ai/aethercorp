import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../theme/modern_theme.dart';

class ThemeProvider extends ChangeNotifier {
  bool _isDarkMode = false;
  bool _useModernTheme = true; // Toggle to use modern or classic theme

  bool get isDarkMode => _isDarkMode;
  bool get useModernTheme => _useModernTheme;

  ThemeData get currentTheme => _useModernTheme
      ? (_isDarkMode ? ModernTheme.darkTheme : ModernTheme.lightTheme)
      : (_isDarkMode ? AppTheme.darkTheme : AppTheme.lightTheme);

  void toggleThemeType() {
    _useModernTheme = !_useModernTheme;
    notifyListeners();
  }

  void toggleTheme() {
    _isDarkMode = !_isDarkMode;
    notifyListeners();
  }

  void setTheme(bool isDark) {
    _isDarkMode = isDark;
    notifyListeners();
  }
}
