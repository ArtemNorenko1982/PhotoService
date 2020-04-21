import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoModel } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
    selector: 'app-photos',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

    title: string;
    photos: PhotoModel[] = [];

    constructor(private router: Router,
                private dataService: PhotoService) { }

    ngOnInit() {
        this.title = 'Photo list';
        this.getPhotos();
    }

    getPhotos() {
        this.dataService.getAll().then(photos => this.photos = photos)
            .catch(err => { console.log('Fetch error'); });
    }
}