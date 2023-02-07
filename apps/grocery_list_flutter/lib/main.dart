import 'package:flutter/material.dart';
import 'package:grocery_list_flutter/components/RequiresAuth.dart';
import 'package:grocery_list_flutter/pages/HomePage.dart';
import 'package:grocery_list_flutter/pages/LoginPage.dart';
import 'package:grocery_list_flutter/providers/AuthProvider.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<AuthProvider>(
        create: (_) => AuthProvider(),
    child: MaterialApp(
      title: 'Grocery List App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      routes: {
        '/': (context) => RequiredAuth(child: HomePage()),
        '/login': (context) => LoginPage(),
      },
    ));
  }
}