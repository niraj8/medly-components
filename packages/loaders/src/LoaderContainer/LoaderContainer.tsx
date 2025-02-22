import React from 'react';
import * as Styled from './LoaderContainer.styled';

export const LoaderContainer: React.SFC = props => {
    return (
        <Styled.List>
            {React.Children.map(props.children, (child: any) => (
                <Styled.Item>
                    {child}
                    <span>{child.type.displayName}</span>
                </Styled.Item>
            ))}
        </Styled.List>
    );
};
