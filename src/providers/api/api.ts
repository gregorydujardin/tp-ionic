import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface Job {
  latitude: String;
  longitude: String;
  name: String;
}

type Response = Job[]

@Injectable()
export class ApiProvider {

  private jobs: Response;

  constructor(public http: HttpClient) {
    this.jobs = null;
  }

  getJobs() {
    return new Promise((resolve, reject) => {
      if (this.jobs) {
        resolve(this.jobs);
      }
      this.http.get('https://mobile-api-jobs.herokuapp.com/api/jobs').subscribe((data: Response) => {
        resolve(data.map(job => ({
          ...job,
          latitude: Number(job.latitude),
          longitude: Number(job.longitude)
        })))
      }, err => {
        reject(err);
      });
    });
  }

}
