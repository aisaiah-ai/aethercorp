#!/usr/bin/env python3
"""
Script to fix all deprecated withOpacity calls in Dart files
Replaces .withOpacity(value) with .withValues(alpha: value)
"""

import os
import re
from pathlib import Path

def fix_withopacity_in_file(file_path):
    """Fix all withOpacity calls in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match .withOpacity(value) where value can be:
        # - A simple number: 0.1, 0.95, etc.
        # - A variable: opacity, etc.
        # - A complex expression: (caseStudy['color'] as Color).withOpacity(0.1)
        
        # Match .withOpacity(value) and replace with .withValues(alpha: value)
        pattern = r'\.withOpacity\(([^)]+)\)'
        
        def replace_opacity(match):
            value = match.group(1)
            return f'.withValues(alpha: {value})'
        
        content = re.sub(pattern, replace_opacity, content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all Dart files"""
    lib_dir = Path('aether_corp_web/lib')
    
    if not lib_dir.exists():
        print(f"Error: {lib_dir} not found")
        return
    
    dart_files = list(lib_dir.rglob('*.dart'))
    fixed_count = 0
    
    print(f"Found {len(dart_files)} Dart files to check")
    
    for dart_file in dart_files:
        if fix_withopacity_in_file(dart_file):
            fixed_count += 1
            print(f"Fixed: {dart_file}")
    
    print(f"\n✅ Fixed {fixed_count} files")
    print(f"✅ Total files processed: {len(dart_files)}")

if __name__ == '__main__':
    main()

