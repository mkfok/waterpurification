import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs'

@Component({
  selector: 'page-controls',
  templateUrl: 'controls.html'
})

export class ControlsPage {

  private dictionary = ["Primary", "Secondary", "Tertiary", "Quaternary", "Quinary", "Senary"]
  private toggleSubject: Subject<any> = new Subject();
  private controls : object = {
    pump: {
      toggles: [
        { on: true },
        { on: true }
      ]
    },
    uv: {
      toggles: [
        { on: true },
        { on: true },
        { on: true }
      ]
    },
    valve: {
      toggles: [
        { on: true },
        { on: true },
        { on: true },
        { on: true },
        { on: true }
      ]
    }

  }

  constructor(
    public navCtrl: NavController,
    private afDb: AngularFireDatabase
  ) {
    afDb.list('controls').valueChanges().subscribe(controls => {
      controls.forEach(({description, toggles}) => {
        this.controls[description].toggles = toggles;
      })
    })

    this.toggleSubject.subscribe( () => {
      Object.keys(this.controls).forEach( (key, i) => {
        this.controls[key].toggles.forEach(({on}, j) => {
          afDb.list(`controls/${i}/toggles`).update(`${j}`, {on})
        })
      })
    })
  }

  private update() {
    this.toggleSubject.next();
  }
}
