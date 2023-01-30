import React, { useState } from "react";
import { useEffect } from "react";
import Photo from "./Photo";
import { FaSearch } from "react-icons/fa";

// Initial Values
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainURL = `https://api.unsplash.com/photos`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  // Fetching Images
  const fetchImages = async () => {
    // URL to fetch Images
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    url = `${mainURL}${clientID}${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        return [...oldPhotos, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // use effect to fetch images
  useEffect(() => {
    fetchImages();
  }, [page]);

  // use effect for infinite scroll
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  // Handle Search Query
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  // Rendering Images
  const renderImage = (info) => {
    const src = info.urls.regular;
    const id = info.id;
    const altDesc = info.alt_description;
    return <Photo source={src} alt={altDesc} key={id} />;
  };

  // Returning
  return (
    <>
      {/* SEARCH BAR */}
      <main>
        <section className="search">
          <form className="search-form">
            <input
              type="text"
              className="search-form-input"
              placeholder="search"
            />
            <button
              type="submit"
              className="search-submit-btn"
              onClick={handleSubmit}
            >
              <FaSearch />
            </button>
          </form>
        </section>
      </main>
      {/* GALLERY */}
      {/* <div className="gallery">{tempImages.map(renderImage)}</div> */}
      <div className="gallery">{photos.map(renderImage)}</div>
    </>
  );
};

export default Gallery;
