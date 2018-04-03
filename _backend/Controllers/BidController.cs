using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/bid")]
    public class BidController : Controller
    {
        private MasterContext _context;

        public BidController(MasterContext context)
        {
            _context = context;

            if (_context.Bids.Count() == 0)
            {
                _context.Bids.Add(new Bid(1, 2, 26, DateTime.Parse("2018-04-01 12:00:00")));
                _context.Bids.Add(new Bid(1, 3, 27, DateTime.Parse("2018-04-01 12:30:00")));
                _context.Bids.Add(new Bid(2, 3, 50, DateTime.Parse("2018-04-03 14:24:00")));
                _context.Bids.Add(new Bid(2, 1, 65, DateTime.Parse("2018-04-03 14:44:00")));
               
                _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<Bid> GetBids()
        {
            return _context.Bids.ToList();
        }

        [HttpGet("{id}")]
        public Bid GetBid(int id)
        {
            return _context.Bids.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public Bid PostBid([FromBody]Bid bid)
        {
            _context.Bids.Add(bid);
            _context.SaveChanges();
            return bid;
        }

        [HttpPut("{id}")]
        public Bid PutBid(int id, [FromBody]Bid bid)
        {
            _context.Entry(bid).State = EntityState.Modified;
            _context.SaveChanges();
            return bid;
        }

        [HttpDelete("{id}")]
        public Bid DeleteBid(int id)
        {
            var found = _context.Bids.FirstOrDefault(c => c.Id == id);
            _context.Bids.Remove(found);
            _context.SaveChanges();
            return found;
        }
    }
}