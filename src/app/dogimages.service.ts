import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class DogimagesService {

    request: Observable<Object>;

    constructor(private http: HttpClient) {
    }

    getImage(index) {
        const url = 'https://www.reddit.com/r/puppies/.json';

        if (!this.request) {
            this.request = this.http.get(url).publishReplay(1).refCount();
        }

        return this.request.map(response => {
            const children = response['data']['children'];
            const images = children.map(
                child => child.data.preview.images[0].source.url
            );
            return images[index];
        });

    }


}
