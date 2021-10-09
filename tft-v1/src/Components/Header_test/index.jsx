import React, { useState, useRef, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types'
import {Server,Version,links} from './data'

function HeaderTest(props) {

    // show item server
    const [showItem,setShowItem]=useState(false);

    const toggleButton=()=>{
        setShowItem(!showItem);
    }

    //show item version
    const [showbtn,setShowbtn]=useState(false);

    const toggleButtonVersion=()=>{
        setShowbtn(!showbtn);
    }

    // useEffect(()=>{
         
    // },[showItem])
 
    return (
        <>
        <nav className="nav toolbar">
                <div className="nav-wrapper container">
                <a className="nav-brand active" aria-current="page" href="/"><img className="brand" src="https://rerollcdn.com/brand.svg" alt="TFTactics" /></a>
        <div className="set-btn dropdown">
        <button type="button" onClick={toggleButtonVersion} aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-secondary">Set 5.5</button>
        <div role="menu" aria-hidden="true" className={`dropdown-menu ${showbtn ? "show" : ""}`}>
            {/* <button type="button" set="5.5" role="menuitem" className=" active dropdown-item">Set 5.5</button> */}
            {Version.map((version) => {
                        const { id, url, text } = version;
                            return ( 
                                <button type='button' role='menuitem' id={id} href={url} className='active dropdown-item'>{text}</button>
                    );
                    })}
            </div>
            
        </div>   
        <div className="searchbar player-search">
            <div className="dropdown">
                <button type="button" onClick={toggleButton} aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-secondary">NA</button>
                <div role="menu" aria-hidden="true" className={`dropdown-menu ${showItem ? "show" : ""}`}> 
                    {Server.map((server) => {
                        const { id, url, text } = server;
                            return ( 
                                <button type='button' role='menuitem' id={id} href={url} className='dropdown-item'>{text}</button> 
                    );
                    })}
                </div>  
            </div>
            <input className="searchbar-input" type="text" placeholder="Search Summoner Name..." />
            <img className="searchbar-icon" src="https://rerollcdn.com/search-icon.svg" alt="search icon" />
        </div>
        <a className="cta-btn d-none d-xl-flex" href="https://download.overwolf.com/install/Download?&amp;PartnerId=3792&amp;ExtensionId=delfmdadipjjmpajblkalfkbebcbldbknecigjpc">
            <div className="btn">Download App</div></a> 
                </div>
            </nav>

            <nav className="nav d-none d-xl-flex">
                <div className="nav-wrapper container">
                    <ul className="nav-links" style={{ "width": "100%" }}>
                         {links.map((link)=>{
                             const { id, url, text } = link;
                             return(
                                <li className="nav-item" id={id}><a className="nav-link" href={url}>{text}</a></li>
                             ) 
                         })}
                    </ul>
                </div>
                 
            </nav>
        </>
    )
}

HeaderTest.propTypes = {

}

export default HeaderTest

