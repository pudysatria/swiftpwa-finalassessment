/* eslint-disable no-unused-vars */
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Typography from '@common_typography';
import AddressFormDialog from '@core/customer/plugins/AddressFormDialog';
import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import _ from 'lodash';
import useStyles from './style';
import { createCustomerAddress, updateCustomerAddress } from '../../../services/graphql';

const TableAddress = (props) => {
    const {
        firstname = '',
        lastname = '',
        street = '',
        postcode = '',
        country = '',
        region = '',
        city = '',
        telephone = '',
        value = '',
        checked = false,
        handleAddress,
        loadingAddress,
        success,
        t,
        // eslint-disable-next-line no-unused-vars
    } = props;
    const [open, setOpen] = useState(false);
    React.useEffect(() => {
        if (open && success) {
            setOpen(false);
        }
    }, [loadingAddress]);
    const styles = useStyles();
    return (
        <>
            <AddressFormDialog
                {...props}
                open={open}
                onSubmitAddress={handleAddress}
                loading={loadingAddress}
                success={success}
                setOpen={() => setOpen(!open)}
                pageTitle={t('customer:address:editTitle')}
            />
            <TableRow className={styles.tableRowResponsive}>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{firstname}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{lastname}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{street}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{city}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{country}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{region.region}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{postcode}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <div className={styles.value}>{telephone}</div>
                    </div>
                </TableCell>
                <TableCell
                    className={styles.tableCellResponsive}
                    align="left"
                >
                    <div className={styles.displayFlexRow}>
                        <Typography className={[styles.address_edit].join(' ')} variant="span" onClick={() => setOpen(!open)}>
                            {t('customer:address:editTitle')}
                        </Typography>
                    </div>
                </TableCell>
            </TableRow>
        </>
    );
};

export default TableAddress;
