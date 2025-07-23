using Microsoft.AspNetCore.Mvc;
using WebApplication1.DTOS.Favorites;
using WebApplication1.Models.SingularityTask;

namespace WebApplication1.Interfaces
{
    public interface IFavoriteRepository
    {

        public Task<FavoriteItem> AddFavoriteItem(FavoriteItem favitem);

        public Task<bool> DeleteFavoriteItem(Guid UserId, Guid ListingId);

        public Task<List<GetFavoriteItemsDTO>> GetFavoriteItems(Guid UserId);

    }
}
