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
        private MasterContext _context;

        public AuctionController(MasterContext context)
        {
            _context = context;

            if (_context.Auctions.Count() == 0)
            {
                Auction auction1 = new Auction(1, 1, DateTime.Parse("2018-04-01 12:00:00"), DateTime.Parse("2018-04-07 14:00:00"), 49.99, 500);
                auction1.WinnerId = 2;
                _context.Auctions.Add(auction1);
                // _context.Auctions.Add(new Auction(1, 1, DateTime.Parse("2018-04-01 12:00:00"), DateTime.Parse("2018-04-07 14:00:00"), 49.99, 500));

                Auction auction2 = new Auction(2, 2, DateTime.Parse("2018-04-02 15:30:00"), DateTime.Parse("2018-04-10 16:00:00"), 24.99, 0);
                auction2.WinnerId = 1;
                _context.Auctions.Add(auction2);
                // _context.Auctions.Add(new Auction(2, 2, DateTime.Parse("2018-04-02 15:30:00"), DateTime.Parse("2018-04-10 16:00:00"), 24.99, 0));

                Auction auction3 = new Auction(3, 1, DateTime.Parse("2018-03-29 11:30:00"), DateTime.Parse("2018-04-05 11:30:00"), 150, 250);
                // auction3.WinnerId = 3;
                _context.Auctions.Add(auction3);
                // _context.Auctions.Add(new Auction(3, 1, DateTime.Parse("2018-03-29 11:30:00"), DateTime.Parse("2018-04-05 11:30:00"), 150, 250));

                Auction auction4 = new Auction(4, 1, DateTime.Parse("2018-03-29 12:30:00"), DateTime.Parse("2018-04-05 12:00:00"), 500, 1000);
                // auction4.WinnerId = 4;
                _context.Auctions.Add(auction4);                
                // _context.Auctions.Add(new Auction(4, 1, DateTime.Parse("2018-03-29 12:30:00"), DateTime.Parse("2018-04-05 12:00:00"), 500, 1000));

                Auction auction5 = new Auction(5, 4, DateTime.Parse("2018-03-30 15:30:00"), DateTime.Parse("2018-04-06 15:00:00"), 100, 200);
                // auction5.WinnerId = 1;
                _context.Auctions.Add(auction5);
                // _context.Auctions.Add(new Auction(5, 4, DateTime.Parse("2018-03-30 15:30:00"), DateTime.Parse("2018-04-06 15:00:00"), 100, 200));

                Auction auction6 = new Auction(6, 2, DateTime.Parse("2018-04-01 19:30:00"), DateTime.Parse("2018-04-07 19:00:00"), 100, 0);
                auction6.WinnerId = 4;
                _context.Auctions.Add(auction6);
                // _context.Auctions.Add(new Auction(6, 2, DateTime.Parse("2018-04-01 19:30:00"), DateTime.Parse("2018-04-07 19:00:00"), 100, 0));

                Auction auction7 = new Auction(7, 3, DateTime.Parse("2018-04-02 18:00:00"), DateTime.Parse("2018-04-06 18:00:00"), 75, 0);
                auction7.WinnerId = 2;
                _context.Auctions.Add(auction7);
                // _context.Auctions.Add(new Auction(7, 3, DateTime.Parse("2018-04-02 18:00:00"), DateTime.Parse("2018-04-06 18:00:00"), 75, 0));
               
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