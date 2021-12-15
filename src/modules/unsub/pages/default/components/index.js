import React from 'react';
import Toast from '@core_modules/commons/Toast/index';
import Box from '@material-ui/core/Box';
import Rule from '@core_modules/unsub/pages/default/components/Rule';
import CustomTypography from '@core_modules/commons/Typography/index';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CustomButton from '@core_modules/commons/Button/index';
import useStyles from '@core_modules/unsub/pages/default/components/style';

const Content = (props) => {
    const {
        open, state, handleChange, handleSubmit, t, setOpen,
    } = props;

    const classes = useStyles();
    return (
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
    );
};

export default Content;
