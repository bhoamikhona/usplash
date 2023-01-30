import React, { useState, useEffect, useRef } from "react";
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
  const [query, setQuery] = useState("");
  const [newImages, setNewImages] = useState(false);

  const mounted = useRef(false);

  // Fetching Images
  const fetchImages = async () => {
    // URL to fetch Images
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainURL}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setNewImages(false);
    }
  };

  // use effect to fetch images
  useEffect(() => {
    fetchImages();
    //eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);

  // use effect for infinite scroll

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 1000
    ) {
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  // Handle Search Query
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages(1);
    }
    setPage(1);
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
      {loading && <h1 className="loading">Loading...</h1>}
    </>
  );
};

export default Gallery;
