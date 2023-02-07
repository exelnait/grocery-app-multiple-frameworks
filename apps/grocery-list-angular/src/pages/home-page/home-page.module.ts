import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

import {HomePageComponent} from "./home-page.component";
import {ListItemComponent} from "../../components/list-item/list-item.component";
import {AddNewItemComponent} from "../../components/add-new-item/add-new-item.component";

@NgModule({
  declarations: [
    HomePageComponent,
    ListItemComponent,
    AddNewItemComponent
  ],
  exports: [
    HomePageComponent,
    ListItemComponent,
    AddNewItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class HomePageModule { }
