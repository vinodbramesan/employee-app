import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from './employee.service'
import { Employee } from './Employee';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'emp-edit',
    templateUrl: './employeeedit.component.html',
    styleUrls: ['./app.component.css', './style.css']
})
export class EmployeeEditComponent implements OnInit {
    @Input() employee: Employee;
    empid: number;
    constructor(
        private empService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            this.empid = params['id'];
        });
        if (this.empid > 0) {
            this.empService.getEmployeeByID(this.empid).subscribe(r => this.employee = r);
        }else{
            this.employee=new Employee();
        }
    }

    onBack(): void {
        this.location.back();
    }
    Save(): void {
        this.empService.saveEmployee(this.employee).subscribe(emp => this.employee = emp);
    }
}