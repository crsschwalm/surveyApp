import Login from '../../../common/components/Login';
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Login />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
  });
});
