import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });

    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0)
      console.error('There is an issue with the client or network:\n', error);
    else
      console.error('Server-Side Error:\n', error);

    return throwError(() => new Error('Cannot retrieve data from server. Please try again.'));
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-needed-for-authorization');

    this.http.post('assets/wishes.json', wish, options);
  }
}
