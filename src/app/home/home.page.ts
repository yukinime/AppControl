import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  apiUrl = environment.apiRepl;

  constructor(private http: HttpClient) {}

  sendCommand(command: string) {
    const payload = { command: command };

    this.http.post(this.apiUrl, payload)
      .subscribe(response => {
        console.log('Response from API:', response);
        // Handle response as needed
      }, error => {
        console.error('Error sending command:', error);
        // Handle error as needed
      });
  }
}