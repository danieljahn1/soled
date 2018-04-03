using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/auction")]
    public class AuctionController : Controller
    {
        private UserContext _context;

        public AuctionController(UserContext context)
        {
            _context = context;

            if (_context.Auctions.Count() == 0)
            {
                _context.Auctions.Add(new Auction(1, 1, DateTime.Parse("2018-04-01 12:00:00"), DateTime.Parse("2018-04-07 14:00:00"), 49.99));
                _context.Auctions.Add(new Auction(2, 2, DateTime.Parse("2018-04-02 15:30:00"), DateTime.Parse("2018-04-10 16:00:00"), 24.99));
               
                _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<Auction> GetAuctions()
        {
            return _context.Auctions.ToList();
        }

        [HttpGet("{id}")]
        public Auction GetAuction(int id)
        {
            return _context.Auctions.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public Auction PostAuction([FromBody]Auction auction)
        {
            _context.Auctions.Add(auction);
            _context.SaveChanges();
            return auction;
        }

        [HttpPut("{id}")]
        public Auction PutAuction(int id, [FromBody]Auction auction)
        {
            _context.Entry(auction).State = EntityState.Modified;
            _context.SaveChanges();
            return auction;
        }

        [HttpDelete("{id}")]
        public Auction DeleteAuction(int id)
        {
            var found = _context.Auctions.FirstOrDefault(c => c.Id == id);
            _context.Auctions.Remove(found);
            _context.SaveChanges();
            return found;
        }
    }
}