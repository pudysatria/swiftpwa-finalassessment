import { useMutation } from '@apollo/client';
import UNSUBSCRIBE_EMAIL from './schema';

const unsubEmail = () => useMutation(UNSUBSCRIBE_EMAIL);

export default unsubEmail;
