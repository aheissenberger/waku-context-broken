'use client';
import {useMantineTheme} from '@mantine/core'
import { useContext } from 'react';

export const MantineConsumer = () => {
    const theme = useMantineTheme();
    return (<div>Theme: {`${theme?.primaryColor ?? 'NULL'}`}</div>);
}