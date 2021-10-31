import React from 'react';

CarouselChildItem.propTypes = {

};

function CarouselChildItem({ carouselChildItem }) {
    return (
        < a className="characters-item" href="/item-builder" >
            <div className="character-wrapper">
                <img
                    className="character-icon"
                    src={carouselChildItem.img}
                    alt={carouselChildItem.name}
                />
            </div>
        </a >
    );
}

export default CarouselChildItem;