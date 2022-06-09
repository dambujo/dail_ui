import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container-left">
        <div className="items meta">MetaHome</div>
        <div className="items">12.19.50 PM</div>
        <div className="items">Sunday, 5 december 2021</div>
      </div>
      <div className="header-container-right">
        <div className="header-text custdash">Customer Dashboard</div>
        <RiArrowDropDownLine className="header-icon dropdown" />
        <div className="header-text">Hello Dambujo</div>
        <div className="header-text img-header"></div>
        <AiOutlineLogin className="header-icon login" />
      </div>
    </div>
  );
};

export default Header;
