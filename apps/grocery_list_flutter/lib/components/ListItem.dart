import 'package:flutter/material.dart';
import 'package:grocery_list_flutter/models/Item.dart';

class ListItem extends StatelessWidget {
  final Item item;
  final Function(String id) onDelete;

  const ListItem({Key? key, required this.item, required this.onDelete}):
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(item.name),
      trailing:
      IconButton(
        onPressed: () {
          onDelete(item.id);
        },
        icon: const Icon(Icons.remove_circle),
      ),
    );
  }
}
