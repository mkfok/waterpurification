import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html'
})
export class MonitorPage {

  private tanks$: Observable<any>;

  constructor(public navCtrl: NavController, private afDb: AngularFireDatabase) {
    this.tanks$ = afDb.list('tanks').valueChanges();
  }

}
