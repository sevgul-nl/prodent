import React from 'react';
import './styles.css';

const Header = () => {
  const title = 'User Profile';
  const subtitle1 = 'User Identity Building';
  const subtitle2 = 'Desirable Product List';
  return (
    <div className="headerSection">
      <div className="headerTitle">{title}</div>
      <div className="headerSubtitle">{subtitle1}</div>
      <div className="headerSubtitle">{subtitle2}</div>
    </div>
  );
};

export default Header;
