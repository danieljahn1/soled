using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/user")]
    public class UserController : Controller
    {
        private MasterContext _context;

        public UserController(MasterContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
            {
            _context.Users.Add(new User("andrew", "aanderson@email.com", "abc123", "3 Bay Meadows Avenue", null, "Huntington Beach", "CA", 92647, "USA", ""));
            _context.Users.Add(new User("daniel", "dahn@email.com", "abc123", "669 Fairfield St.", null, "Santa Ana", "CA", 92707, "USA", ""));
            _context.Users.Add(new User("eric", "emasinas@email.com", "abc123", "5432 Belle Ave", null, "Cypress", "CA", 90630, "USA", ""));
            _context.Users.Add(new User("lewis", "laguilar@email.com", "abc123", "573 Market Lane", null, "Anaheim", "CA", 92805, "USA", ""));

            _context.SaveChanges();
            }

        }

        [HttpGet]
        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}")]
        public User GetUserById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        [HttpGet("{email}")]
        public User GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        [HttpGet("{username}")]
        public User GetUserByUsername(string username)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username);
        }

        [HttpGet("{email}+{password}")]
        public User GetUserByEmailPassword(string email, string password)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        }

        [HttpPost]
        public User PostUser([FromBody]User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        [HttpPut("{id}")]
        public User PutUserById(int id, [FromBody]User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
            return user;
        }

        [HttpDelete("{id}")]
        public User DeleteUserById(int id)
        {
            var found = _context.Users.FirstOrDefault(u => u.Id == id);
            _context.Users.Remove(found);
            _context.SaveChanges();
            return found;
        }
    }
}