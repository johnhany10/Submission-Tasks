using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.DTOS.Favorites;
using WebApplication1.Interfaces;
using WebApplication1.Models.SingularityTask;
using WebApplication1.Repositories;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class FavoritesController : ControllerBase
    {

        private readonly IFavoriteRepository _favoriteRepository;
        private readonly IUserRepository _irepo;


        public FavoritesController(IFavoriteRepository favoriteRepository , IUserRepository irepo)
        {
            _favoriteRepository = favoriteRepository;
            _irepo = irepo;
        }


        [HttpPost]
        public async Task<IActionResult> AddFavorite([FromBody] FavoritesDto dto)
        {

            var FavoriteDto = new FavoriteItem()
            { 
                Id = Guid.NewGuid(),
                ListingId = dto.ListingId,
                UserId = dto.UserId,
                CreatedAt = DateTime.UtcNow
            };

            var favitem = await _favoriteRepository.AddFavoriteItem(FavoriteDto);

            if (favitem == null)
            {
                return BadRequest("this item is already exist");
            }
            else
            {
                return Created();
            }

        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetFavoriteItems(Guid userId)
        {

            var FavoriteItems = await _favoriteRepository.GetFavoriteItems(userId);

            if(FavoriteItems is not null)
            {
                return Ok(FavoriteItems);
            }

            return NotFound();
        }

        [HttpDelete("{userId}/{listingId}")]
        public async Task<IActionResult> DeleteFavoriteItem(Guid UserId , Guid ListingId)
        {
            var IsDeleted =await _favoriteRepository.DeleteFavoriteItem(UserId, ListingId);

            if(IsDeleted)
            {
                return Ok();
            }

            return NotFound();

        }

    }
}
