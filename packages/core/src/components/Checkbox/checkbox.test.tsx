import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(<Checkbox name="gender" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(<Checkbox disabled fullWidth name="gender" label="Female" size="M" labelPosition="right" />);
        expect(container).toMatchSnapshot();
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        const { container } = TestUtils.render(
            <Checkbox onChange={mockOnChange} disabled name="gender" label="Female" size="M" labelPosition="right" />
        );
        TestUtils.fireEvent.click(container.querySelector('input'));
        expect(mockOnChange).toBeCalled();
    });
});
