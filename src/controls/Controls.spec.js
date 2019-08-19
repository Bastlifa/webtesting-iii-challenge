import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react'
import Controls from './Controls'

describe('<Controls />', () =>
{
    it('provides buttons to toggle the closed and locked states', () =>
    {
        const controls = render(<Controls locked={false} closed={false} />)
        expect(controls.getByTestId("open-close-btn"))
        expect(controls.getByTestId("lock-unlock-btn"))
    })
})