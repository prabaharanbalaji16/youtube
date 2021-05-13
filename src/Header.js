import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import { Apps, Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [search,setSearch] = useState("");
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                        alt="" 
                    />
                </Link>
            </div>
            <div className="header__input">
                <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" />
                <Link to={`/search/${search}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__right">
                <VideoCallSharpIcon className="header__icons" />
                <Apps className="header__icons" />
                <Notifications className="header__icons" />
                <Avatar src="" alt="" className="header__icons" />
            </div>
        </div>
    )
}

export default Header
