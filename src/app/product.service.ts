import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Album } from './album';



@Injectable()
export class ProductService {

  private _albumUrl : string = "../assets/album.json";

  constructor(private _http:Http) { }

  getAlbum(id:number) : Album{
    return this._http.get(this._albumUrl).map((response) => response.json());
  }

}
