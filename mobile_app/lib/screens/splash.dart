import 'package:flutter/material.dart';
import 'package:sih_user_app/screens/home_screen.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<SplashScreen> {
  var pages = [HomeScreen()];
  int pageIndex = 0;
  // final _auth = FirebaseAuth.instance;

  // Future getCurrentUser() async {
  //   var currentUser;
  //   currentUser = _auth.currentUser;
  //   if (_auth.currentUser != null) {
  //     setState(() {
  //       pageIndex = 1;
  //     });
  //   }
  //   return currentUser;
  // }

  @override
  void initState() {
    super.initState();
    // getCurrentUser();

    Future.delayed(Duration(seconds: 2), () {
      Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => pages[pageIndex],
          ));
    });
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Container(
              height: size.height * 0.8 ,
              child: Center(
                child: Container(
                  margin: EdgeInsets.only(bottom: 20),
                  child: Image(
                    image: AssetImage("assets/images/logo.png"),
                  ),
                ),
              ),
            ),
            Container(
              height: size.height * 0.15,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    margin: EdgeInsets.only(bottom: 5),
                    child: Image(
                      image: AssetImage("assets/images/indian-emblem.png"),
                      height: 44.0,
                    ),
                  ),
                  SizedBox(
                    width: 10.0,
                  ),
                  Text("Ministry of Labour and Employment\nGovernment of India",
                  style: TextStyle(
                    color: Color(0xFF1A2E47),
                    fontSize: 13.5,
                    fontWeight: FontWeight.w700
                  ))
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
