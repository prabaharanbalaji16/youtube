import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow';
import  './SearchPage.css';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
             image="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
             channel="Tesla"
             subs="1.92M"
             noofVideos={245}
             description="Electric cars, giant batteries and solar. 
             Tesla's mission is to accelerate the world's transition to sustainable energy."
             verified 
            />
            <hr />
            <VideoRow 
                views="558k"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Schedule your departure in advance to set your cabin temperature, prep your battery and avoid peak charging rates."
                channel="Tesla"
                title="Discover: Scheduled Departure"
                image="https://img.youtube.com/vi/UjenHNz-MRI/maxresdefault.jpg"
                timestamp="2 months ago"
            />
            <VideoRow 
                views="609k"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Learn how Tesla hardware works together to capture, store and distribute clean solar energy. Order solar and Powerwall: ..."
                channel="Tesla"
                title="At Home: Solar Hardware"
                image="https://img.youtube.com/vi/XaBqsIrcSC8/maxresdefault.jpg"
                timestamp="3 months ago"
            />
            <VideoRow 
                views="2.1M"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Join the Cell Team – https://www.tesla.com/battery-jobs."
                channel="Tesla"
                title="Making Batteries"
                image="https://img.youtube.com/vi/zB8_HbrxUi8/maxresdefault.jpg"
                timestamp="3 months ago"
            />
            <VideoRow 
                views="396K"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Play games using your steering wheel, touchscreen or a controller while parked. http://www.tesla.com."
                channel="Tesla"
                title="Discover: Arcade Mode"
                image="https://img.youtube.com/vi/bDiwUsY5VXM/maxresdefault.jpg"
                timestamp="4 months ago"
            />
            <VideoRow 
                views="541K"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Enjoy more seamless control of your car with Tesla voice commands. Voice commands can control car settings, climate, ..."
                channel="Tesla"
                title="Discover: Voice Command"
                image="https://img.youtube.com/vi/oDruklAJFmA/maxresdefault.jpg"
                timestamp="4 months ago"
            />
             <VideoRow 
                views="367K"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Access your car from anywhere. Find where you parked, lock or unlock your doors, check your charging status and more."
                channel="Tesla"
                title="Discover: Remote Access"
                image="https://img.youtube.com/vi/awui-L4J_p8/maxresdefault.jpg"
                timestamp="4 months ago"
            />
             <VideoRow 
                views="945K"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Save your driving preferences to your own unique profile and switch to other profiles instantly. http://www.tesla.com"
                channel="Tesla"
                title="Discover: Driver Profiles"
                image="https://img.youtube.com/vi/tS-GZnKOxaE/maxresdefault.jpg"
                timestamp="5 months ago"
            />
              <VideoRow 
                views="349K"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnheXJWhmbmJMyP67CpzuqN6yJwQbnwps8octwlZ-Pk=s176-c-k-c0x00ffffff-no-rj-mo"
                description="Turn on your car's climate controls and heated seats from anywhere. http://www.tesla.com."
                channel="Tesla"
                title="Discover: Remote Climate Controls"
                image="https://img.youtube.com/vi/fdNbmnj2ikY/maxresdefault.jpg"
                timestamp="5 months ago"
            />
        </div>
    )
}

export default SearchPage
