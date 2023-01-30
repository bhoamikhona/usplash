import React, { useState } from "react";
import { useEffect } from "react";
import Photo from "./Photo";
import Searchbar from "./Searchbar";
import { FaSearch } from "react-icons/fa";

// This was used to design the layout
// const tempImages = [
//   {
//     id: 1,
//     imgSrc:
//       "https://images.unsplash.com/photo-1674909073807-a5da838ac031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80",
//   },
//   {
//     id: 2,
//     imgSrc:
//       "https://images.unsplash.com/photo-1675018313686-797d5c072d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 3,
//     imgSrc:
//       "https://images.unsplash.com/photo-1674796941974-9120fdf15205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80",
//   },
//   {
//     id: 4,
//     imgSrc:
//       "https://images.unsplash.com/photo-1662567239284-e7b01bd4f2da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     id: 5,
//     imgSrc:
//       "https://images.unsplash.com/photo-1674906027463-881f2c8330a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//   },
// ];

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
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // use effect to fetch images
  useEffect(() => {
    fetchImages();
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
