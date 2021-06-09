import Typography from '@common_typography';
import ButtonQty from '@common_buttonqty';
import React from 'react';
import Button from '@common_button';
import Thumbor from '@common_image';
import classNames from 'classnames';
import useStyles from '@plugin_optionitem/components/Footer/style';

const ConfigurableView = (props) => {
    const {
        loading, disabled, showQty = true, handleAddToCart, qty, setQty,
        t, showAddToCart = true, customStyleBtnAddToCard = '', labelAddToCart = '',
        maxQty = 10000, bannerLite,
    } = props;
    const styles = useStyles();
    return (
        <>
            { showQty && (
                <div className={styles.qty}>
                    <Typography type="bold" variant="span">{t('common:title:qty')}</Typography>
                    <ButtonQty
                        value={qty}
                        onChange={setQty}
                        max={maxQty}
                        disabled={disabled}
                    />
                </div>
            ) }
            {
                showAddToCart && (
                    <div className={styles.btnAddToCardContainer}>
                        <Button
                            className={classNames(styles.btnAddToCard, customStyleBtnAddToCard)}
                            color="primary"
                            onClick={handleAddToCart}
                            loading={loading}
                            disabled={disabled}
                        >
                            <Typography
                                align="center"
                                type="bold"
                                letter="uppercase"
                                color="white"
                                variant="inherit"
                            >
                                {labelAddToCart || t('product:addToCart')}
                            </Typography>
                        </Button>
                        {bannerLite.after && (
                            <div className={styles.bannerLiteAfter}>
                                <a href={bannerLite.after.banner_link}>
                                    <Thumbor src={bannerLite.after.banner_image} alt={bannerLite.after.banner_alt} width={1175} height={424} lazy />
                                </a>
                            </div>
                        )}
                    </div>
                )
            }
        </>
    );
};

export default ConfigurableView;
