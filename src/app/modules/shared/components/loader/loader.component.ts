import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
    loading$: Observable<boolean>;
  constructor(private loaderService: LoaderService) {
    this.loading$ = this.loaderService.loading$;
  }
}