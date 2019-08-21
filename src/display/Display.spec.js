import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, getByTestId} from '@testing-library/react'
import Display from './Display'

describe('<Display />', () =>
{
    it('defaults to unlocked and open', () =>
    {
        const { queryByText } = render(<Display locked={true} closed={false} />)
        expect(queryByText(/locked/i)).toBeTruthy()
        expect(queryByText(/open/i)).toBeTruthy()
    })
    it('displays \'Closed\' when the closed prop is true', () =>
    {
        const { queryByText } = render(<Display locked={true} closed={true} />)
        expect(queryByText(/open/i)).toBeFalsy()
    })
    it('displays \'Open\' when the closed prop is false', () =>
    {
        const { queryByText } = render(<Display locked={true} closed={false} />)
        expect(queryByText(/open/i)).toBeTruthy()
    })
    it('displays \'Locked\' when the locked prop is true', () =>
    {
        const { queryByText } = render(<Display locked={true} closed={true} />)
        expect(queryByText(/locked/i)).toBeTruthy()
    })
    it('doesn\'t display \'Locked\' when the locked prop is false', () =>
    {
        const { queryByText } = render(<Display locked={false} closed={true} />)
        expect(queryByText(/unlocked/i)).toBeTruthy()
    })
    it('is red-led if closed or locked', () =>
    {
        let { getByTestId } = render(<Display locked={true} closed={true} />)
        expect(getByTestId("display-lock").className.includes("red-led")).toBeTruthy()
        expect(getByTestId("display-close").className.includes("red-led")).toBeTruthy()
    })
    it('is green if open/unlocked', () =>
    {
        let { getByTestId } = render(<Display locked={false} closed={false} />)
        expect(getByTestId("display-lock").className.includes("green-led")).toBeTruthy()
        expect(getByTestId("display-close").className.includes("green-led")).toBeTruthy()
    })
})