import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  slides = [
    {
      title: "Welcome to STEMANIKA",
      description: "This is your first time to use this application, please enjoy your time!",
      image: "assets/imgs/logo.png",
      color: "#4BC14B",
    },
    {
      title: "What is STEMANIKA Apps?",
      description: "<b>STEMANIKA Apps</b> is an application that enables all stakeholder of SMKN 1 Majalengka to get in touch with.",
      image: "assets/imgs/logo.png",
      color: "#CCCCCC",
    },
  ];
  
  constructor(public navCtrl: NavController) {

  }

}
