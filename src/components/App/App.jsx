import { useState, useEffect, useRef } from "react";
import { fetchImages } from "../api/api";

import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const initModalInfo = {
  isOpen: false,
  url: "",
  description: "",
};
function App() {
  const [value, setValue] = useState("");
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eror, setEror] = useState(false);
  const [arrLenght, setArrLenght] = useState(0);
  const [page, setPage] = useState(1);
  const [modalInfo, setModalInfo] = useState(initModalInfo);
  const scrollToend = useRef();

  const handleModalClose = () => setModalInfo(initModalInfo);

  const handleImageClick = ({ url, description }) => {
    setModalInfo({ isOpen: true, url, description });
  };
  useEffect(() => {
    if (value === "") {
      return;
    }
    setEror(false);
    setLoading(true);
    async function handleSearch() {
      setLoading(true);
      try {
        const res = await fetchImages(value, page);
        console.log(res);
        setGallery((prev) => [...prev, ...res.results]);
        setArrLenght(res.total);
      } catch (error) {
        setEror(true);
      } finally {
        setLoading(false);
      }
    }
    handleSearch();
  }, [value, page]);

  useEffect(() => {
    scrollToend.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [gallery]);

  return (
    <div ref={scrollToend}>
      <SearchBar
        onSubmit={setValue}
        setGallery={setGallery}
        setPage={setPage}
      />
      {gallery.length > 0 ? (
        <ImageGallery galleryList={gallery} onImageClick={handleImageClick} />
      ) : (
        <p>Please search something else</p>
      )}
      {loading && <Loader />}
      {eror && <ErorMessage>Please refresh youre page</ErorMessage>}
      {arrLenght > 12 && <LoadMoreBtn loadMore={setPage} currentPage={page} />}
      {modalInfo.isOpen && (
        <ImageModal
          isOpen={modalInfo.isOpen}
          url={modalInfo.url}
          description={modalInfo.description}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
