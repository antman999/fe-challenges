import { useEffect, useRef, useState } from "react";
import { fetchPictures, type Dog } from "./dataApi";
import { CirclePause, CirclePlay } from "lucide-react";

const TIMEOUT = 2000;

export function Slideshow() {
  const [data, setData] = useState<Dog[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayOn, setIsAutoPlayOn] = useState(false);
  const interval = useRef<number | undefined>(undefined);

  const getImages = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetchPictures();
      if (!res || res.length === 0) {
        setError(true);
        console.error("No pictures found.");
      } else {
        setData(res);
      }
    } catch (err) {
      console.error("Error fetching pictures:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center p-10">
        <p className="text-lg text-gray-500 animate-pulse">
          Loading pictures...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center p-10 text-center">
        <p className="text-lg text-red-600 mb-4">
          There was an error fetching pictures.
        </p>
        <button
          onClick={getImages}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Try Again
        </button>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentImage = data[currentIndex];

  const handleAutoPlay = () => {
    if (!interval.current) {
      setIsAutoPlayOn(true);
      interval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      }, TIMEOUT);
    }
  };

  const handlePause = () => {
    setIsAutoPlayOn(false);
    clearInterval(interval.current);
    interval.current = undefined;
  };

  return (
    <div>
      <div className="text-center">
        <div className="w-full h-80 bg-gray-100 rounded-md overflow-hidden mb-4 flex items-center justify-center">
          <img
            src={currentImage.url}
            alt={currentImage.title || "Dog picture"}
            className="object-contain object-center w-full h-full"
            loading="lazy"
          />
        </div>
        <p
          className="text-lg font-medium text-gray-700 mb-4 h-6 truncate"
          title={currentImage.title}
        >
          {currentImage.title || "Untitled Dog"}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={data.length <= 1}
            className=" cursor-pointer py-2 px-5 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={data.length <= 1}
            className=" cursor-pointer py-2 px-5 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50"
          >
            Next
          </button>
          {isAutoPlayOn ? (
            <button className="cursor-pointer" onClick={handlePause}>
              {<CirclePause />}
            </button>
          ) : (
            <button className="cursor-pointer" onClick={handleAutoPlay}>
              {<CirclePlay />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
