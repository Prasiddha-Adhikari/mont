import React from "react";
import one from "../../assets/video/one.mp4";
import two from "../../assets/video/two.mp4";
import three from "../../assets/video/three.mp4";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

// Sample video properties array
const videoProperties = [
  { id: 1, src: one, title: "video1" },
  { id: 2, src: two, title: "video2" },
  { id: 3, src: three, title: "video3" },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="">
      <Carousel activeIndex={currentIndex} onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}>
        {videoProperties.map((videoObj, index) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                width="100%"
                height="100%"
                url={videoObj.src}
                pip={true}
                playing={currentIndex === index} // Play only the current video
                loop={true} // Loop the video
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
