import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'

describe('<Controls />', () =>
{
    it('provides buttons to toggle the closed and locked states', () =>
    {
        const {getByTestId} = render(<Controls locked={false} closed={false} />)
        expect(getByTestId("open-close-btn")).toBeTruthy()
        expect(getByTestId("lock-unlock-btn")).toBeTruthy()
    })
    it('has the close button be disabled when the gate is locked', () =>
    {
        const {getByTestId} = render(<Controls locked={true} closed={false} />)
        expect(getByTestId("open-close-btn").disabled).toBeTruthy()

    })
    it('has the lock button be disabled when the gate is open', () =>
    {
        const {getByTestId} = render(<Controls locked={false} closed={false} />)
        expect(getByTestId("lock-unlock-btn").disabled).toBeTruthy()

    })
})