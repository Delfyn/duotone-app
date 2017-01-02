import React from 'react';
import { facebookUrl, twitterUrl } from '../../lib/sharing';
import facebookLogo from '../../../public/facebook.png';
import twitterLogo from '../../../public/twitter.png';
import './style.css';

const Header = () => (
  <div className="page-header flex z4 mx3">
    <h2 className="h6 my2">
      <a href="http://floriannagel.net">Florian Nagel</a>
    </h2>
    <div className="flex-auto" />
    <ul>
      <li className="h6 inline-block mr2">
        <a href={facebookUrl('http://duotoneapp.com')}>
          <img alt="Show some love on Facebook" src={facebookLogo} />
        </a>
      </li>
      <li className="h6 inline-block">
        <a href={twitterUrl('http://duotoneapp.com', '🙌 Duotone image filter on the web by 🙌 http://duotoneapp.com cc @_floriannagel #duotone')}>
          <img alt="Show some love on Twitter" src={twitterLogo} />
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
