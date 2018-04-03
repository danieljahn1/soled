using System;

namespace soled_backend
{
    public class Rating
    {
        public int Id { get; set; }
        public DateTime RatingDate { get; set; }
        public int RatingScore { get; set; }
        public int SellerId { get; set; }
        public int BidderId { get; set; }

        public Rating()
        {

        }

        public Rating(DateTime ratingDate, int ratingScore, int sellerId, int bidderId)
        {
            this.RatingDate = ratingDate;
            this.RatingScore = ratingScore;
            this.SellerId = sellerId;
            this.BidderId = bidderId;
        }
    }
}
