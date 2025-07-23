using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.DTOS.Favorites;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Models.SingularityTask;

namespace WebApplication1.Repositories
{
    public class FavoriteRepository : IFavoriteRepository
    {

        private readonly AirbnbDBContext _dbContext;

        public FavoriteRepository( AirbnbDBContext dbContext)
        {
            _dbContext = dbContext;           
        }


        public async Task<FavoriteItem> AddFavoriteItem(FavoriteItem favitem)
        {

            var existing_item = await _dbContext.FavoriteItems.FirstOrDefaultAsync(u => u.UserId == favitem.UserId && u.ListingId == favitem.ListingId);
            if (existing_item is not null)
            {
                return null;
            }



                await _dbContext.AddAsync<FavoriteItem>(favitem);
                await _dbContext.SaveChangesAsync();       

            return favitem;
 

            
        }

        public  async Task<bool> DeleteFavoriteItem(Guid UserId, Guid ListingId)
        {
            var existing_item = await _dbContext.FavoriteItems.FirstOrDefaultAsync(u => u.UserId ==UserId && u.ListingId ==ListingId);
            if(existing_item is not null)
            {
                  _dbContext.Remove<FavoriteItem>(existing_item);
                await _dbContext.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<List<GetFavoriteItemsDTO>> GetFavoriteItems(Guid UserId)
        {
            return await _dbContext.FavoriteItems
                .Where(f => f.UserId == UserId)
        .Include(f => f.Listing)
            .ThenInclude(l => l.ListingPhotos)
        .Select(f => new GetFavoriteItemsDTO
        {
            Id = f.Id,
            ListingId = f.ListingId,
            ListingTitle = f.Listing.Title,
            ListingPricePerNight = f.Listing.PricePerNight,
            ListingPhotos = f.Listing.ListingPhotos ?? new List<ListingPhoto>(),
        })
        .ToListAsync();
        }

    }
}
