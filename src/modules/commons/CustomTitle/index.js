import React from 'react';
import Typography from '@common_typography';

import useStyles from './style';

const CustomTitle = (props) => {
    const { type, variant, children } = props;
    const classes = useStyles();
    return (
        <>
            <Typography variant={variant} type={type} className={classes.title}>{children}</Typography>
        </>
    );
};

export default CustomTitle;
