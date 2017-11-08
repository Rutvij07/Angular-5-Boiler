import { Component, OnInit } from '@angular/core';
// import { MdDialog } from '@angular/material';
import { ViewdialogComponent } from '../viewdialog/viewdialog.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // constructor(public dialog:MdDialog) { }

  ngOnInit() {
  }
  openDialog() {
    console.log('h')
  // let dialogRef = this.dialog.open(ViewdialogComponent);
}

}
