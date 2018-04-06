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
            _context.Users.Add(new User("Andrew", "aanderson@email.com", "abc123", "3 Bay Meadows Avenue", "", "Huntington Beach", "CA", 92647, "USA", "http://nflshop.frgimages.com/FFImage/thumb.aspx?i=/productImages%2F_633000%2Fff_633362_full.jpg&w=600"));
            _context.Users.Add(new User("Daniel", "dahn@email.com", "abc123", "669 Fairfield St.", "", "Santa Ana", "CA", 92707, "USA", "https://cdn.bleacherreport.net/images/team_logos/328x328/detroit_lions.png"));
            _context.Users.Add(new User("Eric", "emasinas@email.com", "abc123", "5432 Belle Ave", "", "Cypress", "CA", 90630, "USA", "https://cconnect.s3.amazonaws.com/wp-content/uploads/2014/10/Los-Angeles-Kings-2014-Stanley-Cup-Ring.jpg"));
            _context.Users.Add(new User("Lewis", "laguilar@email.com", "abc123", "573 Market Lane", "", "Anaheim", "CA", 92805, "USA", "https://i.pinimg.com/736x/5e/60/0e/5e600e5c89a24460ad6b70cfe7e96564.jpg"));

            _context.SaveChanges();
            }
        }

        [HttpGet]
        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        [HttpGet("id/{id}")]
        public User GetUserById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        [HttpGet("email/{email}")]
        public User GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        [HttpGet("username/{username}")]
        public User GetUserByUsername(string username)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username);
        }

        [HttpGet("login/{login}+{password}")]
        public User GetUserByLoginPassword(string login, string password)
        {
            return _context.Users.FirstOrDefault(u => (u.Email == login || u.Username == login) && u.Password == password);
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