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
                sneaker1.Description = "These Red and white Jordans have been thoroughly taken care of. Only worn 2 times with minimal wear and tear. Super minty and ready for you to flex with!";
                _context.Sneakers.Add(sneaker1);
                
                Sneaker sneaker2 = new Sneaker("Reebok", "11.5", "Pump", "White", "v1", "Good");
                sneaker2.SneakerPics.Add(new SneakerImage("https://i.pinimg.com/originals/ed/7c/bc/ed7cbc373674f7644dea3e9e228e9242.jpg"));
                sneaker2.Description = "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached";
                _context.Sneakers.Add(sneaker2);

                Sneaker sneaker3 = new Sneaker("Nike", "10.5", "Platinum Pinnacle", "Platinum and White", "Air 6", "Excellent");
                sneaker3.SneakerPics.Add(new SneakerImage("https://dtpmhvbsmffsz.cloudfront.net/posts/2017/10/30/59f763c6f092820c850b2302/m_59f764277fab3a7ad80b1365.jpg"));
                sneaker3.Description = "Had these sneakers for years just sitting in the box in my closet. Barely worn. When i did wear them though, people were breaking their necks. Get at these before they're gone.";
                _context.Sneakers.Add(sneaker3);

                Sneaker sneaker4 = new Sneaker("Nike", "8", "Jordan 11 Heiress", "Black, white and gold", "Stringray", "Good");
                sneaker4.SneakerPics.Add(new SneakerImage("https://di2ponv0v5otw.cloudfront.net/posts/2018/04/03/5ac3aeae3afbbdea3eed8b5e/m_5ac3aebb61ca10e245d1344b.jpg"));
                sneaker4.Description = "My chick barely wore these shoes. The right shoe has a minor scuff on the sole, but other than that they are pristine. Make sure your chick is lookin as fly as you with the Jordan 11 Heiress'.";
                _context.Sneakers.Add(sneaker4);

                Sneaker sneaker5 = new Sneaker("Adidas", "11.5", "NMD Trail", "Black and white", "Pharrell William Human Race", "Excellent");
                sneaker5.SneakerPics.Add(new SneakerImage("https://3.kixify.com/sites/default/files/imagecache/product_full/product/2018/02/14/p_21728621_111082291_1616551.jpg"));
                sneaker5.Description = "These are brand spankin new never worn Pharrell's. Box has minor damage, but thats it. Wish I could keep these but my loss is your gain! Don't sleep on these.";            
                _context.Sneakers.Add(sneaker5);

                Sneaker sneaker6 = new Sneaker("Adidas", "9", "NMD R1 PK NYC", "Orange, black and white", "Red Apple", "Excellent");
                sneaker6.SneakerPics.Add(new SneakerImage("https://cdn.kixify.com/sites/default/files/imagecache/product_full/product/2017/05/27/p_15413191_80658581_6596836.jpg"));
                sneaker6.Description = "Fresh set of NMD's that has never been worn. Joey Bada$$ helped make these sweet ass NYC inspired shoes. Been sitting under my bed since I got them so they're waiting to be rocked. Get at me with any questions.";
                _context.Sneakers.Add(sneaker6);

                Sneaker sneaker7 = new Sneaker("Nike", "10", "Air Max", "Gold, black, red and white", "270 Gold", "Excellent");
                sneaker7.SneakerPics.Add(new SneakerImage("https://2.kixify.com/sites/default/files/imagecache/product_full/product/2018/03/20/p_22207726_111768176_6943451.jpg"));
                sneaker7.Description = "Super hot fire 270 Gold's. Never worn, but have been sitting out of the box for a couple weeks. In need of cash or I wouldn't be getting rid of these.";
                _context.Sneakers.Add(sneaker7);

                Sneaker sneaker8 = new Sneaker("Saucony", "8.5", "Bodega x Saucony", "Blue and white", "Elite Shadow 5000", "Good");
                sneaker8.SneakerPics.Add(new SneakerImage("https://5.kixify.com/sites/default/files/imagecache/product_full/product/2017/06/03/p_15605076_81452676_3611916.jpg"));
                sneaker8.Description = "Got these as a gift from an ex. Worn a few times, but kept them super clean. Bodega collabed on these so they are pretty lit. Get at 'em before you get got.";
                _context.Sneakers.Add(sneaker8);

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