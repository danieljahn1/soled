using System;

namespace soled_backend
{
    public class SneakerImage
    {
        public int ID { get; set; }
        public string Path { get; set; }

        public SneakerImage()
        {
            
        }

        public SneakerImage(string path)
        {
            this.Path = path;
        }

    }

}