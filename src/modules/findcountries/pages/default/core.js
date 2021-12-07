import React from 'react';
import Layout from '@layout';
import CustomTypography from '@core_modules/commons/Typography/index';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import getAllCountriesAndRegions from '../../services/graphql/index';
import RegionCard from './components/RegionCard';
import useStyles from './components/style';

const FindCountries = (props) => {
    const { t } = props;
    const classes = useStyles();
    const config = {
        title: 'Find Countries',
        header: true,
        bottomNav: 'findcountries',

    };
    const { loading, data, error } = getAllCountriesAndRegions();
    if (loading) return <></>;
    if (error) return <>error</>;
    return (
        <>
            <Layout {...props} pageConfig={config}>
                <Container>
                    <CustomTypography align="center" variant="h1" type="bold" className={classes.t}>{t('findcountries:pageTitle')}</CustomTypography>
                    <Box style={{ margin: '50px' }}>
                        <Grid
                            container
                            spacing={6}
                        >
                            {data.countries.map((country, i) => (country.available_regions
                        && (
                            <Grid item xs={6} key={i}>
                                <RegionCard country={country.full_name_locale} regions={country.available_regions} />
                            </Grid>
                        )
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Layout>
        </>
    );
};

export default FindCountries;
