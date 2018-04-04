using System;

namespace soled_backend
{
    public class Auction
    {
        public int Id { get; set; }
        public int SneakerId { get; set; }
        public int SellerId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double MinPrice  { get; set; }
        public double MaxPrice  { get; set; }
        public int WinnerId { get; set; }
        public bool CompletePayment { get; set; }

        public Auction()
        {

        }

        public Auction(int sneakerId, int sellerId, DateTime startDate, DateTime endDate, double minPrice, double maxPrice)
        {
            this.SneakerId = sneakerId;
            this.SellerId = sellerId;
            this.StartDate = startDate;
            this.EndDate = endDate;
            this.MinPrice = minPrice;
            this.MaxPrice = maxPrice;
            this.CompletePayment = false;
        }
    }

}