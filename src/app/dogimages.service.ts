import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ImagesResponse {
    data: string[];
}

@Injectable()
export class DogimagesService {

    images = [];

    constructor(private http: HttpClient) {
        this.getImages();
    }

    getImages() {
        const url = 'https://www.reddit.com/r/puppies/.json';
        this.http.get<ImagesResponse>(url).subscribe(response => {
            response.data.children.map(
                child => {
                    this.images.push(child.data.preview.images[0].source.url);
                }
            );
        });

    }

    getImage(index) {
        return this.images[index];
    }

}
