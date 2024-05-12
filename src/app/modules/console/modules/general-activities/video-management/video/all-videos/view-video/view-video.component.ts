import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick() {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
