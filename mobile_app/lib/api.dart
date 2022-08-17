import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class APIModel{
  final String userName;
  late final String userPhoneNumber;
  final String childName;
  final String childLocation;
  final String latitude;
  final String longitude;
  final String severity;
  final String stateDescription;
  final String photoURL;

  APIModel(this.userName, this.userPhoneNumber, this.childName,
      this.childLocation, this.latitude, this.longitude, this.severity, this.stateDescription, this.photoURL);

  Future<String> getSeverityLevel() async {
    String baseURL = "child-abuse-sih.herokuapp.com";
    String predictEndpoint = "/predict";
    String stateDescription = this.stateDescription;

    var uri = Uri.http(baseURL, predictEndpoint, {"sentence":"$stateDescription"});
    final response = await http.get(uri);
    print(response.statusCode);

    Map<String, dynamic> map = jsonDecode(response.body);

    String severity = map["severity"];
    return severity;
  }

  postComplaintToDB() async {
    String baseURL = "cltssih.herokuapp.com";
    String reportEndpoint = "/api/report/";
    // Uri url = Uri.https(baseURL, reportEndpoint);

    // const url = Uri("https://cltssih.herokuapp.com/api/report/");
    var uri = Uri.http(baseURL, reportEndpoint);

    Map<String, String> headers = {"Content-type": "application/json"};

    DateTime dateTime = DateTime.now();

    String json =
        '{"reportersName":"$userName","reportersNumber":"$userPhoneNumber","reportingLocation":"$childLocation","description":"$stateDescription","photo":"$photoURL", "severity":"$severity", "name":"$childName", "lat":"$latitude", "long":"$longitude"}';

    final response = await http.post(uri, body: json, headers: headers);
    if (response.statusCode == 200) {
      print("RESPONSE IS $response");
      print("POSTING COMPLAINT STATUS CODE ${response.statusCode}");
      return response.statusCode;
    }
    print("POSTING COMPLAINT STATUS CODE ${response.statusCode}");
  }
}