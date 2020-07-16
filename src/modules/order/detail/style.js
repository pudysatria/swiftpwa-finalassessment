import makeStyles from '@material-ui/core/styles/makeStyles';
import {
    CreatePadding,
    CreateBorder,
    FlexColumn,
    FlexRow,
    CreateMargin,
} from '@theme/mixins';
import { GRAY_PRIMARY } from '@theme/colors';

export default makeStyles(() => ({
    block: {
        ...CreateBorder(0, 0, '1px', 0, GRAY_PRIMARY),
        ...CreatePadding(30, 30, 30, 30),
        ...FlexColumn,
    },
    detail: {
        paddingTop: 0,
        alignItems: 'center',
        textAlign: 'center',
    },

    labelDetail: {
        ...CreateMargin(30, 0, 0, 0),
    },

    itemContainer: {
        ...FlexRow,
        ...CreateMargin(10, 0, 20, 0),
    },

    productImgContainer: {
        width: 105,
        height: 130,
    },

    productImg: {
        width: 105,
        height: 'auto',
    },

    detailItem: {
        ...FlexColumn,
        ...CreatePadding(0, 0, 0, 10),
    },
    textDetail: {
        ...CreateMargin(0, 0, 0, 5),
        padding: 0,
    },

    listSummary: {
        ...FlexRow,
        justifyContent: 'space-between',
    },
    footer: {
        ...FlexColumn,
        '&> *': {
            margin: '15px auto',
        },
    },
}));