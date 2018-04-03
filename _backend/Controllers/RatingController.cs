using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/rating")]
    public class RatingController : Controller
    {
        private MasterContext _context;

        public RatingController(MasterContext context)
        {
            _context = context;

            if (_context.Ratings.Count() == 0)
            {
            _context.Ratings.Add(new Rating(DateTime.Parse("2018-04-01 12:30:00"), 100, 1, 2));
            _context.Ratings.Add(new Rating(DateTime.Parse("2018-04-02 12:30:00"), 90, 1, 3));
            _context.Ratings.Add(new Rating(DateTime.Parse("2018-04-03 12:30:00"), 80, 1, 4));
            _context.Ratings.Add(new Rating(DateTime.Parse("2018-04-01 12:30:00"), 100, 2, 1));
            _context.Ratings.Add(new Rating(DateTime.Parse("2018-04-02 12:30:00"), 90, 2, 3));
            _context.Ratings.Add(new Rating(DateTime.Parse("2018-04-03 12:30:00"), 80, 2, 4));

            _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<Rating> GetRatings()
        {
            return _context.Ratings.ToList();
        }

        [HttpGet("{id}")]
        public Rating GetRating(int id)
        {
            return _context.Ratings.FirstOrDefault(u => u.Id == id);
        }

        [HttpPost]
        public Rating PostRating([FromBody]Rating rating)
        {
            _context.Ratings.Add(rating);
            _context.SaveChanges();
            return rating;
        }

        [HttpPut("{id}")]
        public Rating PutRating(int id, [FromBody]Rating rating)
        {
            _context.Entry(rating).State = EntityState.Modified;
            _context.SaveChanges();
            return rating;
        }

        [HttpDelete("{id}")]
        public Rating DeleteRating(int id)
        {
            var found = _context.Ratings.FirstOrDefault(u => u.Id == id);
            _context.Ratings.Remove(found);
            _context.SaveChanges();
            return found;
        }
    }
}