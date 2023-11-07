import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('typewriterAnimation', [
      transition(':enter', [
        style({ width: '0' }),
        animate('{{ speed }}', style({ width: '*' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'TailApplication';
  imagePath: string = './assets/Images/Profile-bg.png'; 
  starlordpath: string = './assets/Images/starLord.png';
  Rocketpath: string = './assets/Images/Rocket.png'; 
  Gamorapath: string = './assets/Images/Gamora.png'; 
}
