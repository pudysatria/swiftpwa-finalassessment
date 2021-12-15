import React from 'react';
import Layout from '@layout';

import getAllCountriesAndRegions from '../../services/graphql/index';

const FindCountries = (props) => {
    const { t, Content } = props;

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
                <Content data={data} t={t} />
            </Layout>
        </>
    );
};

export default FindCountries;
