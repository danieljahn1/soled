using System;

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
        public string SneakerImage { get; set; }

        public Sneaker()
        {
            
        }

        public Sneaker(string brand, string size, string model, string style, string version, string condition, string shoeImage)
        {
            this.Brand = brand;
            this.Size = size;
            this.Model = model;
            this.Style = style;
            this.Version = version;
            this.Condition = condition;
            this.SneakerImage = shoeImage;
        }
    }

   

}