import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IItem} from "../../models/Item";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item!: IItem;

  @Output() onDelete = new EventEmitter();
}
