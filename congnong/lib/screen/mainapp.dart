import 'package:congnong/widget/noteview.dart';
import 'package:congnong/widget/setting.dart';
import 'package:congnong/widget/socialview.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:congnong/appconstant.dart';
import 'package:congnong/widget/home.dart';

class MainApp extends ConsumerStatefulWidget {
  MainApp({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() {
    return _MainAppState();
  }
}

class _MainAppState extends ConsumerState<MainApp> {
  int selectedIndex = 0;
  var wid;

  @override
  void initState() {
    super.initState();
    wid = [Home(), NoteView(), SocialView(), SettingView()];
  }

  void onTapNav(int index) {
    setState(() {
      selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentView;
    currentView = wid[selectedIndex];
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.edit_calendar_outlined),
            label: 'Notes',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.supervisor_account_sharp),
            label: 'Social',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          )
        ],
        currentIndex: selectedIndex,
        selectedItemColor: buttonBack,
        unselectedItemColor: Colors.black,
        onTap: onTapNav,
      ),
      body: currentView,
    );
  }
}
