// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandMoreSvg from '../assets/ExpandMore.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ExpandMoreIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ExpandMoreSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

ExpandMoreIcon.Style = SvgIcon;
ExpandMoreIcon.displayName = 'ExpandMoreIcon';
