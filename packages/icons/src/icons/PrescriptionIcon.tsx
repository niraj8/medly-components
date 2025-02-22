import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PrescriptionSvg from '../assets/Prescription.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const PrescriptionIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <PrescriptionSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

PrescriptionIcon.Style = SvgIcon;
PrescriptionIcon.displayName = 'PrescriptionIcon';
