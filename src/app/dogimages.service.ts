import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Listing {
    data: {
        children: Child[];
    };
}

interface Child {
    data: {
        preview: {
            images: Image[]
        }
    }
}

interface Image {
    source: {
        url: string
    }
}

@Injectable()
export class DogimagesService {

    images = [];

    constructor(private http: HttpClient) {
        this.getImages();
    }

    getImages() {
        const url = 'https://www.reddit.com/r/puppies/.json';
        this.http.get<Listing>(url).subscribe(response => {
            console.log(response);
            this.images = response.data.children.map(
                child => child.data.preview.images[0].source.url
            );
        });

    }

    getImage(index) {
        return this.images[index];
    }

}
