import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sih_user_app/screens/complaint/complaint_screen.dart';
import 'package:sih_user_app/screens/help_screen.dart';
import 'dart:async';
import 'dart:io';
// import 'package:cool_alert/cool_alert.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:geopoint/geopoint.dart';
import 'package:platform_alert_dialog/platform_alert_dialog.dart';
import 'package:rounded_loading_button/rounded_loading_button.dart';
import 'package:sih_user_app/models/Choice.dart';
import 'package:sih_user_app/components/location.dart';
import 'package:geopoint_location/geopoint_location.dart';

class HomeScreen extends StatefulWidget {
  static String id = "/dashboard";
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  int index = 0;
  Location location = Location();

  late GeoPoint myGeoPoint;

  late String address;

  fetchMeTheCoordinates() async {
    myGeoPoint = (await location.getMyCurrentLocation())!;
    print(myGeoPoint.address);
    setState(() {
      address = myGeoPoint.address;
    });
    address.replaceAll(RegExp(r'null'), '');
  }

  @override
  void initState() {
    fetchMeTheCoordinates();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          backgroundColor: Colors.white,
          elevation: 2.0,
          leading: IconButton(
            icon: Icon(Icons.menu),
            color: Colors.black,
            onPressed: () => _scaffoldKey.currentState!.openDrawer(),
          ),
          centerTitle: true,
          title: Text(
            'Dashboard',
            style: TextStyle(
              color: Colors.black,
            ),
          ),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              color: Colors.black,
              onPressed: () async {
                
              },
            )
          ],
        ),
        drawer: SizedBox(
          width: MediaQuery.of(context).size.width * 0.6,
          child: Drawer(
            elevation: 20.0,
            child: Stack(
              alignment: Alignment.center,
              children: <Widget>[
                Column(
                  children: [
                    SizedBox(
                      height: 15.0,
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: CircleAvatar(
                        backgroundColor: Colors.white,
                        backgroundImage: AssetImage('assets/images/logo.png'),
                        radius: 10.0,
                      ),
                    ),
                    Text(
                      'Welcome to',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        letterSpacing: 1.7,
                      ),
                    ),
                    Text(
                      'CLTS',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 15.0,
                        fontWeight: FontWeight.w500,
                        letterSpacing: 1.0,
                      ),
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.bell,
                        color: Colors.blueGrey,
                        size: 21.0,
                      ),
                      title: Padding(
                        padding: const EdgeInsets.only(left: 15.0),
                        child: Text(
                          "Announcements",
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.w600),
                        ),
                      ),
                      onTap: () {
                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(
                        //     builder: (context) => AnnouncementsScreen(),
                        //   ),
                        // );
                      },
                    ),
                    ListTile(
                      leading: Icon(
                        Icons.assignment_outlined,
                        color: Colors.blueGrey,
                        size: 22.0,
                      ),
                      title: Padding(
                        padding: const EdgeInsets.only(left: 15.0),
                        child: Text(
                          "Complaint History",
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.w600),
                        ),
                      ),
                      onTap: () {
                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(
                        //     builder: (context) => GrievanceHistory(),
                        //   ),
                        // );
                      },
                    ),
                    ListTile(
                      leading: Icon(
                        Icons.call,
                        color: Colors.blueGrey,
                        size: 22.0,
                      ),
                      title: Padding(
                        padding: const EdgeInsets.only(left: 15.0),
                        child: Text(
                          "Help",
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.w600),
                        ),
                      ),
                      onTap: () {
                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(
                        //     builder: (context) => HelpScreen(),
                        //   ),
                        // );
                      },
                    ),
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.info,
                        color: Colors.blueGrey,
                        size: 20.0,
                      ),
                      title: Padding(
                        padding: const EdgeInsets.only(left: 15.0),
                        child: Text(
                          "About",
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.w600),
                        ),
                      ),
                      onTap: () {},
                    ),
                    ListTile(
                        leading: Icon(
                          Icons.logout,
                          color: Colors.blueGrey,
                          size: 20.0,
                        ),
                        title: Padding(
                          padding: const EdgeInsets.only(left: 15.0),
                          child: Text(
                            "Logout",
                            style: TextStyle(
                                color: Colors.black,
                                fontSize: 15,
                                fontWeight: FontWeight.w600),
                          ),
                        ),
                        onTap: () {
                          // CoolAlert.show(
                          //     context: context,
                          //     type: CoolAlertType.confirm,
                          //     text: "Do you wish to logout?",
                          //     confirmBtnText: "Yes",
                          //     cancelBtnText: "No",
                          //     confirmBtnColor: Colors.blue,
                          //     onConfirmBtnTap: () async {
                          //       await _auth.signOut();
                          //       Navigator.popAndPushNamed(context, '/login');
                          //     },
                          //     onCancelBtnTap: () {
                          //       Navigator.pop(context);
                          //     });
                        }),
                    SizedBox(height: 20.0),
                    Container(
                      height: 0.7,
                      width: MediaQuery.of(context).size.width,
                      decoration: BoxDecoration(
                        color: Colors.blueGrey,
                        borderRadius: BorderRadius.circular(100.0),
                      ),
                    ),
                  ],
                ),
                Positioned(
                  bottom: 30.0,
                  child: Text(
                    'Version 1.0.0',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.blueGrey,
                      fontSize: 13.0,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: index = 0,
          onTap: (index) {
            if (index == 0) {
              print("DUHH");
            }
            if (index == 1) {
              Navigator.push(
                context,
                PageTransition(
                  child: HelpScreen(),
                  type: PageTransitionType.fade,
                ),
              );
            }
          },
          elevation: 100.0,
          selectedItemColor: Color(0xff0c18fb),
          // selectedItemColor: Colors.orange,
          unselectedItemColor: Colors.grey[600],
          showSelectedLabels: true,
          showUnselectedLabels: false,
          selectedIconTheme: IconThemeData(
            size: 26,
          ),
          unselectedIconTheme: IconThemeData(
            size: 23,
          ),
          type: BottomNavigationBarType.shifting,
          backgroundColor: Colors.white,
          items: [
            BottomNavigationBarItem(
              label: "Home",
              icon: Icon(
                CupertinoIcons.home,
              ),
            ),

            BottomNavigationBarItem(
              label: "Help",
              icon: Icon(
                CupertinoIcons.phone,
              ),
            ),


          ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                padding: EdgeInsets.all(8.0),
                width: MediaQuery.of(context).size.width,
                decoration: BoxDecoration(
                  color: Colors.lightBlueAccent.withOpacity(0.2),
                ),
                constraints: BoxConstraints(
                  minHeight: 40.0,
                ),
                child: Row(
                  children: [
                    SizedBox(
                      width: 5.0,
                    ),
                    Icon(
                      Icons.remove_red_eye,
                      size: 15.0,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Container(
                      child: Text(
                        '10 people are using CLTS to solve their grievances.',
                        style: TextStyle(
                          fontSize: 12.0,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(
                height: 10.0,
              ),
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => PostComplaintScreen(address: address,),
                    ),
                  );
                },
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Container(
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: Colors.blueGrey,
                        width: 2.0,
                      ),
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(2.5),
                      child: Container(
                        constraints: BoxConstraints(
                          minWidth: MediaQuery.of(context).size.width,
                          minHeight: 120.0,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.teal,
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  constraints: BoxConstraints(
                                    maxWidth:
                                        MediaQuery.of(context).size.width * 0.5,
                                  ),
                                  child: Text(
                                    'Complaints',
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 25.0,
                                        fontWeight: FontWeight.w600),
                                  ),
                                ),
                                Text(
                                  'Post your complaints here.',
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 10.0,
                                      fontWeight: FontWeight.w400),
                                ),
                              ],
                            ),
                            Container(),
                            Container(),
                            Container(),
                            Image.asset(
                              "assets/images/indian-emblem.png",
                              height:
                                  MediaQuery.of(context).size.height * 0.075,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              GestureDetector(
                onTap: () {
                  // Navigator.push(
                  //   context,
                  //   MaterialPageRoute(
                  //     builder: (context) => CheckStatusScreen(),
                  //   ),
                  // );
                },
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Container(
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: Colors.blueGrey,
                        width: 2.0,
                      ),
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(2.5),
                      child: Container(
                        constraints: BoxConstraints(
                          minWidth: MediaQuery.of(context).size.width,
                          minHeight: 120.0,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.blue,
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  constraints: BoxConstraints(
                                    maxWidth:
                                        MediaQuery.of(context).size.width * 0.5,
                                  ),
                                  child: Text(
                                    'TRACK STATUS',
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 25.0,
                                        fontWeight: FontWeight.w600),
                                  ),
                                ),
                                Text(
                                  'Check status of your registered\n complaints.',
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 10.0,
                                      fontWeight: FontWeight.w400),
                                ),
                              ],
                            ),
                            Container(),
                            Container(),
                            Container(),
                            Image.asset(
                              "assets/images/indian-emblem.png",
                              height:
                                  MediaQuery.of(context).size.height * 0.075,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              SizedBox(
                height: 80.0,
              ),
              Container(
                margin: const EdgeInsets.only(top: 20.0),
                padding: const EdgeInsets.all(15.0),
                height: 400.0,
                color: Colors.grey[200],
                child: Stack(
                  children: <Widget>[
                    // Positioned(
                    //   right: 15.0,
                    //   top: 50.0,
                    //   child: Image(
                    //     image: AssetImage('assets/images/body_logo.png'),
                    //   ),
                    // ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(
                          'SAVE\n\LIVES',
                          style: TextStyle(
                            color: Colors.grey[400],
                            fontSize: 75.0,
                            fontFamily: 'Roboto',
                            letterSpacing: 0.2,
                            height: 0.8,
                          ),
                        ),
                        SizedBox(
                          height: 24.0,
                        ),
                        Text(
                          'MADE WITH LOVE',
                          style: Theme.of(context)
                              .textTheme
                              .bodyText1!
                              .copyWith(color: Colors.grey),
                        ),
                        Text(
                          'CLTS, SRMIST, Tamil Nadu',
                          style: Theme.of(context)
                              .textTheme
                              .bodyText1!
                              .copyWith(color: Colors.grey),
                        ),
                        SizedBox(
                          height: 48.0,
                        ),
                        Row(
                          children: <Widget>[
                            Container(
                              height: 1.0,
                              width: MediaQuery.of(context).size.width / 4,
                              color: Colors.grey,
                            ),
                          ],
                        )
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}