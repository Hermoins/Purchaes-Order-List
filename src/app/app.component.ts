import { Component } from '@angular/core';
import configData from 'src/configData';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configData: any = configData; 
}
