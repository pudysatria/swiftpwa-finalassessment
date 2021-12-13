import { gql } from '@apollo/client';

const GET_BEST_SELLER_PRODUCTS = gql`
    query getBestSellerProducts {
        categoryList(filters: { name: { match: "Best seller" } }) {
            name
            products {
                items {
                    url_key
                    name
                    qty_available
                    small_image {
                        url
                    }
                    image {
                        url
                    }
                    price_range {
                        maximum_price {
                            regular_price {
                                currency
                                value
                            }
                            final_price {
                                currency
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default GET_BEST_SELLER_PRODUCTS;
