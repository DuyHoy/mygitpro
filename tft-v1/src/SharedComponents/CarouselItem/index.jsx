import React from 'react';
import CarouselChildItem from '../CarouselChildItem';

CarouselItem.propTypes = {

};

function CarouselItem({ carouselItem }) {
    return (
        <React.Fragment>
            <div className="carousel-component">
                <a className="characters-item" >
                    <div className="character-wrapper">
                        <img
                            className="character-icon"
                            src={carouselItem.img}
                            alt={carouselItem.name}
                        />
                    </div>
                </a >
                {carouselItem.childCarouselList.length > 0 &&
                    < div className="carousel-full">
                        {carouselItem.childCarouselList.map(childCarouselItem => (
                            <CarouselChildItem carouselChildItem={childCarouselItem} />
                        ))
                        }
                    </div>
                }
            </div>
        </React.Fragment >

    );
}

export default CarouselItem;