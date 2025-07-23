using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.SingularityTask
{
    public class FavoriteItem
    {
 
        public Guid Id { get; set; }

        public Guid ListingId { get; set; }
        public  Listing Listing { get; set; }

        public Guid UserId { get; set; }
        public  ApplicationUser User { get; set; }

        public DateTime CreatedAt { get; set; }

    }
}
