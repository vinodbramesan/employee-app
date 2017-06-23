import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from './employee.service'
import { Employee } from './Employee';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'emp-view',
    templateUrl: './employeeview.component.html',
    styleUrls: ['./app.component.css', './style.css']
})
export class EmployeeViewComponent implements OnInit {
    @Input() employee: Employee;
    constructor(
        private empService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.empService.getEmployeeByID(+params['id']))
            .subscribe(emp => this.employee = emp);
    }
onBack():void{
    this.location.back();
}
}