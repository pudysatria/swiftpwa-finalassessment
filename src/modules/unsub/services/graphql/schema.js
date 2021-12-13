import { gql } from '@apollo/client';

const UNSUBSCRIBE_EMAIL = gql`
    mutation unsub($email: String) {
        unSubscribe(input: { email: $email }) {
            status {
                message
                code
            }
        }
    }
`;
export default UNSUBSCRIBE_EMAIL;
