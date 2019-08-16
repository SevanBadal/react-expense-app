import React from 'react';
import { shallow } from  'enzyme';
import NotFound from '../../components/NotFoundPage';

test('should correctly render NotFoundPage', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
