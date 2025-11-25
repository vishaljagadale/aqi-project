import { Component } from '@angular/core';
import { AqiViewComponent } from './components/aqi-view/aqi-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AqiViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aqi-frontend';
}
