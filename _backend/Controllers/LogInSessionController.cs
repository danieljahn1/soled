using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace soled_backend
{
    [Route("soled/user/login")]
    public class LogInSessionController : Controller
    {
        private MasterContext _context;

        public LogInSessionController(MasterContext context)
        {
            _context = context;

            if (_context.LoggedInUserId.Count() == 0)
            {
                // _context.LoggedInUserId.Add(new LogInSession(1));

                _context.SaveChanges();
            }
        }

        [HttpGet]
        public List<LogInSession> GetLoggedInUserId()
        {
            return _context.LoggedInUserId.ToList();
        }

        [HttpGet("{id}")]
        public LogInSession GetLogInSession(int id)
        {
            return _context.LoggedInUserId.FirstOrDefault(l => l.Id == id);
        }


        [HttpPost]
        public LogInSession LogInUser([FromBody]LogInSession logInSession)
        {
            _context.LoggedInUserId.Add(logInSession);
            _context.SaveChanges();
            return logInSession;
        }

        [HttpPut("{id}")]
        public LogInSession PutUserById(int id, [FromBody]LogInSession logInSession)
        {
            _context.Entry(logInSession).State = EntityState.Modified;
            _context.SaveChanges();
            return logInSession;
        }

        [HttpDelete]
        public void LogOutUser()
        {
            var found = _context.LoggedInUserId;
            _context.LoggedInUserId.RemoveRange(found);
            _context.SaveChanges();
        }
    }
}