import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTypography from '@core_modules/commons/Typography/index';
import Container from '@material-ui/core/Container';
import CustomCard from '@core_modules/popular/pages/default/components/Card';
import useStyles from '@core_modules/popular/pages/default/components/style';

const Content = (props) => {
    const classes = useStyles();
    const { data } = props;
    return (
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
    );
};

export default Content;
