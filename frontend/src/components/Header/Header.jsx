import React from 'react';
import "./Header.css";
import { assets } from '../../assets/assets'; // import the assets object

const Header = () => {
  return (
    <div 
      className="header" 
      style={{ backgroundImage: `url(${assets.header_img})` }} // use assets.headerBg
    >
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Indulge in delicious meals delivered right to your doorstep.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
