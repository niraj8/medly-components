import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Shows modal only when this prop is true */
    open?: boolean;
    /** Function to be called on closing modal */
    onCloseModal?: () => void;
}

export interface ModalStaticProps {
    Header: React.SFC;
    Content: React.SFC;
    Actions: React.SFC;
}
