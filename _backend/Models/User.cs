using System;

namespace soled_backend
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int? ZipCode { get; set; }
        public string Country { get; set; }
        public string ProfileImage { get; set; }

        public User()
        {

        }

        public User(string username, string email, string password, string address1, string address2, string city, string state, int zipCode, string country, string imgUrl)
        {
            this.Username = username;
            this.Email = email;
            this.Password = password;
            this.Address1 = address1;
            this.Address2 = address2;
            this.City = city;
            this.State = state;
            this.ZipCode = zipCode;
            this.Country = country;
            this.ProfileImage = imgUrl;
        }
    }
}
