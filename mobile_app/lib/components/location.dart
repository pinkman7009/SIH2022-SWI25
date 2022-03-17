import 'dart:async';
import 'package:flutter/material.dart';
import 'package:geocode/geocode.dart';
import 'package:geopoint/geopoint.dart';

import 'package:geopoint_location/geopoint_location.dart';


class Location {
  late double latitude;
  late double longitude;
  late List<Address> myLocation;
  late Address myLocalityAddress;

  Future<GeoPoint?> getMyCurrentLocation() async {
    try {
      // Position position = await Geolocator.getCurrentPosition();
      GeoPoint geoPoint = await geoPointFromLocation(
          name: "Current position", withAddress: true);

      // Position pos = await GeolocatorPlatform.instance.getCurrentPosition();
      // latitude = pos.latitude;
      // longitude = pos.longitude;
      //
      // myLocation = await GeoCode(). .local
      //     .findAddressesFromCoordinates(Coordinates(latitude, longitude));
      // print(myLocation.first);
      return geoPoint;
    } catch (e) {
      print("Error in fetching location is $e");
    }
    return null;
  }
}