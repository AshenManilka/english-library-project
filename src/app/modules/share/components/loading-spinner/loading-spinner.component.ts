import { Component,Input,OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit  {
   isLoading: boolean =true;
  constructor(private loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading) => {
      this.isLoading = loading;
      // console.log('=========== is loading in loading component :'+loading +' =========');

    });
  }
}
