import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react'
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  // 2. write this test
    it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); 
    expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe('<Display />', () =>
{
    it('defaults to unlocked and open', () =>
    {
        const { queryByText } = render(<Dashboard />)
        expect(queryByText(/unlocked/i)).toBeTruthy()
        expect(queryByText(/open/i)).toBeTruthy()
    })
})