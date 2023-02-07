import 'dart:async';

import 'package:flutter/cupertino.dart';

import '../models/User.dart';

class AuthProvider with ChangeNotifier {
  User? user;
  Future<User> signIn(String email, String password) async {
    user = User(id: 'test', email: email);
    notifyListeners();
    return Future.value(user);
  }
  Future<void> signOut() async {
    user = null;
    notifyListeners();
    return Future.value();
  }
}