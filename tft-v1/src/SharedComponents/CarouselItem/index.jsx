import React from 'react';
import PropTypes from 'prop-types';
import CarouselChildItem from '../CarouselChildItem';

CarouselItem.propTypes = {

};

function CarouselItem({ carouselItem }) {
    return (
        <React.Fragment>
            <div className="carousel-component">

                {/* <CharactersItem CharacterItem={carouselItem} /> */}
                <a className="characters-item" >
                    <div className="character-wrapper">
                        <img
                            className="character-icon"
                            src={carouselItem.img}
                            alt={carouselItem.name}
                        />
                    </div>
                    {
                        carouselItem.childCarouselList.length > 0 &&
                        <div className="character-items">
                            {carouselItem.childCarouselList.map(carouselChildItem => (

                                <CarouselChildItem carouselChildItem={carouselChildItem} />

                            ))}
                        </div>

                    }

                </a >
                {carouselItem.childCarouselList.length > 0 &&
                    < div className="carousel-full">
                        {carouselItem.childCarouselList.map(childCarouselItem => (
                            <CarouselChildItem carouselChildItem={childCarouselItem} />
                        ))
                        }
                    </div>
                }
                {
                    carouselItem.childCarouselList.length > 0 &&
                    <i className="arrow down"></i>
                }

            </div>

        </React.Fragment >

    );
}

export default CarouselItem;