import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { DrawerComponent } from './modules/shared/components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawerComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
