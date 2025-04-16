
import React from 'react';
import '../App.css';

const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }

    const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail || 'placeholder.jpg'; // Updated logic
    const title = item.volumeInfo.title || 'Title Not Available';
    const authors = item.volumeInfo.authors?.join(', ') || 'Author Information Unavailable';
    const publisher = item.volumeInfo.publisher || 'Publisher Not Mentioned';
    const publishedDate = item.volumeInfo.publishedDate || '';
    const description = item.volumeInfo.description || 'No Description Available';
    const previewLink = item.volumeInfo.previewLink || '#';

    return (
        <>
            <div className="overlay" aria-hidden="true" role="dialog">
                <div className="overlay-inner">
                    <button
                        className="close"
                        onClick={onClose}
                        aria-label="Close Modal"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="Book Thumbnail" className='modal-thumbnail'/>
                        <div className="info">
                            <h1>{title}</h1>
                            <h3>{authors}</h3>
                            <h4>
                                {publisher} <span>{publishedDate}</span>
                            </h4>
                            <br />
                            <a href={previewLink}>
                                <button>More</button>
                            </a>
                        </div>
                    </div>
                    <h4 className="description">{description}</h4>
                </div>
            </div>
        </>
    );
};

export default Modal;
