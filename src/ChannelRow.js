import { Avatar } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import React from 'react';
import './ChannelRow.css';

function ChannelRow({image,channel,subs,verified,noofVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt="" />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutline />}</h4>
                <p>{subs} Subscriptions . {noofVideos} Videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
