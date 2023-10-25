import { Subscriber } from './../model/subscriber.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class SubscriberService {
    private subscriberUrl = 'http://localhost:8081/';

    constructor(private http: HttpClient) {}
    
    getAllSubscribers(): Observable<Subscriber[]> {
        return this.http.get<Subscriber[]>(this.subscriberUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    createSubscriber(subscriber: Subscriber): Observable<Object> {
        return this.http.post(this.subscriberUrl, subscriber).pipe(
            catchError(this.handleError)
        );
    }

    updateSubscriber(subscriber: Subscriber): Observable<Object> {
        return this.http.put(this.subscriberUrl + subscriber.id, subscriber).pipe(
            catchError(this.handleError)
        );
    }

    deleteSubscriber(subscriber: Subscriber): Observable<Object> {
        return this.http.delete(this.subscriberUrl + subscriber.id).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}