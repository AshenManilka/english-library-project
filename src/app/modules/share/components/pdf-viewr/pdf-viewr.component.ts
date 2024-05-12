import { Component, ViewChild, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { PdfViewerComponent, PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PdfLinkService } from '../../services/pdf-link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-viewr',
  templateUrl: './pdf-viewr.component.html',
  styleUrls: ['./pdf-viewr.component.scss']
})
export class PdfViewrComponent {

  @Input() pdfSrc!: string;
  @Input() paid!: boolean;

  @ViewChild(PdfViewerComponent) private pdfComponent!: PdfViewerComponent;
  @ViewChild('pdfViewerContainer') pdfViewerContainer!: ElementRef;

  totalPagesRendered = 0;
  currentPage = 0;

  showAlert: boolean = false;
  overlay: boolean = true;

  constructor (
    private router : Router
  ){
  }

  ngAfterViewInit() {
    // Focus the PDF viewer container when the component is initialized
    this.pdfViewerContainer.nativeElement.focus();
  }

  onPageRendered(event: CustomEvent) {
    this.totalPagesRendered++;
    // console.log("Page Rendered:", this.totalPagesRendered);

    // Check if 5 pages have been rendered
    if (this.totalPagesRendered === 6) {
      // console.log("Reached 6 pages rendered!");
      // You can perform any actions here after 5 pages are rendered
    }

    // Get the current page number from the pdfViewer object
    this.currentPage = this.pdfComponent.pdfViewer.currentPageNumber;
    // console.log("Current Page:", this.currentPage);

    // Check if the current page is the 5th page
    if (this.currentPage >= 6) {
      // console.log("Scrolled to 5th page!");

      // console.log('paid:  ' + this.paid);

      if (!this.paid) {
        this.showAlert = true;
        setTimeout(() => {
          // Navigate to another page after 30 seconds
          this.router.navigate(['/client/home']);
        }, 15000); // 30000 milliseconds = 30 seconds
      }
      // You can perform any actions here when the user scrolls to the 5th page
    }
  }

  // Prevent right-clicking, screenshots, downloads, and saving
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Prevent keyboard keys from doing specific actions
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    // Enable arrow up and down keys
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      // Handle arrow up and down key actions here
      // Example: Scroll up or down the document
    }
    else{
      event.preventDefault();
    }
  }
}
