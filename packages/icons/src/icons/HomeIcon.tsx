// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HomeSvg from '../assets/Home.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const HomeIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <HomeSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

HomeIcon.Style = SvgIcon;
HomeIcon.displayName = 'HomeIcon';
