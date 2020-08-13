/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
import { getCartId, setCartId } from '@helpers/cartId';
import { getLoginInfo } from '@helpers/auth';
import { useQuery } from '@apollo/react-hooks';
import Router from 'next/router';
import { gql } from 'apollo-boost';
import propTypes from 'prop-types';
import { getCartIdUser } from '../../services/graphql/schema';
import { getCountCart } from '../../services/graphql';

const GET_COUNT_CART = gql`
  {
    totalCart @client
  }
`;

const ShoppingBagIcon = ({ withLink, WihtLinkView, WithoutLinkView }) => {
    let isLogin = 0;
    let cartId = '';
    if (typeof window !== 'undefined') {
        isLogin = getLoginInfo();
        cartId = getCartId();
    }
    const cartUser = useQuery(getCartIdUser, {
        context: {
            request: 'internal',
        },
        fetchPolicy: 'no-cache',
        skip: !isLogin,
    });

    if (isLogin && (cartId === '' || !cartId || cartId === undefined)) {
        if (cartUser.data) {
            const cartToken = cartUser.data.customerCart.id || '';
            cartId = cartToken;
            setCartId(cartToken);
        }
    }
    const getQty = getCountCart(cartId);
    const { data, client } = useQuery(GET_COUNT_CART);
    React.useEffect(() => {
        if (!getQty.loading && getQty.data) {
            client.writeData({ data: { totalCart: getQty.data.cart.total_quantity } });
        }
    }, [getQty]);

    const cartData = data && data.totalCart ? data.totalCart : 0;
    const handleLink = () => Router.push('/checkout/cart');
    if (withLink) {
        return (
            <WihtLinkView
                cartData={cartData}
                handleLink={handleLink}
            />
        );
    }
    return (
        <WithoutLinkView cartData={cartData} />
    );
};

ShoppingBagIcon.propTypes = {
    withLink: propTypes.bool.isRequired,
    WihtLinkView: propTypes.func.isRequired,
    WithoutLinkView: propTypes.func.isRequired,
};

export default ShoppingBagIcon;