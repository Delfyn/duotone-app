/* @flow */

import React from 'react';
import './style.css';

const ActivityBar = ({ active = false }: { active?: boolean }) =>
  active ? <div className="activity-bar" /> : null;

export default ActivityBar;
