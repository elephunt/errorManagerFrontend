import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comments, ErrorModel} from './errorModel';
@Injectable()
export class ErrorService {

  private REST_API_SERVER = 'http://ec2-18-218-8-27.us-east-2.compute.amazonaws.com/api';

  constructor(private http: HttpClient) { }


  public createError(errorModel: ErrorModel){
    return this.http.post<ErrorModel>(this.REST_API_SERVER + '/error', errorModel);
  }

  public sendGetRequest(){
    return this.http.get<ErrorModel[]>(this.REST_API_SERVER + '/error');
  }

  public search(query: string){
    return this.http.get<ErrorModel[]>(this.REST_API_SERVER + '/error?reason=' + query);
  }

  public vote(commentId: string, action: string){
    return this.http.put<Comments[]>(this.REST_API_SERVER + '/' + action + '/' + commentId, {});
  }


}
