import { useQuery } from '@apollo/client';
import GET_BEST_SELLER_PRODUCTS from '@core_modules/popular/services/graphql/schema';

const getBestSellerProducts = () => useQuery(GET_BEST_SELLER_PRODUCTS);

export default getBestSellerProducts;
