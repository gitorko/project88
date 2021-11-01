import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../models/customer';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {ClarityIcons, trashIcon} from '@cds/core/icon';
import {AlertComponent} from "../alert/alert.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  customers: Customer[] = [];
  customer: Customer = new Customer();
  currentTime = '';
  // @ts-ignore
  @ViewChild(AlertComponent, {static: true}) private alert: AlertComponent;

  constructor(private restService: RestService, private router: Router) {
    ClarityIcons.addIcons(trashIcon);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customer = new Customer();
    this.restService.getTime().subscribe(data => {
      this.currentTime = data;
    });
    this.restService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  saveCustomer(): void {
    this.restService.saveCustomer(this.customer)
      .subscribe(data => {
        this.alert.showSuccess('Saved customer: ' + this.customer.firstName);
        this.getCustomers();
      }, error => {
        this.alert.showError('Forbidden!');
        console.log(error);
      });
  }

  deleteCustomer(customer: Customer): void {
    console.log('delete: ' + customer.id);
    this.restService.deleteCustomer(customer.id)
      .subscribe(data => {
        this.alert.showSuccess('Deleted customer: ' + customer.id);
        this.getCustomers();
      }, error => {
        this.alert.showError('Forbidden!');
        console.log(error);
      });
  }
}
