using Microsoft.EntityFrameworkCore;

namespace soled_backend
{
    public class MasterContext : DbContext
    {
        public MasterContext(DbContextOptions<MasterContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Sneaker> Sneakers { get; set; }
        public DbSet<Auction> Auctions { get; set; }
        public DbSet<Bid> Bids { get; set; }
    }
}
