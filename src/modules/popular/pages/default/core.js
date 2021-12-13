import React from 'react';
import Layout from '@layout';
import CustomTypography from '@core_modules/commons/Typography/index';
import Container from '@material-ui/core/Container';
import getBestSellerProducts from '@core_modules/popular/services/graphql/index';
import Grid from '@material-ui/core/Grid';
import CustomCard from './components/Card';
import useStyles from './components/style';

const Popular = (props) => {
    const classes = useStyles();
    const config = {
        title: 'Popular Products',
        header: true,
        bottomNav: 'ppopular',
    };

    const { loading, data, error } = getBestSellerProducts();
    if (loading) return <></>;
    if (error) return <>error</>;
    return (
        <>
            <Layout {...props} pageConfig={config}>
                <Container>
                    <CustomTypography align="center" variant="h1" type="bold">
                        Popular Product
                    </CustomTypography>
                    <div className={classes.mt}>
                        <Grid container spacing={3}>
                            {data.categoryList[0]?.products?.items.map((item, i) => {
                                const getFinalPrice = item?.price_range?.maximum_price?.final_price;
                                return (
                                    <Grid item xs={12} md={4} key={i}>
                                        <CustomCard
                                            name={item.name}
                                            link={item.url_key}
                                            image={item.small_image.url}
                                            price={getFinalPrice.value}
                                            show
                                            count={item.qty_available}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Popular;
