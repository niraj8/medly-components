import { AddIcon, DeleteIcon, EditIcon } from '@medly-components/icons';
import { TabsTheme } from '@medly-components/theme';
import React, { useState } from 'react';
import { Tabs } from './Tabs';

export const ThemeInterface = (props: TabsTheme): any => null;

export const Basic = () => (
    <Tabs aria-label="Basic Tabs">
        <Tabs.Tab id="tab1" label="Add">
            Content for the add panel
        </Tabs.Tab>
        <Tabs.Tab id="tab2" label="Edit">
            Content for the edit panel
        </Tabs.Tab>
        <Tabs.Tab id="tab3" label="Delete">
            Content for the delete panel
        </Tabs.Tab>
    </Tabs>
);

export const WithIcon = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="WithIcon Tabs">
            <Tabs.Tab id="tab1" label="Add" icon={AddIcon}>
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit" icon={EditIcon}>
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete" icon={DeleteIcon}>
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const Uncontrolled = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="Uncontrolled Tabs">
            <Tabs.Tab id="tab1" label="Add">
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const Controlled = () => {
    const [active, setAciveTab] = useState('tab1');
    return (
        <Tabs active={active} onChange={setAciveTab} aria-label="Controlled Tabs">
            <Tabs.Tab id="tab1" label="Add">
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};
