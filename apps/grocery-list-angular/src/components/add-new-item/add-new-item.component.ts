import {Component, EventEmitter, Output} from '@angular/core';
import {KeyboardEvent} from "react";

@Component({
    selector: 'add-new-item',
    templateUrl: './add-new-item.component.html',
    styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent {
    @Output() onAdd = new EventEmitter<string>();
}
