import { Component, OnInit, ViewChild } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;

  public wavesPosition: number = 0;
  private wavesDifference: number = 100;

  constructor() {

  }

  ngOnInit() {  
      
     
  }
  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      console.log(this.wavesDifference);
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }
}
