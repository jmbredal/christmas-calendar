import { Component, OnInit } from '@angular/core';
import { DayComponent } from '../day/day.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    days = [1, 2, 3, 4, 5, 6, 7, 8,
            9, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24]

    // days = [1];

    constructor() { }

    ngOnInit() {
        console.log('The calendar has', this.days.length, 'days');
    }

}
