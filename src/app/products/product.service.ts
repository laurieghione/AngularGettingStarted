import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('all : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    errorMessage =
      err.error instanceof ErrorEvent
        ? `An error occurred : ${err.error.message}`
        : `Server returned code : ${err.status}, error message is :  ${err.message}`;
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
