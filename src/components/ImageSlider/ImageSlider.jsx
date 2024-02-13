import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ImageSliderStyle } from "./ImageSliderStyle";

export default function ImageSlider({ url, page = 2, limit = 5 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(
                `${getUrl}?page=${page}&limit=${limit}`
            );
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url !== "") {
            fetchImages(url);
        }
    }, [url]);

    console.log(images);

    const handlePrevious = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
    };

    if (loading) {
        return (
            <div className="wrapper" style={{ fontSize: "1.6rem" }}>
                Loading data! please wait...
            </div>
        );
    }

    if (error !== null) {
        return (
            <div className="wrapper" style={{ fontSize: "1.6rem" }}>
                Error Occurred! {error}
            </div>
        );
    }

    return (
        <div className="wrapper">
            <ImageSliderStyle>
                <IoIosArrowBack
                    onClick={handlePrevious}
                    className="arrow arrow-left"
                />
                {images && images.length
                    ? images.map((imageItem, index) => (
                          <img
                              src={imageItem.download_url}
                              key={imageItem.id}
                              alt={imageItem.download_url}
                              className={
                                  currentSlide === index
                                      ? "current-image"
                                      : "current-image hide-current-image"
                              }
                          />
                      ))
                    : null}
                <IoIosArrowForward
                    onClick={handleNext}
                    className="arrow arrow-right"
                />
                <span className="circle-indicator">
                    {images && images.length
                        ? images.map((_, index) => (
                              <button
                                  key={index}
                                  className={
                                      currentSlide === index
                                          ? "current-indicator"
                                          : "current-indicator inactive-indicator"
                                  }
                                  onClick={() => setCurrentSlide(index)}
                              ></button>
                          ))
                        : null}
                </span>
            </ImageSliderStyle>
        </div>
    );
}
