import { useMutation } from '@apollo/client';
import UNSUBSCRIBE_EMAIL from '@core_modules/unsub/services/graphql/schema';

const unsubEmail = () => useMutation(UNSUBSCRIBE_EMAIL);

export default unsubEmail;
