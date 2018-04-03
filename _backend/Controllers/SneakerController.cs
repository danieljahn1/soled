using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/sneaker")]
    public class SneakerController : Controller
    {
        private MasterContext _context;

        public SneakerController(MasterContext context)
        {
            _context = context;

            if (_context.Sneakers.Count() == 0)
            {
                Sneaker sneaker1 = new Sneaker("Nike", "12", "Jordans", "Red and white", "1984", "Mint");
                sneaker1.SneakerPics.Add(new SneakerImage("https://images.solecollector.com/complex/image/upload/rg1zccq86lstafmqms44.jpg"));
                sneaker1.SneakerPics.Add(new SneakerImage("http://www.rantsports.com/clubhouse/files/2015/11/airjordan1cropped.jpg"));
                _context.Sneakers.Add(sneaker1);
                
                Sneaker sneaker2 = new Sneaker("Reebok", "11.5", "Pump", "White", "v1", "Good");
                sneaker2.SneakerPics.Add(new SneakerImage("https://i.pinimg.com/originals/ed/7c/bc/ed7cbc373674f7644dea3e9e228e9242.jpg"));
                _context.Sneakers.Add(sneaker2);
               
                _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<Sneaker> GetSneakers()
        {
            return _context.Sneakers.Include(s => s.SneakerPics).ToList();
        }

        [HttpGet("{id}")]
        public Sneaker GetSneaker(int id)
        {
            return _context.Sneakers.Include(s => s.SneakerPics).FirstOrDefault(c => c.Id == id);
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