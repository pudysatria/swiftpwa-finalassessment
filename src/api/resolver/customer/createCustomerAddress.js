const requestGraph = require('../../graphql-request');


const query = `
    mutation createCustomerAddress(
        $city: String!
        $countryCode: CountryCodeEnum!
        $customAttributes: [CustomerAddressAttributeInput]
        $defaultBilling: Boolean!
        $defaultShipping: Boolean!
        $firstname: String!
        $lastname: String!
        $telephone: String!
        $postcode: String!
        $street: String!
        $region: String!
        $regionCode: String
        $regionId: Int
    ) {
        createCustomerAddress(
            input: {
                city: $city
                country_code: $countryCode
                country_id: $countryCode
                custom_attributes: $customAttributes
                default_billing: $defaultBilling
                default_shipping: $defaultShipping
                firstname: $firstname
                lastname: $lastname
                postcode: $postcode
                street: [$street]
                telephone: $telephone
                region: { region: $region, region_code: $regionCode, region_id: $regionId }
            }
        ) {
            id
            city
            default_billing
            default_shipping
        }
    }
`;

async function createCustomerAddress(parent, args, context) {
    const variables = {
        city: args.input.city,
        countryCode: args.input.country_code,
        defaultBilling: args.input.default_billing,
        defaultShipping: args.input.default_shipping,
        firstname: args.input.firstname,
        lastname: args.input.lastname,
        postcode: args.input.postcode,
        telephone: args.input.telephone,
        street: args.input.street[0],
        region: args.input.region.region,
        regionCode: args.input.region.region_code,
        regionId: args.input.region.region_id,
        customAttributes: args.input.custom_attributes,
    };
    const res = await requestGraph(query, variables, context);
    if (res.createCustomerAddress) {
        return res.createCustomerAddress;
    }
    return res;
}

module.exports = createCustomerAddress;