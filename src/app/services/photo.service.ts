import { BaseDataService } from './base.data.service';
import { PhotoModel } from '../models/photo.model';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService extends BaseDataService<PhotoModel> {
    constructor(protected apiService: ApiService) {
        super(apiService, environment.imageApiPath);
    }
}