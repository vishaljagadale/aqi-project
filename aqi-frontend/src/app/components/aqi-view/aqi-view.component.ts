import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AqiService } from '../../services/aqi.service';

@Component({
  selector: 'app-aqi-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aqi-view.component.html',
  styleUrls: ['./aqi-view.component.css']
})
export class AqiViewComponent {
  city: string = '';
  aqiData: any = null;
  loading: boolean = false;
  error: string = '';

  constructor(private aqiService: AqiService) {}

  async fetchAqi() {
    if (!this.city.trim()) return;
    this.loading = true;
    this.error = '';
    this.aqiData = null;

    try {
      const data = await this.aqiService.getAqi(this.city);
      if (data.status === 'ok') {
        this.aqiData = data;
      } else {
        this.error = 'City not found or API error.';
      }
    } catch (err) {
      this.error = 'Error fetching AQI data.';
    } finally {
      this.loading = false;
    }
  }
}
