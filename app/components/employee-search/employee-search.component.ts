import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { EmployeeSearchService } from './employee-search.service';
import { Employee } from '../employee-detail/employee';

@Component({
    moduleId: module.id,
    selector: 'employee-search',
    templateUrl: './employee-search.component.html',
    styleUrls: ['./employee-search.component.css'],
    providers: [EmployeeSearchService]
})

export class EmployeeSearchComponent implements OnInit {
    employees: Observable<Employee[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private employeeSearchService: EmployeeSearchService,
        private router: Router){}

    ngOnInit(): void {
        this.employees = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.employeeSearchService.search(term) : 
                                        Observable.of<Employee[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Employee[]>([]);
            });
    }

    gotoDetail(employee: Employee): void {
        let link =['/detail', employee.id];
        this.router.navigate(link);
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }
}