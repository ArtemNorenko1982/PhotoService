import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        baseUrl = environment.baseUrl;
     }

    private setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        // const headers = new HttpHeaders(headersConfig);
        // headers.append('Access-Control-Allow-Origin', 'https://localhost:5001');
        return new HttpHeaders(headersConfig);
    }

    private formatErrors(error: HttpErrorResponse) {
        if (error.status === 401) {
            // window.location.replace('/account/login');
        }
        if (error.status === 403) {
            window.location.replace('/');
        }
        return Observable.throw(error.error.massage);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${this.baseUrl}${path}`, { headers: this.setHeaders(), params: params })
        .pipe(map((response: Response) => response), catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${this.baseUrl}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .pipe(map((response: Response) => response), catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${this.baseUrl}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .pipe(map((response: Response) => response), catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}${path}`, { headers: this.setHeaders() })
        .pipe(map((response: Response) => response), catchError(this.formatErrors));
    }
}
