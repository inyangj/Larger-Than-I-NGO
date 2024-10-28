import { Image as AntImage } from "antd"; 

const ImageSlide = ({ galleryImages }) => {
  return (
    <section
      className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20"
      id="gallery-section"
    >
   
      <AntImage.PreviewGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:px-[57px] xl:px-0 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 justify-center items-center">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="relative group cursor-pointer">
              <AntImage
                src={image.url}
                alt={`Gallery Image ${index + 1}`}
                width={360}
                height={230}
                className="transition-transform duration-300 transform group-hover:scale-110"
                style={{ objectFit: "cover" }} 
              />
            </div>
          ))}
        </div>
      </AntImage.PreviewGroup>
    </section>
  );
};

export default ImageSlide;
