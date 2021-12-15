import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';
import Core from '@core_modules/findcountries/pages/default/core';
import Content from '@core_modules/findcountries/pages/default/components';

const Page = (props) => <Core {...props} Content={Content} />;

Page.getInitialProps = async (ctx) => ({
    namespacesRequired: ['findcountries'],
    query: ctx.query,
});

export default withApollo({ ssr: true })(withTranslation()(Page));
