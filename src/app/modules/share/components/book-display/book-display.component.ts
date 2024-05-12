import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PdfLinkService } from '../../services/pdf-link.service';



@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent {
  @Input() books!: any[];
  @Input() categoryTitle!: string;
  @Input() categoryDescription!:string
  @Input() paid!:boolean;

  constructor(
    private pdfLinkService:PdfLinkService,
    private router: Router
  ){

  }


  viewBook(pdfLink:string , paid:boolean){
     // Set your PDF link and paid status before navigating
    this.pdfLinkService.setPdfLink(pdfLink,this.paid);
    // console.log('pdf link :'+pdfLink );
    // Navigate to the BookComponent
    this.router.navigate(['/book']);
  }
}
