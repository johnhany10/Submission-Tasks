﻿using WebApplication1.Models;

namespace WebApplication1.DTOS.Favorites
{
    public class GetFavoriteItemsDTO
    {
        public Guid Id { get; set; }
        public Guid ListingId { get; set; }
        public string ListingTitle { get; set; }
        public  ICollection<ListingPhoto> ListingPhotos { get; set; } = new List<ListingPhoto>();
        public decimal ListingPricePerNight { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
