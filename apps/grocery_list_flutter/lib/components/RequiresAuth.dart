import 'package:flutter/material.dart';
import 'package:grocery_list_flutter/providers/AuthProvider.dart';
import 'package:provider/provider.dart';

class RequiredAuth extends StatefulWidget {
  final Widget child;

  const RequiredAuth({Key? key, required this.child}) : super(key: key);

  @override
  _RequiredAuthState createState() => _RequiredAuthState();
}

class _RequiredAuthState extends State<RequiredAuth> {
  Future<bool> _checkAuth() async {
    AuthProvider authProvider = Provider.of(context);
    print(authProvider.user);
    return authProvider.user != null;
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<bool>(
      future: _checkAuth(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          if (snapshot.data == true) {
            return widget.child;
          } else {
            Future.delayed(Duration.zero, () {
              Navigator.of(context).pushReplacementNamed('/login');
            });
            return Container();
          }
        } else {
          return Container();
        }
      },
    );
  }
}
