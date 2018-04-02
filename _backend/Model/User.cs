using System;

namespace soled_backend
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ProfileImage { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int ZipCode { get; set; }
        public string Country { get; set; }

        public User()
        {

        }

        public User(string username, string email, string password)
        {
            this.Username = username;
            this.Email = email;
            this.Password = password;
        }
    }
}
