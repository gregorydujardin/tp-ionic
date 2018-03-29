import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

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

  jobs

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public loadingCtrl: LoadingController) {
    this.fetchJobs();
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({
      content: "Chargement en cours..."
    });
    loading.present();
    this.httpClient.get('https://mobile-api-jobs.herokuapp.com/api/jobs').subscribe(data => {
      loading.dismiss();
      this.jobs = data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListePage');
  }

}
