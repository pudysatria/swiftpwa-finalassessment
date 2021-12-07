import CustomTypography from '@core_modules/commons/Typography/index';
import React from 'react';
import Box from '@material-ui/core/Box';

const Rule = () => (
    <Box style={{ backgroundColor: '#eee', padding: '20px', borderRadius: '10px' }}>
        <CustomTypography variant="h3" type="bold">Are you sure want to unsubscribe newsletter?</CustomTypography>
        <CustomTypography variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</CustomTypography>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    </Box>
);

export default Rule;
