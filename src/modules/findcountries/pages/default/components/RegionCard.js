import React from 'react';
import Typography from '@common_typography';

import Grid from '@material-ui/core/Grid';
import CustomTitle from '@common_title';

const RegionCard = (props) => {
    const { country, regions } = props;
    return (
        <>
            <CustomTitle variant="h2" type="bold">{country}</CustomTitle>
            <Grid
                container
                spacing={1}
            >
                {regions ? regions.map((region, index) => (
                    <Grid item xs={6} key={index}>
                        <Typography variant="h3">{region.name}</Typography>
                    </Grid>
                )) : <Typography variant="h3">Theres no available region</Typography>}
            </Grid>

        </>
    );
};

export default RegionCard;
