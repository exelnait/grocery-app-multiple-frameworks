import { Component } from '@angular/core';

import {IItem} from "../../models/Item";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  items: IItem[] = [];

  trackById(index: number, item: IItem) {
    return item.id
  }
  onDelete(id: string) {
    this.items = this.items.filter(i => i.id !== id);
  }
  onAdd(name: string) {
    this.items.push({id: Date.now().toString(), name});
  }
}
