import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {GoalModel} from './goalmodel';


@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html'
})
export class GoalsPage {



  constructor(public navCtrl: NavController, public httpClient:HttpClient) {

    let jsonObject = [{goalName: "Swimming", goalTargetValue: 100, goalTargetUnit: "Rounds", goalDependencyValue: 50, goalDependencyUnit: 50}];
    this.handleBackendRequest(jsonObject);
    /*
    let databaseGoalsObserver = this.httpClient.get('http://swapi.co/api/films');
    databaseGoalsObserver
      .subscribe(data => {
        this.handleBackendRequest(data);

      })
*/


  }

  private handleBackendRequest(jsonObject:Array<object>) {

  }
}
