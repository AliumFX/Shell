import { Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse, SetApiResponse } from './api.interfaces';
import { Environment } from './../env/env.interfaces';
import { AX_ENVIRONMENT } from './../env/env.tokens';
import { Observable } from 'rxjs';

/**
 * Provides an implementation of an API service that conforms to a standard restful Alium API
 */
export class DataApiService<T> {
  /**
   * The base path for the API
   */
  protected basePath: string;

  /**
   *
   * Creates a new data API service
   * @param http The HTTP client
   * @param env The environment configuration
   * @param basePath The base path relative to the API base URL
   */
  constructor(
    protected http: HttpClient,
    @Inject(AX_ENVIRONMENT) protected env: Environment,
    basePath: string
  ) {
    this.basePath = `${env.baseUrl}${env.baseUrl.endsWith('/') ? '' : '/'}${
      basePath.startsWith('/') ? basePath.substr(1) : basePath
    }`;
  }

  /**
   * Gets the resource by its ID
   * @param id
   */
  getById(id: number): Promise<ApiResponse<T>> {
    return this.promise(this.http.get<ApiResponse<T>>(`${this.basePath}/`));
  }

  private promise(observable: Observable<ApiResponse<T>>) {
    return observable.toPromise().catch((error: HttpErrorResponse) => {
      if (error.error) {
        return error.error as ApiResponse<T>;
      }
    });
  }

  private promiseSet(observable: Observable<SetApiResponse<T>>) {
    return observable.toPromise().catch((error: HttpErrorResponse) => {
      if (error.error) {
        return error.error as SetApiResponse<T>;
      }
    });
  }
}
