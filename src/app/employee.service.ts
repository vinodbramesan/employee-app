import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private employeeUrl = 'http://localhost:33269/api/Employee';  // URL to web API
    constructor(private _http: Http) { }

    //Server Methods
    getEmployees(): Observable<Employee[]> {
        return this._http.get(this.employeeUrl)
            .map(this.extractData)
            .catch(this.handleError);

    }
    getEmployeeByID(id: number): Observable<Employee> {
        return this._http.get(this.employeeUrl + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    saveEmployee(emp: Employee): Observable<Employee> {
        return this._http.post(this.employeeUrl, emp)
            .map(this.extractData)
            ._catch(this.handleError);
    }
    delEmployee(id: number): Observable<Employee> {
        return this._http.get(this.employeeUrl + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //Helper Methods
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}