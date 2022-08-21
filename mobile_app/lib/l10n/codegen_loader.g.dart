// DO NOT EDIT. This is code generated via package:easy_localization/generate.dart

// ignore_for_file: prefer_single_quotes

import 'dart:ui';

import 'package:easy_localization/easy_localization.dart' show AssetLoader;

class CodegenLoader extends AssetLoader{
  const CodegenLoader();

  @override
  Future<Map<String, dynamic>> load(String fullPath, Locale locale ) {
    return Future.value(mapLocales[locale.toString()]);
  }

  static const Map<String,dynamic> en = {
  "dashboard": "Dashboard",
  "announcement": "Announcement",
  "complaint_history": "Complaint History",
  "help": "Help",
  "about": "About",
  "logout": "Logout",
  "post_complaint": "Post Complaint",
  "track_status": "Track Status",
  "child": "Chil"
};
static const Map<String,dynamic> hi = {
  "dashboard": "डैशबोर्ड",
  "announcement": "घोषणा",
  "complaint_history": "शिकायत इतिहास",
  "help": "मदद",
  "about": "ऐप के बारे में",
  "logout": "लॉग आउट",
  "post_complaint": "शिकायत पोस्ट करें",
  "track_status": "ट्रैक स्थिति",
  "child": "बच्चा"
};
static const Map<String, Map<String,dynamic>> mapLocales = {"en": en, "hi": hi};
}
