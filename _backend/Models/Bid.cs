using System;

namespace soled_backend
{
    public class Bid
    {
        public int Id { get; set; }
        public int AuctionId { get; set; }
        public int BidderId { get; set; }
        public double BidPrice { get; set; }
        public DateTime BidDate { get; set; }


        public Bid()
        {

        }

        public Bid(int auctionId, int bidderId, double bidPrice, DateTime bidDate)
        {
            this.AuctionId = auctionId;
            this.BidderId = bidderId;
            this.BidPrice = bidPrice;
            this.BidDate = bidDate;
        }
    }

}