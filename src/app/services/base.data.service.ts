import { BaseModel } from '../models/base.model';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseDataService<TModel extends BaseModel> {
    constructor(protected apiService: ApiService, protected apiSource: string) { }

    getAll(): Promise<TModel[]> {
        return this.apiService.get(`api/${this.apiSource}`).toPromise<TModel[]>();
    }

    getRecordById(id: number): Promise<TModel> {
        return this.apiService.get(`api/${this.apiSource}/${id}`).toPromise<TModel>();
    }

    saveRecord(record: TModel): Promise<TModel> {
        if (record.id > 0) {
            return this.apiService.put(`api/${this.apiSource}/${record.id}`, record).toPromise<TModel>();
        } else {
            return this.apiService.post(`api/${this.apiSource}`, record).toPromise<TModel>();
        }
    }

    deleteRecordById(id: number): Promise<TModel> {
        return this.apiService.delete(`api/${this.apiSource}/${id}`).toPromise<TModel>();
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'ASP.NET Core server error');
    }
}