import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';
import Core from '@core_modules/popular/pages/default/core';
import Content from '@core_modules/popular/pages/default/components/index';

const Page = (props) => <Core {...props} Content={Content} />;

Page.getInitialProps = async (ctx) => ({
    namespacesRequired: ['popoular'],
    query: ctx.query,
});

export default withApollo({ ssr: true })(withTranslation()(Page));
