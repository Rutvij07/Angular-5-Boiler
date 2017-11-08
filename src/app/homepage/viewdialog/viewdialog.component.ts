import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-viewdialog',
  templateUrl: './viewdialog.component.html',
  styleUrls: ['./viewdialog.component.scss']
})
export class ViewdialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ViewdialogComponent>) { }

  ngOnInit() {
  }

  answerYes(){
          this.dialogRef.close();

  }
}
