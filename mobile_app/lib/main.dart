import 'package:flutter/material.dart';
import 'package:sih_user_app/components/service_locator.dart';
import 'package:sih_user_app/screens/complaint/complaint_screen.dart';
import 'package:sih_user_app/screens/splash.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  setupLocator();
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: SplashScreen(),
    );
  }
}
