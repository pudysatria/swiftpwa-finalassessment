import React from 'react';
import Layout from '@layout';

import unsubEmail from '@core_modules/unsub/services/graphql/';

const Unsub = (props) => {
    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({ message: 'null', code: 0 });

    const { t, Content } = props;

    const config = {
        title: 'Unsibscribe Newsletter',
        header: true,
        bottomNav: 'unsub',
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    let res = null;
    const [gql] = unsubEmail();
    const handleSubmit = async () => {
        const { data } = await gql({ variables: { email: value } });
        res = data;
        setOpen(true);
        setState({ message: res.unSubscribe.status.message, code: res.unSubscribe.status.code });
    };

    return (
        <>
            <Layout {...props} pageConfig={config}>
                <Content open={open} setOpen={setOpen} state={state} handleSubmit={handleSubmit} handleChange={handleChange} t={t} />
            </Layout>
        </>
    );
};

export default Unsub;
