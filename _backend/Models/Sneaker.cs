using System;
using System.Collections.Generic;

namespace soled_backend
{
    public class Sneaker
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Size { get; set; }
        public string Model { get; set; }
        public string Style { get; set; }
        public string Version { get; set; }
        public string Condition { get; set; }
        public string Description { get; set; }
        public List<SneakerImage> SneakerPics { get; set; }

        public Sneaker()
        {
            // this.SneakerPics = new List<SneakerImage>();
        }

        public Sneaker(string brand, string size, string model, string style, string version, string condition)
        {
            this.Brand = brand;
            this.Size = size;
            this.Model = model;
            this.Style = style;
            this.Version = version;
            this.Condition = condition;
            this.SneakerPics = new List<SneakerImage>();
        }
    }

   

}