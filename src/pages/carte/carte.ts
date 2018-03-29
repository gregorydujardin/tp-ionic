import { Component } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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

  lat: number;
  lng: number;

  jobs;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public apiProvider: ApiProvider, public loadingCtrl: LoadingController, private geolocation: Geolocation) {
  }

  fetchJobs() {
    let loading = this.loadingCtrl.create({
      content: "Chargement en cours..."
    });
    loading.present();
    
    this.apiProvider.getJobs().then((jobs : any[]) => {
      this.jobs = jobs.map(job => ({
        ...job,
        latitude: Number(job.latitude),
        longitude: Number(job.longitude)
      }));
      loading.dismiss();
    }).catch(error => {
      console.error(error);
    });
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
     }).catch((error) => {
       console.log('Impossible de récupérer la position courante', error);
     });
  }

  ionViewDidLoad() {
    this.getLocation();
    this.fetchJobs();
  }

}
