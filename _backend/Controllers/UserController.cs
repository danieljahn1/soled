using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/user")]
    public class UserController : Controller
    {
        private UserContext _context;

        public UserController(UserContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
            {
            _context.Users.Add(new User("Andrew", "aanderson@email.com", "abc123"));
            _context.Users.Add(new User("Daniel", "dahn@email.com", "abc123"));
            _context.Users.Add(new User("Eric", "emasinas@email.com", "abc123"));
            _context.Users.Add(new User("Lewis", "laguilar@email.com", "abc123"));

            _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}")]
        public User GetUser(int id)
        {
            return _context.Users.FirstOrDefault(c => c.Id == id);
        }

        [HttpPost]
        public User PostUser([FromBody]User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        [HttpPut("{id}")]
        public User PutUser(int id, [FromBody]User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
            return user;
        }

        [HttpDelete("{id}")]
        public User DeleteUser(int id)
        {
            var found = _context.Users.FirstOrDefault(c => c.Id == id);
            _context.Users.Remove(found);
            _context.SaveChanges();
            return found;
        }
    }
}