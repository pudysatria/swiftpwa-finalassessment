import React from 'react';
import Layout from '@layout';
import CustomTypography from '@core_modules/commons/Typography/index';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CustomButton from '@core_modules/commons/Button/index';
import { useMutation } from '@apollo/client';
import unsubscribeEmail from '@core_modules/unsub/services/graphql/schema';
import Toast from '@core_modules/commons/Toast/index';
import Box from '@material-ui/core/Box';
import Rule from './components/Rule';
import useStyles from './components/style';

const Unsub = (props) => {
    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({ message: 'null', code: 0 });

    const { t } = props;
    const classes = useStyles();
    const config = {
        title: 'Unsibscribe Newsletter',
        header: true,
        bottomNav: 'unsub',
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    let res = null;
    const [gql] = useMutation(unsubscribeEmail);
    const handleSubmit = async () => {
        const { data } = await gql({ variables: { email: value } });
        res = data;
        setOpen(true);
        setState({ message: res.unSubscribe.status.message, code: res.unSubscribe.status.code });
    };

    return (
        <>
            <Layout {...props} pageConfig={config}>
                <Container>
                    <CustomTypography align="center" variant="h1" type="bold" className={classes.title}>
                        {t('unsub:pageTitle')}
                    </CustomTypography>
                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <FormControl style={{ width: '50%' }}>
                            <Rule />
                            <TextField id="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
                            <Box style={{ margin: '30px' }}>
                                <CustomButton fullWidth onClick={handleSubmit}>
                                    unsibscribe
                                </CustomButton>
                            </Box>
                            <Toast variant={state.code === 200 ? 'success' : 'error'} message={state.message} open={open} setOpen={setOpen} />
                        </FormControl>
                    </Box>
                </Container>
            </Layout>
        </>
    );
};

export default Unsub;
