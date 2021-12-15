import React from 'react';
import Layout from '@layout';

import getBestSellerProducts from '@core_modules/popular/services/graphql/index';

const Popular = (props) => {
    const { Content } = props;
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
                <Content data={data} />
            </Layout>
        </>
    );
};

export default Popular;
