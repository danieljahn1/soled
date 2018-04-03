using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/sneaker")]
    public class SneakerController : Controller
    {
        private UserContext _context;

        public SneakerController(UserContext context)
        {
            _context = context;

            if (_context.Sneakers.Count() == 0)
            {
                _context.Sneakers.Add(new Sneaker("Nike", "12", "Jordans", "Black", "1984", "Mint"));
                _context.Sneakers.Add(new Sneaker("Reebok", "11.5", "Pump", "White", "v1", "Good"));
               
                _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<Sneaker> GetSneakers()
        {
            return _context.Sneakers.ToList();
        }

        [HttpGet("{id}")]
        public Sneaker GetSneaker(int id)
        {
            return _context.Sneakers.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public Sneaker PostUser([FromBody]Sneaker sneaker)
        {
            _context.Sneakers.Add(sneaker);
            _context.SaveChanges();
            return sneaker;
        }

        [HttpPut("{id}")]
        public Sneaker PutSneaker(int id, [FromBody]Sneaker sneaker)
        {
            _context.Entry(sneaker).State = EntityState.Modified;
            _context.SaveChanges();
            return sneaker;
        }

        [HttpDelete("{id}")]
        public Sneaker DeleteSneaker(int id)
        {
            var found = _context.Sneakers.FirstOrDefault(c => c.Id == id);
            _context.Sneakers.Remove(found);
            _context.SaveChanges();
            return found;
        }
    }
}