import { Component, OnInit, Input } from '@angular/core';
import { DogimagesService } from '../dogimages.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

    @Input() dayNumber: number;
    contentClass = 'closed';
    imageUrl = '';

    constructor(private dogImages: DogimagesService) {
    }

    ngOnInit() {
        console.log('Initialized day', this.dayNumber);

    }

    showImage() {
        this.contentClass = 'opened';
        this.imageUrl = this.dogImages.getImage(this.dayNumber);
    }
}
