import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:math';

// import 'package:cool_alert/cool_alert.dart';
import 'package:animated_button/animated_button.dart';
import 'package:cool_alert/cool_alert.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:geopoint/geopoint.dart';
import 'package:image_picker/image_picker.dart';
import 'package:page_transition/page_transition.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:platform_alert_dialog/platform_alert_dialog.dart';
import 'package:rounded_loading_button/rounded_loading_button.dart';
import 'package:sih_user_app/models/Choice.dart';
import 'package:sih_user_app/components/location.dart';
import 'package:geopoint_location/geopoint_location.dart';
import 'package:nanoid/nanoid.dart';
import 'package:sih_user_app/screens/home_screen.dart';
import 'package:vibration/vibration.dart';
import 'package:sih_user_app/api.dart';
import 'package:http/http.dart' as http;

import '../../config.dart';


// import 'package:flutter_icons/flutter_icons.dart';
// import 'package:geocoder/geocoder.dart';
// import 'package:image_picker/image_picker.dart';
// import 'package:nanoid/async/nanoid.dart';
// import 'package:permission_handler/permission_handler.dart';
// import 'package:provider/provider.dart';
// import 'package:rounded_loading_button/rounded_loading_button.dart';
// import 'package:platform_alert_dialog/platform_alert_dialog.dart';
// import 'package:vibration/vibration.dart';

class PostComplaintScreen extends StatefulWidget {
  late final String address;

  PostComplaintScreen({required this.address});

  @override
  _PostGrievanceScreenState createState() => _PostGrievanceScreenState();
}

class _PostGrievanceScreenState extends State<PostComplaintScreen> {
  // StepState stepState;
  // AppUser userData;
  Location location = Location();
  final _storage = FirebaseStorage.instance;
  late GeoPoint myGeoPoint;

  late String userName;
  late String userPhoneNumber;

  late String childName;
  late String stateDescription = "";

  late double latitude;
  late double longitude;

  // String landmark;
  // String desc;
  // String name;

  late File imageFile1;

  late String imageUrl1;
  late String sampleUrlImg = "";

  bool apiCall = false;
  String severityValue = "";
  String predictedComplaintCategory = "";

  String? categoryTooltipMessage = "No category predicted yet. Click Predict";

  final severity = ['Low', 'Moderate', 'High', 'Critical'];

  int flag = 0;

  ImagePicker picker = new ImagePicker();

  bool _isPredictButtonLoading = false;

  final RoundedLoadingButtonController _btnController =
      new RoundedLoadingButtonController();

  final RoundedLoadingButtonController _btnSeverityRedressalController =
      new RoundedLoadingButtonController();

  _openCamera(BuildContext context) async {
    var picture = await picker.pickImage(source: ImageSource.camera);
    flag == 1
        ? setState(() {
            imageFile1 = File(picture!.path);
            sampleUrlImg = imageFile1.path.toString();
          })
        : print("");

    Navigator.pop(context);
  }

  _openGallery(BuildContext context) async {
    var picture = await picker.pickImage(source: ImageSource.gallery);
    flag == 1
        ? setState(() {
            imageFile1 = File(picture!.path);
            sampleUrlImg = imageFile1.path.toString();
          })
        : print("");
    Navigator.pop(context);
  }

  fetchMeTheCoordinates() async {
    myGeoPoint = (await location.getMyCurrentLocation())!;
    // print(myGeoPoint.address);
    // print(myGeoPoint.latitude);
    // print(myGeoPoint.longitude);
    setState(() {
      latitude = myGeoPoint.latitude;
      longitude = myGeoPoint.longitude;
    });
  }

  Widget? _showErrorDialog(String errorMessage) {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return PlatformAlertDialog(
            title: Text('Error has occurred'),
            content: SingleChildScrollView(
              child: ListBody(
                children: <Widget>[
                  Text(errorMessage),
                ],
              ),
            ),
            actions: <Widget>[
              PlatformDialogAction(
                child: Text('Cancel'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
              PlatformDialogAction(
                child: Text('Ok'),
                actionType: ActionType.Preferred,
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        });
  }

  // @override
  // void didChangeDependencies() {
  //   super.didChangeDependencies();
  //   userData = Provider.of<UserProvider>(context).userData;
  // }

  loadDefaultImage() {
    setState(() {
      imageFile1 = File('assets/images/upload.png');
    });
  }

  @override
  void initState() {
    super.initState();
    // print(GeolocatorPlatform.instance.checkPermission());
    fetchMeTheCoordinates();
    loadDefaultImage();
  }

  @override
  void dispose() {
    super.dispose();
    // imageFile1 =  null as File;
    severityValue = "";
  }

  String validate(String userName, String userPhoneNumber, String childName,
      String childAddress, String stateDescription) {
    if (userName == null ||
        userPhoneNumber == null ||
        childName == null ||
        childAddress == null ||
        stateDescription == null) {
      return "Fields must not be empty";
    }

    return "pass";
  }

  Future<void> showChoiceDialog(BuildContext context) {
    return showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text("Upload image"),
            content: SingleChildScrollView(
              child: ListBody(
                children: [
                  GestureDetector(
                    onTap: () => _openCamera(context),
                    child: Text('Camera'),
                  ),
                  Padding(
                    padding: EdgeInsets.all(10.0),
                  ),
                  GestureDetector(
                    onTap: () => _openGallery(context),
                    child: Text('Gallery'),
                  ),
                ],
              ),
            ),
          );
        });
  }

  List<Choice> choices = <Choice>[
    Choice(title: 'Your Details', icon: Icons.account_circle_outlined),
    Choice(title: 'Child Details', icon: Icons.child_care_sharp),
    Choice(title: 'Upload', icon: CupertinoIcons.camera),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: choices.length,
        child: Scaffold(
          backgroundColor: Colors.white,
          resizeToAvoidBottomInset: false,
          body: NestedScrollView(
            headerSliverBuilder:
                (BuildContext context, bool innerBoxIsScrolled) {
              return <Widget>[
                new SliverAppBar(
                  leading: IconButton(
                    onPressed: () => Navigator.pushReplacement(
                      context,
                      PageTransition(
                        child: HomeScreen(),
                        type: PageTransitionType.fade,
                      ),
                    ),
                    icon: Icon(
                      Icons.arrow_back,
                      color: Colors.black,
                    ),
                  ),
                  title: Text(
                    'New Complaint',
                    style: TextStyle(color: Colors.black),
                  ),
                  centerTitle: true,
                  backgroundColor: Colors.white,
                  pinned: true,
                  floating: true,
                  bottom: TabBar(
                    isScrollable: false,
                    indicatorColor: Colors.teal,
                    labelColor: Colors.black,
                    tabs: choices.map<Widget>((Choice choice) {
                      return Tab(
                        text: choice.title,
                        icon: Icon(choice.icon),
                      );
                    }).toList(),
                  ),
                ),
              ];
            },
            body: TabBarView(
              children: [
                Column(
                  children: [
                    SizedBox(
                      height: 20.0,
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextFormField(
                        onChanged: (value) {
                          userName = value;
                        },
                        // initialValue: "userData.name",
                        decoration: InputDecoration(
                          floatingLabelBehavior: FloatingLabelBehavior.always,
                          labelText: "Name",
                          labelStyle: TextStyle(
                            fontWeight: FontWeight.w600,
                            color: Colors.blueGrey,
                          ),
                          contentPadding: EdgeInsets.symmetric(
                              horizontal: 25, vertical: 18),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(5),
                            borderSide: BorderSide(
                              color: Color(0xFF757575),
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(5.0),
                            borderSide: BorderSide(
                              color: Color(0xFF757575),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: TextFormField(
                        onChanged: (value) {
                          userPhoneNumber = value;
                        },
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          floatingLabelBehavior: FloatingLabelBehavior.always,
                          labelText: "Phone Number",
                          labelStyle: TextStyle(
                            fontWeight: FontWeight.w600,
                            color: Colors.blueGrey,
                          ),
                          contentPadding: EdgeInsets.symmetric(
                              horizontal: 25, vertical: 18),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(5),
                            borderSide: BorderSide(
                              color: Color(0xFF757575),
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(5.0),
                            borderSide: BorderSide(
                              color: Color(0xFF757575),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                SingleChildScrollView(
                  child: Column(
                    children: [
                      SizedBox(height: 20.0),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: TextFormField(
                          onChanged: (value) {
                            childName = value;
                          },
                          decoration: InputDecoration(
                            floatingLabelBehavior: FloatingLabelBehavior.always,
                            labelText: "Name",
                            labelStyle: TextStyle(
                              fontWeight: FontWeight.w600,
                              color: Colors.blueGrey,
                            ),
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 25, vertical: 18),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(5),
                              borderSide: BorderSide(
                                color: Color(0xFF757575),
                              ),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(5.0),
                              borderSide: BorderSide(
                                color: Color(0xFF757575),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: TextFormField(
                          initialValue:
                              widget.address == null ? "" : widget.address,
                          onChanged: (value) {
                            widget.address = value;
                            // complaintProvider.landmark = value;
                          },
                          decoration: InputDecoration(
                            floatingLabelBehavior: FloatingLabelBehavior.always,
                            labelText: "Enter the landmark",
                            labelStyle: TextStyle(
                              fontWeight: FontWeight.w600,
                              color: Colors.blueGrey,
                            ),
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 25, vertical: 18),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(5),
                              borderSide: BorderSide(color: Color(0xFF757575)),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(5.0),
                              borderSide: BorderSide(
                                color: Color(0xFF757575),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: TextFormField(
                          onChanged: (value) {
                            stateDescription = value;
                          },
                          keyboardType: TextInputType.multiline,
                          maxLines: 6,
                          textCapitalization: TextCapitalization.sentences,
                          decoration: InputDecoration(
                            floatingLabelBehavior: FloatingLabelBehavior.always,
                            labelText: "Describe the state of the child",
                            labelStyle: TextStyle(
                              fontWeight: FontWeight.w600,
                              color: Colors.blueGrey,
                            ),
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 25, vertical: 18),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(5),
                              borderSide: BorderSide(color: Color(0xFF757575)),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(5.0),
                              borderSide: BorderSide(
                                color: Color(0xFF757575),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Container(
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(25),
                                          border: Border.all(
                                              color:
                                                  severityValue.toUpperCase() ==
                                                          "LOW"
                                                      ? Colors.transparent
                                                      : Colors.blueGrey),
                                          color: severityValue.toUpperCase() ==
                                                  "LOW"
                                              ? Colors.green
                                              : Colors.white),
                                      constraints: BoxConstraints(
                                        minWidth:
                                            MediaQuery.of(context).size.width *
                                                0.18,
                                        minHeight:
                                            MediaQuery.of(context).size.height *
                                                0.008,
                                      ),
                                      child: Padding(
                                        padding: const EdgeInsets.all(15.0),
                                        child: Center(
                                          child: Text(
                                            "LOW",
                                            textAlign: TextAlign.center,
                                            style: TextStyle(
                                              color:
                                                  severityValue.toUpperCase() ==
                                                          "LOW"
                                                      ? Colors.white
                                                      : Colors.blueGrey,
                                              letterSpacing: 1.5,
                                              fontWeight: FontWeight.bold,
                                              fontSize: 10.0,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: 5.0),
                                    Container(
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(25),
                                        color: severityValue.toUpperCase() ==
                                                "MODERATE"
                                            ? Colors.yellow
                                            : Colors.white,
                                        border: Border.all(
                                            color:
                                                severityValue.toUpperCase() ==
                                                        "MODERATE"
                                                    ? Colors.transparent
                                                    : Colors.blueGrey),
                                      ),
                                      constraints: BoxConstraints(
                                        minWidth:
                                            MediaQuery.of(context).size.width *
                                                0.1,
                                        minHeight:
                                            MediaQuery.of(context).size.height *
                                                0.008,
                                      ),
                                      child: Padding(
                                        padding: const EdgeInsets.all(15.0),
                                        child: Center(
                                          child: Text(
                                            "MODERATE",
                                            textAlign: TextAlign.center,
                                            style: TextStyle(
                                              color:
                                                  severityValue.toUpperCase() ==
                                                          "MODERATE"
                                                      ? Colors.white
                                                      : Colors.blueGrey,
                                              letterSpacing: 1.5,
                                              fontWeight: FontWeight.bold,
                                              fontSize: 10.0,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(width: 5.0),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Container(
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(25),
                                        color: severityValue.toUpperCase() ==
                                                "HIGH"
                                            ? Colors.redAccent
                                            : Colors.white,
                                        border: Border.all(
                                            color:
                                                severityValue.toUpperCase() ==
                                                        "HIGH"
                                                    ? Colors.transparent
                                                    : Colors.blueGrey),
                                      ),
                                      constraints: BoxConstraints(
                                        minWidth:
                                            MediaQuery.of(context).size.width *
                                                0.17,
                                        minHeight:
                                            MediaQuery.of(context).size.height *
                                                0.008,
                                      ),
                                      child: Padding(
                                        padding: const EdgeInsets.all(15.0),
                                        child: Center(
                                          child: Text(
                                            "HIGH",
                                            textAlign: TextAlign.center,
                                            style: TextStyle(
                                              color:
                                                  severityValue.toUpperCase() ==
                                                          "HIGH"
                                                      ? Colors.white
                                                      : Colors.blueGrey,
                                              letterSpacing: 1.5,
                                              fontWeight: FontWeight.w700,
                                              fontSize: 10.0,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: 5.0),
                                    Container(
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(25),
                                        color: severityValue.toUpperCase() ==
                                                "CRITICAL"
                                            ? Colors.red
                                            : Colors.white,
                                        border: Border.all(
                                            color:
                                                severityValue.toUpperCase() ==
                                                        "CRITICAL"
                                                    ? Colors.transparent
                                                    : Colors.blueGrey),
                                      ),
                                      constraints: BoxConstraints(
                                        minWidth:
                                            MediaQuery.of(context).size.width *
                                                0.16,
                                        minHeight:
                                            MediaQuery.of(context).size.height *
                                                0.008,
                                      ),
                                      child: Padding(
                                        padding: const EdgeInsets.all(15.0),
                                        child: Center(
                                          child: Text(
                                            "CRITICAL",
                                            textAlign: TextAlign.center,
                                            style: TextStyle(
                                              color:
                                                  severityValue.toUpperCase() ==
                                                          "CRITICAL"
                                                      ? Colors.white
                                                      : Colors.blueGrey,
                                              letterSpacing: 1.5,
                                              fontWeight: FontWeight.w700,
                                              fontSize: 10.0,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            RoundedLoadingButton(
                                child: Padding(
                                  padding: const EdgeInsets.fromLTRB(15.0,8.0,15.0,8.0),
                                  child: Text(
                                    'Severity Redressal Value',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 13.0,
                                    ),
                                  ),
                                ),
                                color: Colors.teal,
                                controller: _btnSeverityRedressalController,
                                width: 60.0,
                                borderRadius: 20,
                                onPressed: () async {
                                  setState(() {
                                    apiCall = true;
                                  });
                                  getSeverityLevel();
                                  Future.delayed(Duration(seconds: 3), () {
                                    _btnSeverityRedressalController.reset();
                                  });
                                }),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              "Category Classification",
                              style: TextStyle(
                                fontSize: 22.0,
                              )
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(10.0,0.0,10.0,20.0),
                        child: Container(
                          constraints: BoxConstraints(
                            minWidth: MediaQuery.of(context).size.width,
                          ),
                          child: Text(
                              "AI powered category classification enables us to effectively categorize your complaint leading to faster and efficient case tracking.",
                              style: TextStyle(
                                  fontSize: 12.5,
                                  color: Colors.grey,
                                  fontFamily: "NotoSans"
                              )
                          ),
                        )
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Container(
                          constraints: BoxConstraints(
                            minWidth: MediaQuery.of(context).size.width * 0.7,
                          ),
                          height: 58,
                          decoration: BoxDecoration(color: Colors.white),
                          child: InputDecorator(
                            decoration: InputDecoration(
                              labelText: 'Predicted Category',
                              labelStyle:
                              TextStyle(fontWeight: FontWeight.w500),
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(5.0),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "$predictedComplaintCategory",
                                  style: TextStyle(fontSize: 16),
                                ),
                                Tooltip(
                                  child: const IconButton(
                                    padding: EdgeInsets.all(0),
                                    icon: Icon(
                                        Icons.info
                                    ),
                                    onPressed: null,
                                  ),
                                  message: "$categoryTooltipMessage",
                                  padding: EdgeInsets.all(10),
                                  showDuration: const Duration(seconds: 10),
                                  textStyle: const TextStyle(color: Colors.white),
                                  preferBelow: false,
                                  verticalOffset: 20,
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: ElevatedButton.icon(
                          icon: _isPredictButtonLoading
                              ? SizedBox(
                            child: CircularProgressIndicator(
                              color: Colors.white,
                            ),
                            height: 20.0,
                            width: 20.0,
                          )
                              : SizedBox(
                            height: 0,
                            width: 0,
                          ),
                          label: Text(
                            _isPredictButtonLoading
                                ? 'Loading...'
                                : 'Predict Category',
                            style: const TextStyle(
                              fontSize: 13,
                              letterSpacing: 0.5,
                            ),
                          ),
                          onPressed: () {
                            setState(() {
                              _isPredictButtonLoading = true;
                            });
                            predictComplaintCategory();
                          },
                          style: ButtonStyle(
                            fixedSize: MaterialStateProperty.all<Size>(new Size(MediaQuery.of(context).size.width*0.60, 50.0)),
                              backgroundColor:
                                  MaterialStateProperty.all<Color>(Colors.teal),
                              padding: MaterialStateProperty.all<
                                      EdgeInsetsGeometry>(
                                  EdgeInsets.fromLTRB(10.0, 15.0, 10.0, 15.0))),
                        ),
                      ),
                      // Padding(
                      //   padding: const EdgeInsets.all(10.0),
                      //   child: Container(
                      //     decoration: BoxDecoration(
                      //         border: Border.all(color: Colors.black, width: 0.5),
                      //         borderRadius: BorderRadius.circular(5.0)
                      //     ),
                      //     child: Padding(
                      //       padding: const EdgeInsets.only(left: 11.0, top:3.0,right: 11.0,bottom: 3.0),
                      //       child: DropdownButtonHideUnderline(
                      //         child: DropdownButton<String>(
                      //           value: severityValue,
                      //           iconSize: 33,
                      //           icon: Icon(Icons.arrow_drop_down, color: Colors.black),
                      //           isExpanded: true,
                      //           items: severity.map(buildMenuItem).toList(),
                      //           onChanged: (value) => setState(() {
                      //             this.severityValue = value as String;
                      //           }),
                      //         ),
                      //       ),
                      //     ),
                      //   ),
                      // ),
                      // DropDown for Severity
                    ],
                  ),
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SizedBox(height: 15.0),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            GestureDetector(
                              onTap: () {
                                setState(() {
                                  flag = 1;
                                });
                                showChoiceDialog(context);
                              },
                              child: Container(
                                constraints: BoxConstraints(
                                    maxHeight: 340.0, maxWidth: 265.0),
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.circular(10),
                                  border: Border.all(
                                    color: Colors.teal,
                                    width: 4.0,
                                  ),
                                ),
                                child: Padding(
                                  padding: const EdgeInsets.all(5.0),
                                  child: Container(
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    child: Center(
                                      child: sampleUrlImg == ""
                                          ? Image(
                                              image: AssetImage(
                                                'assets/images/upload.png',
                                              ),
                                              height: 340.0,
                                              width: 265.0,
                                            )
                                          : Image.file(
                                              imageFile1,
                                              height: 340.0,
                                              width: 265.0,
                                              fit: BoxFit.fill,
                                            ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SizedBox(height: 50.0),
                        RoundedLoadingButton(
                            child: Text(
                              'Post Complaint',
                              style: TextStyle(color: Colors.white),
                            ),
                            controller: _btnController,
                            width: 250.0,
                            onPressed: () async {
                              String result = "";
                              try {
                                result = validate(
                                    userName,
                                    userPhoneNumber,
                                    childName,
                                    widget.address,
                                    stateDescription);
                              } catch (e) {
                                print("");
                              }

                              print("RESULT IS $result");
                              String complaintID = await nanoid(20);
                              if (result != 'pass') {
                                _showErrorDialog(result);
                                _btnController.reset();
                              } else {
                                var permissionStatus =
                                    await Permission.photos.status;
                                if (permissionStatus.isGranted) {
                                  var file1 = File(imageFile1.path);
                                  if (imageFile1 != null) {
                                    var snapshot1 = await _storage
                                        .ref()
                                        .child('$complaintID/file1')
                                        .putFile(file1);
                                    var downloadUrl1 =
                                        await snapshot1.ref.getDownloadURL();
                                    setState(() {
                                      imageUrl1 = downloadUrl1.toString();
                                    });
                                    print("IMAGE URL $imageUrl1");
                                    if (imageUrl1 == "") {
                                      setState(() {
                                        _showErrorDialog(
                                            "Uhh! Please try again later.");
                                      });
                                    }
                                  } else {
                                    print('No Path Received');
                                  }
                                } else {
                                  setState(() {
                                    _showErrorDialog(
                                        "Please grant the permission to upload images.");
                                  });
                                }

                                Vibration.vibrate();

                                APIModel apiModel = new APIModel(
                                    userName,
                                    userPhoneNumber,
                                    childName,
                                    widget.address,
                                    latitude.toString(),
                                    longitude.toString(),
                                    severityValue,
                                    stateDescription,
                                    imageUrl1);
                                apiModel.postComplaintToDB();
                                _btnController.success();

                                Future.delayed(Duration(seconds: 1), () {
                                  CoolAlert.show(
                                      context: context,
                                      type: CoolAlertType.success,
                                      text:
                                          "Your complaint has been posted successfully. You can keep its track in the check status section.",
                                      onConfirmBtnTap: () {
                                        Navigator.pushReplacement(
                                            context,
                                            MaterialPageRoute(
                                              builder: (context) =>
                                                  HomeScreen(),
                                            ));
                                      });
                                  // Navigator.pushReplacement(
                                  //     context,
                                  //     MaterialPageRoute(
                                  //       builder: (context) => SuccessScreen(),
                                  //     ));
                                });
                              }
                            }),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  DropdownMenuItem<String> buildMenuItem(String item) => DropdownMenuItem(
        value: item,
        child: Text(
          item,
          style: TextStyle(fontWeight: FontWeight.w400, fontSize: 17),
        ),
      );

  Widget getProperWidget() {
    if (apiCall)
      return Padding(
        padding: const EdgeInsets.all(8.0),
        child: new CircularProgressIndicator(),
      );
    else
      return new Container();
  }

  void getSeverityLevel() async {
    String stateDescription = this.stateDescription;
    String baseURL = "child-abuse-sih.herokuapp.com";
    String predictEndpoint = "/predict";
    // , {"sentence":"$stateDescription"}
    try {
      var uri =
          Uri.http(baseURL, predictEndpoint, {'sentence': '$stateDescription'});
      print(uri.toString());

      final response = await http.get(uri);

      print(response.statusCode);

      Map<String, dynamic> map = jsonDecode(response.body);

      String severity = map["severity"];
      print(severity);

      setState(() {
        severityValue = severity;
        _btnSeverityRedressalController.success();
      });
    } catch (e) {
      setState(() {
        severityValue = "Moderate";
        _btnSeverityRedressalController.success();
      });
    }
  }

  void predictComplaintCategory() async {
    String baseURL = "10.0.2.2:5000";
    String predictEndpoint = "/classify";
    String stateDescription = this.stateDescription;
    Map<String, String> headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Charset': 'utf-8'
    };

    var uri =
        Uri.http(baseURL, predictEndpoint, {"query": "$stateDescription"});
    print(uri);

    try {
      final response = await http.post(uri, headers: headers);
      print(response.statusCode);
      Map<String, dynamic> map = jsonDecode(response.body);
      double max_value = 0;
      String? category = "";
      String? tooltipMessage = "";
      Map<String, dynamic> predictions = map["predictions"];
      predictions.forEach((key, value) {
        print(key + ":" + value);
        var val = double.parse(value);
        if (val > max_value) {
          max_value = val;
          category = key;
        }
      });
      tooltipMessage = TOOLTIP_INFO[category];
      category = CATEGORIES_MAP[category];
      setState(() {
        _isPredictButtonLoading = false;
        this.categoryTooltipMessage = tooltipMessage;
        this.predictedComplaintCategory = category!;
      });
    } catch (e) {
      print(e);
      setState(() {
        _isPredictButtonLoading = false;
        this.categoryTooltipMessage = TOOLTIP_INFO["slavery"];
        this.predictedComplaintCategory = "Slavery";
      });
    }
  }
}


