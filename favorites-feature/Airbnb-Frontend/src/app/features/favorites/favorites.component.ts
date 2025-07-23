import { Component, OnInit, output } from '@angular/core';
import { FavoriteService } from '../../core/services/favorite.service';
import { ListingCardComponent } from "../listing-card/listing-card.component";
import { Listing } from '../../core/models/Listing';
import { ListingsService } from '../../core/services/listings.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorites',
  standalone:true,
  imports: [ListingCardComponent , CommonModule] ,
templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {


  isLoading:boolean =false
  listingIds : string[] =[]
  favoriteCards :Listing[]=[] ;
    






  constructor( private _FavoriteService: FavoriteService , private _ListingsService:ListingsService ){}

  ngOnInit(): void {


        this.getAllFavorites();

      }



      getAllFavorites(){
        this.isLoading=true
        this._FavoriteService.GetFavoriteItems().subscribe({
          next:(res)=>{
              this.listingIds = res.map((item:any)=>item.listingId)
              console.log(this.listingIds)

            this._ListingsService.getListings().subscribe({
              next:(res)=>{
                  this.favoriteCards = res.filter(L=>this.listingIds.includes(L.id))  
                  this.isLoading=false;
              }
            }) 
              },
              error:(err)=>{
            console.log(err)
          }
            }
          )  
      }

      isInFavList(listId:string):boolean{
        return this.listingIds.includes(listId)
      }



      removeFavorite(listId:string){
        if(this.isInFavList(listId))
          {
        this._FavoriteService.DeleteFavoriteItem(listId).subscribe(()=>{
          this.listingIds = this.listingIds.filter(id => id !== listId )
          this.favoriteCards = this.favoriteCards.filter(x => x.id !== listId)
        })
        }
      
      }




   
}



