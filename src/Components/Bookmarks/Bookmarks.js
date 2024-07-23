import { useEffect, useState } from "react";
import BookmarkForm from "./BookmarkForm/BookmarkForm";
import BookmarkList from "./BookmarkList/BookmarkList";
import { motion } from "framer-motion";
import "./Bookmarks.css";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addBookmark = (bookmark) => {
    setBookmarks((prevBookmarks) => [
      ...prevBookmarks,
      {
        id: bookmark.id,
        bmTitle: bookmark.bmTitle,
        bmLink: bookmark.bmLink,
      },
    ]);
    setShowForm(false);
  };

  // console.log(bookmarks);
  const deleteBookmark = (id) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bm) => bm.id !== id));
    console.log(id);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const json = localStorage.getItem("bookmarks");
    const loadedBookmarks = JSON.parse(json);
    if (loadedBookmarks) {
      setBookmarks(loadedBookmarks);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(bookmarks);
    localStorage.setItem("bookmarks", json);
  }, [bookmarks]);

  return (
    <motion.div
      className="bookmarks"
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showForm ? (
        <div className="bookmarks-container">
          <div className="backdrop">
            <BookmarkForm addBookmark={addBookmark} closeForm={closeForm} />
          </div>
          <BookmarkList
            bookmarks={bookmarks}
            deleteBookmark={deleteBookmark}
            openForm={openForm}
          />
        </div>
      ) : (
        <BookmarkList
          bookmarks={bookmarks}
          deleteBookmark={deleteBookmark}
          openForm={openForm}
        />
      )}
    </motion.div>
  );
};

export default Bookmarks;
