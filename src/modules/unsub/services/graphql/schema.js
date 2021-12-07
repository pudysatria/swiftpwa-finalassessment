import { gql } from '@apollo/client';

const unsubscribeEmail = gql`
    mutation unsub($email: String) {
        unSubscribe(input: { email: $email }) {
            status {
                message
                code
            }
        }
    }
`;
export default unsubscribeEmail;
