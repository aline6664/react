import { useState } from 'react';
import { sculptureList } from '../../data/data';
import './Gallery.css'

export default function Gallery() {
    // let index = 0;
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        // index = index + 1;
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        }
    }

    function handlePreviousClick() {
        // index = index + 1;
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <div className="gallery">
            <button onClick={handlePreviousClick} className="previous">
                Previous
            </button>
            <button onClick={handleNextClick} className="next">
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick} className="show-more">
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </div>
    );
}