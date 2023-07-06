import React from 'react';

import{SubHeading, MenuItem} from '../../components';
import {images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-item">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine &amp; Beer</p>
        <div className="app__specialMenu_menu_item">
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app__specialMenu-menu_cocktails">
      <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_item">
          {data.cocktails.map((cocktail, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>
    </div>
    <div style={{margin: '15px'}}>
        <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
