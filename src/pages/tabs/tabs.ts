import { Component } from '@angular/core';
import { MonitorPage } from '../monitor/monitor';
import { ControlsPage } from '../controls/controls';
import { RecordsPage } from '../records/records';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = HomePage;
  tab1Root = MonitorPage;
  tab2Root = ControlsPage;
  tab3Root = RecordsPage;

  constructor() {

  }
}
