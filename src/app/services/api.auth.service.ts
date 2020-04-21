import { Injectable } from '@angular/core';
import { AuthApiResponseModel } from '../models/auth.api.response.model';
import { AuthStaticModel } from '../models/auth.static.model';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiAuthService<TModel extends AuthApiResponseModel> {
    constructor(private apiService: ApiService) {}

    apiResponseData: AuthApiResponseModel = new AuthApiResponseModel();

    logIn(): AuthApiResponseModel {
        const content = JSON.stringify(new AuthStaticModel());
        const headers = new Headers({'Content-Type': 'application/json'});

        this.apiService.post(environment.authApiPath, content)
        .subscribe((data: AuthApiResponseModel) => this.apiResponseData = data, err => console.error(err));
        return this.apiResponseData;
    }
}
