import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('render without crashing', () => {
  shallow(<App />);
});
