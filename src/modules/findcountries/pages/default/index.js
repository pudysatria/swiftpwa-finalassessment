import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';
import Core from '@core_modules/findcountries/pages/default/core';

const Page = (props) => (<Core {...props} />);

Page.getInitialProps = async (ctx) => ({
    namespacesRequired: ['findcountries'],
    query: ctx.query,
});

export default withApollo({ ssr: true })(withTranslation()(Page));
