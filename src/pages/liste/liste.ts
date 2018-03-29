import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {

  jobs = [
    'Job 1',
    'Job 2',
    'Job 3',
    'Job 4',
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListePage');
  }

}
