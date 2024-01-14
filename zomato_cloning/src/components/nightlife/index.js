import React from "react";
import "./nightlife.css";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { nightlife } from "../../data/nightlife";
import Collection from "../common/collection";

const nightFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        icon: <img className="filter-icon"
                   src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" 
                      alt="Gold Icon">
              </img>,
        title: "Gold",
    },
    {
        id: 3,
        title: "Rating: 4.0+",
    },
    {
        id: 4,
        title: "Pubs & Bars",
    },
];
const collectionList = [
    {
        id: "1",
        title: "Trending Restaurants",
        cover:
          "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
        places: "10 places",
    },
    {
        id: "2",
        title: "Christmas Special Restaurants",
        cover:
          "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
        places: "10 places",
    },
    {
        id: "3",
        title: "Newly Opened Restaurants",
        cover:
          "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
        places: "8 places",
    },
    {
        id: "4",
        title: "Serene Rooftop Places",
        cover:
          "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
        places: "28 places",
    },
    {
        id: "5",
        title: "Must-visit Legendary Places",
        cover:
          "	https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg",
        places: "11 places",
    },
    {
        id: "6",
        title: "Picturesque Cafes",
        cover:
          "	https://b.zmtcdn.com/data/collections/6487ebe8fbb28294be84b70041d24601_1691347530.jpg",
        places: "9 places",
    },
    {
        id: "7",
        title: "Romantic Dining Places",
        cover:
          "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
        places: "16 places",
    },
    {
        id: "8",
        title: "Finest Microbreweries",
        cover:
          "	https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623276.png",
        places: "20 places",
    },
];

const nightList=nightlife
const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={nightFilters} />
            </div>
            <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Bengaluru" />
        </div>
    );
};

export default Nightlife;