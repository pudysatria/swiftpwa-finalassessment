import { makeStyles } from '@material-ui/core';

import { CreatePadding, FlexColumn } from '@theme/mixins';

export default makeStyles({
    container: {
        ...CreatePadding(15, 15, 25, 15),
        ...FlexColumn,
    },
    footer: {
        marginTop: 25,
        textAlign: 'center',
    },
    button: {
        padding: 10,
    },
});