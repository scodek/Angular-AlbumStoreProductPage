import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductService {

  private _albumUrl : string = "../assets/album.json";

  constructor(private _http:Http) { }

  getAlbum(id:number) : Observable<any>{
    return this._http.get(this._albumUrl);
  }

}
