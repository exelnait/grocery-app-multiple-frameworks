import 'package:flutter/material.dart';
import 'package:grocery_list_flutter/components/AddNewItem.dart';
import 'package:grocery_list_flutter/components/ListItem.dart';
import 'package:grocery_list_flutter/models/Item.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<Item> _items = [];

  void onDelete(String id) {
    setState(() {
      _items.removeWhere((item) => item.id == id);
    });
  }

  void onAdd(String name) {
    setState(() {
      _items.add(Item(id: DateTime.now().toString(), name: name));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
                itemCount: _items.length,
                itemBuilder: (context, index) => ListItem(
                    key: Key(_items[index].id),
                    item: _items[index],
                    onDelete: onDelete)),
          ),
          AddNewItem(onAdd: onAdd,)
        ],
      ),
    );
  }
}
