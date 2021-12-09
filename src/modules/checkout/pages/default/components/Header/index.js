/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { getStoreHost } from '@helpers/config';
import { modules } from '@config';
import Router from 'next/router';
import { getAppEnv } from '@root/core/helpers/env';
import Autocomplete from '@core_modules/theme/components/header/desktop/components/autocomplete';
import OptionAutocomplete from '@core_modules/theme/components/header/desktop/components/autocomplete/view';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const HeaderCheckout = ({ storeConfig, t }) => {
    const BackToStore = () => {
        if (modules.checkout.checkoutOnly) {
            window.location.replace(getStoreHost(getAppEnv()));
        } else {
            Router.push('/');
        }
    };
    const [value, setValue] = React.useState('');
    const handleSearch = (ev) => {
        if (ev.key === 'Enter' && ev.target.value !== '') {
            Router.push({
                pathname: '/catalogsearch/result',
                query: { q: value },
            });
        }
    };
    const searchByClick = () => {
        if (value !== '') {
            Router.push({
                pathname: '/catalogsearch/result',
                query: { q: value },
            });
        }
    };

    return (
        <div id="header">
            <div className="link-backtostore" onClick={BackToStore}>
                <img className="logo" src={`${storeConfig.secure_base_media_url}logo/${storeConfig.header_logo_src}`} alt="logo" />
            </div>
            <div className="header-middle__search">
                <Autocomplete setValue={setValue} handleSearch={handleSearch} OptionsItem={OptionAutocomplete} t={t} />
                <div className="search-icon">
                    <IconButton disabled={value === ''} edge="start" onClick={searchByClick} aria-label="close">
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>
            <style jsx>
                {`
                    #header {
                        height: 170px;
                        display: flex;
                        width: '100%';
                        justify-content: space-between;
                    }

                    #header img {
                        cursor: pointer;
                        max-height: 120px;
                        width: auto;
                    }

                    .link-backtostore {
                        cursor: pointer;
                    }
                    .header-middle__search {
                        display: flex;
                        align-items: center;
                        float: right;
                        position: relative;
                    }
                `}
            </style>
        </div>
    );
};

export default HeaderCheckout;
