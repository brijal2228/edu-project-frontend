

import React, { useState } from "react";
import Modal from "./Modal";
import '../App.css';

// Structure of a single book item
type Book = {
    volumeInfo: {
        imageLinks?: { smallThumbnail?: string };
        title?: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        previewLink?: string;
    };
    saleInfo: {
        listPrice?: { amount?: number };
    };
};

const Card: React.FC<{ book: Book[] }> = ({ book }) => {
    const [show, setShow] = useState(false); // State to show/hide modal
    const [bookItem, setItem] = useState<Book | null>(null); // State for selected book

    return (
        <>
            {book.map((item, index) => {
                const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail || "placeholder.jpg";
                const amount = item.saleInfo.listPrice?.amount || "Not Available";

                return (
                    <div
                        key={index}
                        className="card"
                        onClick={() => {
                            setShow(true);
                            setItem(item);
                        }}
                    >
                        <img src={thumbnail} alt="Book Thumbnail" />
                        <div className="bottom">
                            <h3 className="title">{item.volumeInfo.title || "No Title"}</h3>
                            <p className="amount">&#8377;{amount}</p>
                        </div>
                    </div>
                );
            })}

            {/* Modal rendering */}
            {show && bookItem && (
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            )}
        </>
    );
};

export default Card;
