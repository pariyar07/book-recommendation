import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  selfhelp: [
    {
      name: '"How to Win Friends and Influence People" - Dale Carnegie',
      rating: "4/5"
    },
    { name: '"Atomic Habits" - James Clear', rating: "4.2/5" }
  ],

  classic: [
    {
      name: '"To Kill a Mockingbird" - Harper Lee',
      rating: "4.5/5"
    },
    {
      name: '"The Great Gatsby" - F. Scott Fitzgerald',
      rating: "4.4/5"
    }
  ],
  others: [
    {
      name: '"The Kite Runner" - Khaled Hosseini',
      rating: "4.3/5"
    },
    {
      name: '"The Book Thief" - Markus Zusak',
      rating: "4.6/5"
    },
    {
      name: '"Shiva Trilogy" - Amish Tripathy',
      rating: "4.7/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("others");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>My Personal Recommendation </h1>
      <p style={{ textAlign: "center" }}>
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div style={{ textAlign: "center" }}>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "lightgrey",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "small" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
