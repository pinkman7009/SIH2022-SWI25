import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:getwidget/components/search_bar/gf_search_bar.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sih_user_app/components/calls_and_messages.dart';
import 'package:sih_user_app/screens/home_screen.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:sih_user_app/components/service_locator.dart';
import 'package:sih_user_app/components/helpline.dart';

class HelpScreen extends StatefulWidget {
  @override
  _HelpScreenState createState() => _HelpScreenState();
}

class _HelpScreenState extends State<HelpScreen> {
  late List<String> helpline_services = Helpline().helpline_services;
  late List<String> helpline_numbers = Helpline().helpline_numbers;
  late List<String> helpline_images = Helpline().helpline_images;

  int index = 1;

  final CallsAndMessagesService _service = locator<CallsAndMessagesService>();

  _launchURL(url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 2.0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_outlined),
          color: Colors.black,
          onPressed: () => Navigator.popAndPushNamed(context, '/dashboard'),
        ),
        title: Text(
          'Indian Helpline Services',
          style: TextStyle(
            color: Colors.black,
          ),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.adb),
            color: Colors.black,
            onPressed: () {
              print(helpline_images.length);
              print(helpline_services.length);
              print(helpline_numbers.length);
            },
          )
        ],
        bottom: PreferredSize(
          preferredSize: Size(0.0, MediaQuery.of(context).size.height * 0.11),
          child: GFSearchBar(
            searchList: helpline_services,
            searchQueryBuilder: (query, list) {
              return list
                  .where((item) =>
                  item.toString().toLowerCase().contains(query.toLowerCase()))
                  .toList();
            },
            overlaySearchListItemBuilder: (item) {
              return Container(
                padding: const EdgeInsets.all(8),
                child: Text(
                  item.toString(),
                  style: const TextStyle(fontSize: 16),
                ),
              );
            },
            onItemSelected: (item) {
              setState(() {
                print('$item');
              });
            },
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: index,
        onTap: (index) {
          if (index == 0) {
            Navigator.push(
              context,
              PageTransition(
                child: HomeScreen(),
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
        child: ListView.builder(
          shrinkWrap: true,
          physics: NeverScrollableScrollPhysics(),
          itemCount: 27,
          itemBuilder: (context, index) {
            return Padding(
              padding: const EdgeInsets.only(top: 8.0),
              child: ListTile(
                tileColor: Colors.white,
                leading: Image.asset(
                  "assets/helpline/${helpline_images[index]}",
                  width: MediaQuery.of(context).size.width * 0.13,
                  height: MediaQuery.of(context).size.height * 0.13,
                ),
                title: Text(
                  '${helpline_services[index]}',
                ),
                subtitle: Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Text('${helpline_numbers[index]}'),
                ),
                trailing: OutlinedButton(
                  onPressed: () {
                    _service.call(helpline_numbers[index]);
                  },
                  style: OutlinedButton.styleFrom(
                    shape: CircleBorder(),
                    side: BorderSide(
                      style: BorderStyle.solid,
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: Icon(
                      Icons.phone,
                      color: Colors.teal,
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
