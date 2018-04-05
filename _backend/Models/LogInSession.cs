using System;

namespace soled_backend
{
    public class LogInSession
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public LogInSession()
        {

        }

        public LogInSession(int userId)
        {
            this.UserId = userId;
        }
    }
}
