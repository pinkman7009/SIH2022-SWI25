import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:sih_user_app/components/service_locator.dart';
import 'package:sih_user_app/screens/complaint/complaint_screen.dart';
import 'package:sih_user_app/screens/splash.dart';
import 'package:firebase_core/firebase_core.dart';
import './l10n/codegen_loader.g.dart';

Future<void> main() async {
  setupLocator();
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  await EasyLocalization.ensureInitialized();
  runApp(EasyLocalization(
    path: 'assets/l10n',
    supportedLocales: const [
      Locale('en'),
      Locale('hi'),
    ],
    fallbackLocale: const Locale('hi'),
    assetLoader: const CodegenLoader(),
    child: const MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      supportedLocales: context.supportedLocales,
      localizationsDelegates: context.localizationDelegates,
      debugShowCheckedModeBanner: false,
      locale: context.locale,
      theme: ThemeData(
        fontFamily: 'Raleway',
        primarySwatch: Colors.teal,
      ),
      home: SplashScreen(),
    );
  }
}
