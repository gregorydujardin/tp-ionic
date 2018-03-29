import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the CartePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carte',
  templateUrl: 'carte.html',
})
export class CartePage {

  lat: number = 51.678418;
  lng: number = 7.809007;

  jobs;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public httpClient: HttpClient, public loadingCtrl: LoadingController) {
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({
      content: "Chargement en cours..."
    });
    loading.present();
    this.httpClient.get('https://mobile-api-jobs.herokuapp.com/api/jobs').subscribe(data => {
      loading.dismiss();
      this.jobs = data.map(job => ({
        ...job,
        latitude: Number(job.latitude),
        longitude: Number(job.longitude)
      }))
    })
  }

  ionViewDidLoad() {
    this.fetchJobs();
  }

}
