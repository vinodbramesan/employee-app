import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'
import { Employee } from './Employee'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'emp-list',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./app.component.css', './style.css']
})
export class EmployeeListComponent implements OnInit {
    emplist: Employee[];
    
    closeResult: string;
    delIcon = "/assets/delete-icon.png"
    newIcon = "/assets/New.jpg";
    constructor(private _empservice: EmployeeService,
        private modalService: NgbModal) { }
    ngOnInit(): void {
        this._empservice.getEmployees().subscribe(res => this.emplist = res);
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}