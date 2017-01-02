/* @flow */

import React from 'react';
import './style.css';

const ActivityBar = ({ active = false }: { active?: bool }) => (
  active ? <div className="activity-bar" /> : null
);

export default ActivityBar;
