import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DogimagesService } from './dogimages.service';

import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';


@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        DayComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [DogimagesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
