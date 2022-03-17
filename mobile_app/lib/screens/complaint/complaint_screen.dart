import 'dart:async';
import 'dart:ffi';
import 'dart:io';
// import 'package:cool_alert/cool_alert.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:geopoint/geopoint.dart';
import 'package:image_picker/image_picker.dart';
import 'package:platform_alert_dialog/platform_alert_dialog.dart';
import 'package:rounded_loading_button/rounded_loading_button.dart';
import 'package:sih_user_app/models/Choice.dart';
import 'package:sih_user_app/components/location.dart';
import 'package:geopoint_location/geopoint_location.dart';

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

  // late String address;
  late double latitude;
  late double longitude;

  int flag = 0;

  ImagePicker picker = new ImagePicker();

  final RoundedLoadingButtonController _btnController =
  new RoundedLoadingButtonController();

  // _openCamera(BuildContext context) async {
  //   var picture = await picker.pickImage(source: ImageSource.camera);
  //   flag == 1
  //       ? setState(() {
  //     imageFile1 = File(picture!.path);
  //   }) : print("");
  //
  //   Navigator.pop(context);
  // }

  // _openGallery(BuildContext context) async {
  //   var picture = await picker.pickImage(source: ImageSource.gallery);
  //   flag == 1
  //       ? setState(() {
  //     imageFile1 = File(picture!.path);
  //   }) : print("");
  //
  //   Navigator.pop(context);
  // }

  fetchMeTheCoordinates() async {
    myGeoPoint = (await location.getMyCurrentLocation())!;
    print(myGeoPoint.address);
    print(myGeoPoint.latitude);
    print(myGeoPoint.longitude);
    setState(() {
      latitude = myGeoPoint.latitude;
      longitude  = myGeoPoint.longitude;
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

  @override
  void initState() {
    super.initState();
    // print(GeolocatorPlatform.instance.checkPermission());
    fetchMeTheCoordinates();
  }

  @override
  void dispose() {
    super.dispose();
    // imageFile1 =  null as File;
  }

  // String landmark;
  // String desc;
  // String name;
  //
  // late File imageFile1 = File('assets/images/indian-emblem.png');
  // File imageFile2;
  // File imageFile3;
  // File imageFile4;
  //
  late String imageUrl1;
  // String imageUrl2;
  // String imageUrl3;
  // String imageUrl4;

  _uploadImage() async {
    // var permissionStatus = await Permission.photos.status;
    //
    // if (permissionStatus.isGranted) {
    //   var file1 = File(imageFile1.path);
    //   var file2 = File(imageFile2.path);
    //   var file3 = File(imageFile3.path);
    //   var file4 = File(imageFile4.path);
    //
    //   if (imageFile1 != null &&
    //       imageFile2 != null &&
    //       imageFile3 != null &&
    //       imageFile4 != null) {
    //     var snapshot1 =
    //         await _storage.ref().child('${userData.uid}/file1').putFile(file1);
    //     var downloadUrl1 = snapshot1.ref.getDownloadURL().toString();
    //
    //     var snapshot2 =
    //         await _storage.ref().child('${userData.uid}/file2').putFile(file2);
    //     var downloadUrl2 = snapshot2.ref.getDownloadURL().toString();
    //
    //     var snapshot3 =
    //         await _storage.ref().child('${userData.uid}/file3').putFile(file3);
    //     var downloadUrl3 = snapshot3.ref.getDownloadURL().toString();
    //
    //     var snapshot4 =
    //         await _storage.ref().child('${userData.uid}/file4').putFile(file4);
    //     var downloadUrl4 = snapshot4.ref.getDownloadURL().toString();
    //
    //     // var downloadUrl1 = await _storage.ref().getDownloadURL();
    //     // var downloadUrl2 = await _storage.ref().getDownloadURL();
    //     // var downloadUrl3 = await _storage.ref().getDownloadURL();
    //     // var downloadUrl4 = await _storage.ref().getDownloadURL();
    //
    //     setState(() {
    //       imageUrl1 = downloadUrl1;
    //       imageUrl2 = downloadUrl2;
    //       imageUrl3 = downloadUrl3;
    //       imageUrl4 = downloadUrl4;
    //     });
    //     print("IMAGE URL $imageUrl1");
    //     print("IMAGE URL $imageUrl2");
    //     print("IMAGE URL $imageUrl3");
    //     print("IMAGE URL $imageUrl4");
    //   } else {
    //     print('No Path Received');
    //   }
    // } else {
    //   setState(() {
    //     _showErrorDialog("Please grant permissions ot upload images.");
    //   });
    // }
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
                    // onTap: () => _openCamera(context),
                    child: Text('Camera'),
                  ),
                  Padding(
                    padding: EdgeInsets.all(10.0),
                  ),
                  GestureDetector(
                    // onTap: () => _openGallery(context),
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
    // final successAlert = _buildButton(
    //   onTap: () {
        // CoolAlert.show(
        //     context: context,
        //     type: CoolAlertType.success,
        //     text:
        //     "Your complaint has been posted successfully. You can keep its track in check status section. ",
        //     onConfirmBtnTap: () {
        //       Navigator.pushReplacement(
        //           context,
        //           MaterialPageRoute(
        //             builder: (context) => CheckStatusScreen(),
        //           ));
        //     });
      // },
    //   text: "Success",
    //   color: Colors.green,
    // );
    // final complaintProvider =
    // Provider.of<ComplaintProvider>(context, listen: false);
    return MaterialApp(
      home: DefaultTabController(
        length: choices.length,
        child: Scaffold(
          resizeToAvoidBottomInset: false,
          appBar: AppBar(
            leading: IconButton(
              onPressed: () => Navigator.pop(context),
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
                        contentPadding:
                        EdgeInsets.symmetric(horizontal: 25, vertical: 18),
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
                        contentPadding:
                        EdgeInsets.symmetric(horizontal: 25, vertical: 18),
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
                  // Padding(
                  //   padding: const EdgeInsets.all(10.0),
                  //   child: TextFormField(
                  //     initialValue: widget.address == null ? "" : widget.address,
                  //     decoration: InputDecoration(
                  //       floatingLabelBehavior: FloatingLabelBehavior.always,
                  //       labelText: "Address",
                  //       labelStyle: TextStyle(
                  //         fontWeight: FontWeight.w600,
                  //         color: Colors.blueGrey,
                  //       ),
                  //       contentPadding:
                  //       EdgeInsets.symmetric(horizontal: 25, vertical: 18),
                  //       enabledBorder: OutlineInputBorder(
                  //         borderRadius: BorderRadius.circular(5),
                  //         borderSide: BorderSide(
                  //           color: Color(0xFF757575),
                  //         ),
                  //       ),
                  //       focusedBorder: OutlineInputBorder(
                  //         borderRadius: BorderRadius.circular(5.0),
                  //         borderSide: BorderSide(
                  //           color: Color(0xFF757575),
                  //         ),
                  //       ),
                  //     ),
                  //   ),
                  // ),
                ],
              ),
              Column(
                children: [
                  SizedBox(height: 20.0),
                  Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: TextFormField(
                      decoration: InputDecoration(
                        floatingLabelBehavior: FloatingLabelBehavior.always,
                        labelText: "Name",
                        labelStyle: TextStyle(
                          fontWeight: FontWeight.w600,
                          color: Colors.blueGrey,
                        ),
                        contentPadding:
                        EdgeInsets.symmetric(horizontal: 25, vertical: 18),
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
                      initialValue: widget.address == null ? "" : widget.address,
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
                        contentPadding:
                        EdgeInsets.symmetric(horizontal: 25, vertical: 18),
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
                        // complaintProvider.desc = value;
                      },
                      keyboardType: TextInputType.multiline,
                      maxLines: 10,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: InputDecoration(
                        floatingLabelBehavior: FloatingLabelBehavior.always,
                        labelText: "Describe your problem",
                        labelStyle: TextStyle(
                          fontWeight: FontWeight.w600,
                          color: Colors.blueGrey,
                        ),
                        contentPadding:
                        EdgeInsets.symmetric(horizontal: 25, vertical: 18),
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
                ],
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
                              constraints: BoxConstraints(maxHeight: 200.0),
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(200),
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
                                    child: Image.asset(
                                      'assets/images/upload.png',
                                      height: 200,
                                    ),
                                  ),
                                  // child: Center(
                                  //   child: imageFile1 == null
                                  //       ? Image.asset(
                                  //     'assets/images/indian-emblem.png',
                                  //     height: 200,
                                  //   )
                                  //       : Image.file(
                                  //     imageFile1,
                                  //     height: 200.0,
                                  //     fit: BoxFit.cover,
                                  //   ),
                                  // ),
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
                        onPressed: () async {
                          // String complaintID = await nanoid(20);
                          // complaintProvider.name = userData.name;
                          // complaintProvider.user_email = userData.email;
                          // complaintProvider.contact = userData.contact;
                          // complaintProvider.comp_user_id = userData.uid;
                          // complaintProvider.area_of_comp = widget.aoc;
                          // complaintProvider.date = DateTime.now().toString();
                          // complaintProvider.id = complaintID;
                          // complaintProvider.location = locality;
                          // complaintProvider.status = "POSTED";
                          //
                          // final result =
                          // Provider.of<ComplaintProvider>(context, listen: false)
                          //     .validate();
                          // print("RESULT IS $result");

                          // if (result != 'pass') {
                          //   _showErrorDialog(result);
                          //   _btnController.reset();
                          // } else {
                          //   var permissionStatus = await Permission.photos.status;
                          //
                          //   if (permissionStatus.isGranted) {
                          //     var file1 = File(imageFile1.path);
                          //     var file2 = File(imageFile2.path);
                          //     var file3 = File(imageFile3.path);
                          //     var file4 = File(imageFile4.path);
                          //
                          //     if (imageFile1 != null &&
                          //         imageFile2 != null &&
                          //         imageFile3 != null &&
                          //         imageFile4 != null) {
                          //       var snapshot1 = await _storage
                          //           .ref()
                          //           .child('${userData.uid}/$complaintID/file1')
                          //           .putFile(file1);
                          //       var downloadUrl1 =
                          //       await snapshot1.ref.getDownloadURL();
                          //
                          //       var snapshot2 = await _storage
                          //           .ref()
                          //           .child('${userData.uid}/$complaintID/file2')
                          //           .putFile(file2);
                          //       var downloadUrl2 =
                          //       await snapshot2.ref.getDownloadURL();
                          //
                          //       var snapshot3 = await _storage
                          //           .ref()
                          //           .child('${userData.uid}/$complaintID/file3')
                          //           .putFile(file3);
                          //       var downloadUrl3 =
                          //       await snapshot3.ref.getDownloadURL();
                          //
                          //       var snapshot4 = await _storage
                          //           .ref()
                          //           .child('${userData.uid}/$complaintID/file4')
                          //           .putFile(file4);
                          //       var downloadUrl4 =
                          //       await snapshot4.ref.getDownloadURL();
                          //
                          //       // var downloadUrl1 = await _storage.ref().getDownloadURL();
                          //       // var downloadUrl2 = await _storage.ref().getDownloadURL();
                          //       // var downloadUrl3 = await _storage.ref().getDownloadURL();
                          //       // var downloadUrl4 = await _storage.ref().getDownloadURL();
                          //
                          //       setState(() {
                          //         imageUrl1 = downloadUrl1.toString();
                          //         imageUrl2 = downloadUrl2.toString();
                          //         imageUrl3 = downloadUrl3.toString();
                          //         imageUrl4 = downloadUrl4.toString();
                          //       });
                          //
                          //       print("********IMAGE URL $imageUrl1");
                          //       print("********IMAGE URL $imageUrl2");
                          //       print("********IMAGE URL $imageUrl3");
                          //       print("********IMAGE URL $imageUrl4");
                          //     } else {
                          //       print('No Path Received');
                          //     }
                          //   } else {
                          //     setState(() {
                          //       _showErrorDialog(
                          //           "Please grant the permission to upload images.");
                          //     });
                          //   }
                          //   complaintProvider.imageUrl1 = imageUrl1;
                          //   complaintProvider.imageUrl2 = imageUrl2;
                          //   complaintProvider.imageUrl3 = imageUrl3;
                          //   complaintProvider.imageUrl4 = imageUrl4;
                          //   Vibration.vibrate();
                          //   Provider.of<ComplaintProvider>(context, listen: false)
                          //       .postComplaintToDB();
                          _btnController.success();

                          // Future.delayed(Duration(seconds: 1), () {
                          //   CoolAlert.show(
                          //       context: context,
                          //       type: CoolAlertType.success,
                          //       text:
                          //       "Your complaint has been posted successfully. You can keep its track in the check status section.",
                          //       onConfirmBtnTap: () {
                          //         Navigator.pushReplacement(
                          //             context,
                          //             MaterialPageRoute(
                          //               builder: (context) => CheckStatusScreen(),
                          //             ));
                          //       });
                          //   // Navigator.pushReplacement(
                          //   //     context,
                          //   //     MaterialPageRoute(
                          //   //       builder: (context) => SuccessScreen(),
                          //   //     ));
                          // });
                        },
                        width: 250.0,
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );


  // Widget _buildButton({VoidCallback onTap, String text, Color color}) {
  //   return Padding(
  //     padding: const EdgeInsets.only(bottom: 10.0),
  //     child: MaterialButton(
  //       color: color,
  //       minWidth: double.infinity,
  //       shape:
  //       RoundedRectangleBorder(borderRadius: BorderRadius.circular(30.0)),
  //       onPressed: onTap,
  //       child: Padding(
  //         padding: const EdgeInsets.symmetric(vertical: 15.0),
  //         child: Text(
  //           text,
  //           style: TextStyle(
  //             color: Colors.white,
  //           ),
  //         ),
  //       ),
  //     ),
  //   );
  // }
}}