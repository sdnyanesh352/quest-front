import { Component } from '@angular/core';
import {moduleData} from './reg-modules';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  isActive:boolean;
  modData = moduleData;
  panelOpenState = false;
  displayedColumns:string[]=['icon','pluginName','isActive']

}
