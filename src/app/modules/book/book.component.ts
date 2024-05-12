
import { Location } from '@angular/common';
import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfLinkService } from '../share/services/pdf-link.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements  OnInit    {

  pdfSrc!: string ;
  paid!: boolean ;

  constructor(
    private location: Location,
    private router: Router,
    private pdfLinkService:PdfLinkService,
    private title:Title
  ) {

  }
  ngOnInit(): void {
    this.title.setTitle("Book")
    const pdfPid = this.pdfLinkService.getPdfPid();
    this.paid = pdfPid !== null ? pdfPid : false;

    const pdfLink = this.pdfLinkService.getPdfLink();
    this.pdfSrc = pdfLink !== null ? pdfLink : '';
  }
  goBack(): void {
    this.location.back();
    this.pdfLinkService.removeLink();
  }
  reloadComponent(): void {
    location.reload();
  }
}


