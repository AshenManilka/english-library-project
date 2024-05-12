import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { PdfLinkService } from 'src/app/modules/share/services/pdf-link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private pdfLinkService:PdfLinkService,
  private router: Router,
  public dialogRef: MatDialogRef<ViewBookComponent>,
  ) {}



  viewBook(pdfLink:string ){
    // Set your PDF link and paid status before navigating
   this.pdfLinkService.setPdfLink(pdfLink, true);
   // console.log('pdf link :'+pdfLink );
   // Navigate to the BookComponent
   this.router.navigate(['/book']);
   this.dialogRef.close();
 }
}
