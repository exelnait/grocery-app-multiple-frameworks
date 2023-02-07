import 'package:flutter/material.dart';

class AddNewItem extends StatelessWidget {
  AddNewItem({Key? key, required this.onAdd}) : super(key: key);
  final Function(String id) onAdd;
  final TextEditingController _textController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          children: [
            IconButton(onPressed: () {
              onAdd(_textController.text);
            }, icon: const Icon(Icons.add)),
            Expanded(
              child: TextField(
                controller: _textController,
                onSubmitted: (value) {
                  onAdd(_textController.text);
                  FocusScope.of(context).previousFocus();
                },
                decoration: const InputDecoration(
                  hintText: 'add a new item',
                ),
              ),
            ),
          ],
        ),
      );
  }
}
