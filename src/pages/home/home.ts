import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ProfilePage } from '../profile/profile';
import { JadwalPage } from '../jadwal/jadwal';
import { NilaiPage } from '../nilai/nilai';
import { RapotPage } from '../rapot/rapot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  shortcuts = [
    {
      title: "Profile",
      icon: "person",
      color: "#E47500",
      page: ProfilePage,
    },
    {
      title: "Jadwal",
      icon: "calendar",
      color: "#5AD863",
      page: JadwalPage,
    },
    {
      title: "Nilai",
      icon: "bookmarks",
      color: "#3DBEC9",
      page: NilaiPage,
    },
    {
      title: "Rapot",
      icon: "analytics",
      color: "#AD5CE9",
      page: RapotPage,
    },
  ];

  firstTime : any;

  constructor(public navCtrl: NavController, public appCtrl: App) {
      if(!localStorage.getItem('userData')){
          this.firstTime = true;
      }
  }

  skip(){
      this.firstTime = false;
  }

  logout(){
        // Remove API token 
        localStorage.clear();
        this.appCtrl.getRootNav().setRoot( WelcomePage );
  }

  shortcut_item(page){
    // console.log(page);
      this.navCtrl.push(page);
  }

}
