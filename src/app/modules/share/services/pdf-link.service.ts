import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PdfLinkService {
  private pdfSrc: string  = 'pdfSrc';
  private paid: string ='false';

  constructor(private cookieService: CookieService) {}

  setPdfLink(pdfSrc: string, paid: boolean): void {
    this.cookieService.set(this.pdfSrc, pdfSrc);
    this.cookieService.set(this.paid, paid.toString());
  }

  getPdfLink():string|null{
    return this.cookieService.get(this.pdfSrc)||null;
  }
  getPdfPid():boolean|null{
    const paidValue  = this.cookieService.get(this.paid);
    return paidValue ? paidValue === 'true' : null;
  }

  removeLink():void{
    this.cookieService.delete(this.pdfSrc);
    this.cookieService.delete(this.paid);
  }

}
