import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate';

import { HomePage } from '../pages/home/home';
import { AppLanguages } from '../providers/app-languages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, private translate: TranslateService,
    private appLanguages: AppLanguages) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.configNG2();
    });
  }

  private configNG2() {

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    //Detect current Language
    var userLang = navigator.language.split('-')[0];
    userLang=(this.appLanguages.getLanguages().indexOf(userLang)>-1)?userLang:'en'

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(userLang);
  }
}
