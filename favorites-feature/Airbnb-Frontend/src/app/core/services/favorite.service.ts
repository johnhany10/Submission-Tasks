import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {



  constructor( private _HttpClient: HttpClient , private _AuthService:AuthService) { }

  private get userId(): string {
    return this._AuthService.getAccessTokenClaim('http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier');
  }


 AddFavoriteItem(ListingId : string ):Observable<any>
 {
    return this._HttpClient.post('https://localhost:7200/api/Favorites' , {

      "listingId":ListingId ,
      "userId" : this.userId

    })
 }


 GetFavoriteItems() : Observable<any>
 {
  return this._HttpClient.get(`https://localhost:7200/api/Favorites/${this.userId}`)
 }


 DeleteFavoriteItem(ListingId : string ):Observable<any>
 {
  return this._HttpClient.delete(`https://localhost:7200/api/Favorites/${this.userId}/${ListingId}`)
 }



}
