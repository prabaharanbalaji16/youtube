import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoRow.css';

function VideoRow({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image,
    channelImage
}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                     {views} views . {timestamp }
                </p>
                <div className="channelName">
                    <Avatar src={channelImage} alt="" />
                    <p>{channel}</p>
                </div>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
