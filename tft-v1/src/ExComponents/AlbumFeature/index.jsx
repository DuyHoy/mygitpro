import React from 'react';
import AlbumList from "./components/AlbumList";
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'New Releases',
            imgUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/b/f/6/5bf63062ea1bf411475969e77e695f76.jpg'
        },
        {
            id: 2,
            name: 'Todays Pop Retro',
            imgUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/7/a/0/e7a0cea004105abdec7500cb40316cc9.jpg'
        },
        {
            id: 3,
            name: 'XONE s Picks',
            imgUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/9/a/7/19a7afeacb83b332fa701b0affb9c6e4.jpg'
        },
    ];
    return (
        <div>
            <h2>Maybe you like</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;