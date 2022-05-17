import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../services/travel-app.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-pickers-combo',
  templateUrl: './pickers-combo.component.html',
  styleUrls: ['./pickers-combo.component.scss']
})
export class PickersComboComponent implements OnInit {
  public travelAppArticlesSource1: any = null;
  public northwindEmployees: any = null;

  constructor(
    private travelAppService: TravelAppService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.travelAppService.getData('Articles Source 1').subscribe(data => this.travelAppArticlesSource1 = data);
  }
}
