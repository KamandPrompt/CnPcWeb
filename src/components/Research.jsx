import React from 'react';
import { ResearchLab } from './researchLab';
import {Centre} from './centre';
export const Research = (props) => {
  return (<div>
      <ResearchLab/>
      <Centre/>
      <h2>Project Fundings</h2>
      <h2>I HUB</h2>
      <h2>Catalyst</h2>
      <h2>Research News</h2>
  </div>);
};
