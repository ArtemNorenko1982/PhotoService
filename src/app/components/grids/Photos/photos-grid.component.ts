import { Component, Input, OnInit } from '@angular/core';
import { PhotoModel } from '../../../models/photo.model';

@Component({ 
  selector: 'app-photo-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.css']
})
export class PhotosGridComponent implements OnInit {

  @Input() photos: PhotoModel[] = [];

  ngOnInit() {

  }
}
