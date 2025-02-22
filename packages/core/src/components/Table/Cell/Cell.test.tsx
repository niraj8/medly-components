import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Checkbox from '../../Checkbox';
import Text from '../../Text';

import { Cell } from './Cell.styled';

describe('Cell', () => {
    it('should render text properly', () => {
        const { container } = TestUtils.render(
            <Cell>
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render frozen text properly', () => {
        const { container } = TestUtils.render(
            <Cell frozen>
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render text if hide property is given', () => {
        const { container } = TestUtils.render(
            <Cell hide>
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render checkbox properly', () => {
        const { container } = TestUtils.render(
            <Cell hide>
                <Checkbox label="Dummy" />
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });
});
