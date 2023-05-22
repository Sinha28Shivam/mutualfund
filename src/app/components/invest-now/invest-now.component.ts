import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-invest-now',
  templateUrl: './invest-now.component.html',
  styleUrls: ['./invest-now.component.css']
})
export class InvestNowComponent {
  options: AnimationOptions = {
    path: '../../../assets/99611-moneypaul.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
