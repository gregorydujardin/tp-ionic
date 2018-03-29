import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

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

  jobs;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loadingCtrl: LoadingController) {
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({
      content: "Chargement en cours..."
    });
    loading.present();
    this.apiProvider.getJobs().then(jobs => {
      this.jobs = jobs;
      loading.dismiss();
    }).catch(error => {
      console.error(error);
    });
  }

  ionViewDidLoad() {
    this.fetchJobs();
  }

}
