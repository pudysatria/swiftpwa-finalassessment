import { gql } from '@apollo/client';

const getAllCountries = gql`
    query getCountries{
        countries{
        available_regions{
            name
            code
            id
        }
        full_name_locale
        full_name_english
        }
    }
    `;

export default getAllCountries;
