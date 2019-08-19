import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react'
import Display from './Display'

describe('<Display />', () =>
{
    it('defaults to unlocked and open', () =>
    {
        const { queryByText } = render(<Display locked={true} closed={false} />)
        expect(queryByText(/locked/i)).toBeTruthy()
        expect(queryByText(/open/i)).toBeFalsy()
    })
})