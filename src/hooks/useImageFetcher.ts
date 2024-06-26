import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";
import { Image } from "../types/Image";

interface ImageResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

const useImageFetcher = (searchText: string, page: number) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (searchText) {
      setIsLoading(true);
      setImages([]);
      fetchImages(searchText, 1);
    }
  }, [searchText]);

  useEffect(() => {
    if (page > 1) {
      fetchImages(searchText, page);
    }
  }, [page]);

  const fetchImages = async (query: string, page: number) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<ImageResponse> = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12&page=${page}`,
        {
          headers: {
            Authorization:
              "Client-ID it-___ha_onFR-GVhyUV5CTFJrLwJqLYl0WmECjIHzo",
          },
        }
      );
      if (response.data.results.length === 0) {
        setHasMore(false);
        if (images.length === 0) {
          toast("No images found for the given search query.");
        } else {
          toast("No more images to load.");
        }
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setHasMore(response.data.results.length === 12);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          toast("No more images to load.");
        } else {
          toast.error("Failed to load images. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      setIsLoading(false);
    }
  };

  return { images, isLoading, hasMore };
};

export default useImageFetcher;
