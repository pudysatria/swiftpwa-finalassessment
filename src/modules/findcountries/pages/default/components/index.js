import React from 'react';
import RegionCard from '@core_modules/findcountries/pages/default/components/RegionCard';
import CustomTypography from '@core_modules/commons/Typography/index';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useStyles from '@core_modules/findcountries/pages/default/components/style';

const Content = (props) => {
    const { t, data } = props;
    const classes = useStyles();
    return (
        <Container>
            <CustomTypography align="center" variant="h1" type="bold" className={classes.t}>
                {t('findcountries:pageTitle')}
            </CustomTypography>
            <Box style={{ margin: '50px' }}>
                <Grid container spacing={6}>
                    {data.countries.map(
                        (country, i) => country.available_regions && (
                            <Grid item xs={6} key={i}>
                                <RegionCard country={country.full_name_locale} regions={country.available_regions} />
                            </Grid>
                        ),
                    )}
                </Grid>
            </Box>
        </Container>
    );
};

export default Content;
