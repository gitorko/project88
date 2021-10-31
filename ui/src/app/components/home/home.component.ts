import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { ClarityIcons, trashIcon, userIcon } from '@cds/core/icon';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: []
})
export class HomeComponent implements OnInit {

    customers: Customer[] = [];
    customer: Customer = new Customer();
    flashMsg = '';

    currentTime = new Date();
    constructor(private restService: RestService, private router: Router) {
        ClarityIcons.addIcons(trashIcon);
    }

    ngOnInit(): void {
        this.getCustomers();
        this.flashMsg = '';
    }

    getCustomers(): void {
        this.customer = new Customer();
        this.restService.getCustomers().subscribe(data => {
            this.customers = data;
        });
    }

    saveCustomer(): void {
        this.restService.saveCustomer(this.customer)
            .subscribe(data => {
                this.flashMsg = 'Saved customer: ' + this.customer.firstName;
                this.getCustomers();
            });
    }

    deleteCustomer(customer: Customer): void {
        console.log('delete: ' + customer.id);
        this.restService.deleteCustomer(customer.id)
            .subscribe(data => {
                this.flashMsg = 'Deleted customer: ' + customer.id;
                this.getCustomers();
            });
    }
}
