import { ColumnsWidth } from './types';

export const columnsWidth: ColumnsWidth = {
    numeric: 'minmax(100px, 0.75fr)',
    boolean: 'minmax(100px, 0.75fr)',
    group: 'minmax(150px, 1fr)',
    checkbox: 'minmax(50px, 0.25fr)',
    'text-short': 'minmax(120px, 1fr)',
    'text-long': 'minmax(150px, 2fr)',
    'react-component': 'minmax(150px, 1fr)'
};
