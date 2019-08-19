import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react'
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  // 2. write this test
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />); 
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('defaults to unlocked and open', () =>
    {
        const { queryByText } = render(<Dashboard />)
        expect(queryByText(/unlocked/i)).toBeTruthy()
        expect(queryByText(/open/i)).toBeTruthy()
    })
    it('cannot be closed or opened if it is locked', () =>
    {
        const { queryByText, getByTestId } = render(<Dashboard />)
        const openCloseBtn = getByTestId("open-close-btn")
        const lockUnlockBtn = getByTestId("lock-unlock-btn")
        //close, then lock, then try to open
        fireEvent.click(openCloseBtn)
        fireEvent.click(lockUnlockBtn)
        fireEvent.click(openCloseBtn)
        expect(queryByText(/closed/i)).toBeTruthy()
    })
});



describe('<Controls />', () =>
{
    
    it('has button text change based on state', () =>
    {
        const { getByTestId, queryByText } = render(<Dashboard />)
        const openCloseBtn = getByTestId("open-close-btn")
        const lockUnlockBtn = getByTestId("lock-unlock-btn")
        expect(queryByText(/Close gate/i)).toBeTruthy()
        fireEvent.click(openCloseBtn)
        expect(queryByText(/Close gate/i)).toBeFalsy()
        // expect(queryByText(/open gate/i)).toBeTruthy()

        
    })
    it('provides buttons to toggle the closed and locked states', () =>
    {
        
    })
    it('provides buttons to toggle the closed and locked states', () =>
    {
        
    })
})

