import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TailApplication';
  imagePath: string = './assets/Images/groot.png'; 
  starlordpath: string = './assets/Images/starLord.png';
  Rocketpath: string = './assets/Images/Rocket.png'; 
  Gamorapath: string = './assets/Images/Gamora.png'; 
}
