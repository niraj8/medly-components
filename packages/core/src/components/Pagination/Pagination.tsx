import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Button from '../Button';
import List from '../List';
import { paginator } from './helper';
import { PaginationProps } from './types';

export const Pagination: SFC<PaginationProps> & WithStyle = React.memo(props => {
    const links = [];
    const { hideFirstLastLinks, hidePrevNextLinks, activePage, itemsPerPage, totalItems, pageRangeDisplayed, onPageClick } = props;
    const pagesConfig = paginator(totalItems, activePage, itemsPerPage, pageRangeDisplayed);

    const onClickHandler = (page: number) => () => {
        onPageClick(page);
    };

    for (let i = pagesConfig.startPage; i <= pagesConfig.endPage; i++) {
        links.push(
            <Button key={i} onClick={onClickHandler(i)} variant={i === pagesConfig.currentPage ? 'solid' : 'outlined'}>
                {i}
            </Button>
        );
    }

    if (!hidePrevNextLinks) {
        links.unshift(
            <Button
                key="prev"
                disabled={pagesConfig.currentPage < 2}
                onClick={onClickHandler(pagesConfig.currentPage - 1)}
                variant="outlined"
            >
                Prev
            </Button>
        );
        links.push(
            <Button
                key="next"
                disabled={pagesConfig.currentPage === pagesConfig.totalPages}
                onClick={onClickHandler(pagesConfig.currentPage + 1)}
                variant="outlined"
            >
                Next
            </Button>
        );
    }

    if (!hideFirstLastLinks) {
        links.unshift(
            <Button key="first" disabled={pagesConfig.currentPage < 2} onClick={onClickHandler(1)} variant="outlined">
                First
            </Button>
        );
        links.push(
            <Button
                key="last"
                disabled={pagesConfig.currentPage === pagesConfig.totalPages}
                onClick={onClickHandler(pagesConfig.totalPages)}
                variant="outlined"
            >
                Last
            </Button>
        );
    }

    return <List variant="horizontal">{links}</List>;
});

Pagination.displayName = 'Pagination';
Pagination.Style = List.Style;
Pagination.defaultProps = {
    activePage: 1,
    itemsPerPage: 20,
    pageRangeDisplayed: 5,
    hideFirstLastLinks: false,
    hidePrevNextLinks: false
};
