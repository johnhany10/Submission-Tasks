import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor( private _HttpClient: HttpClient ) { }



 AddFavoriteItem(ListingId : string ):Observable<any>
 {
    const userId = localStorage.getItem('userId')
    return this._HttpClient.post('https://localhost:7200/api/Favorites' , {

      "listingId":ListingId ,
      "userId" : userId

    })
 }


 GetFavoriteItems() : Observable<any>
 {
    const userId = localStorage.getItem('userId')
  return this._HttpClient.get(`https://localhost:7200/api/Favorites/${userId}`)
 }


 DeleteFavoriteItem(ListingId : string ):Observable<any>
 {
    const userId = localStorage.getItem('userId')
  return this._HttpClient.delete(`https://localhost:7200/api/Favorites/${userId}/${ListingId}`)
 }



}
