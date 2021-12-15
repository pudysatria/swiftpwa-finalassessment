import { useQuery } from '@apollo/client';
import getAllCountries from '@core_modules/findcountries/services/graphql/schema';

const getAllCountriesAndRegions = () => useQuery(getAllCountries);

export default getAllCountriesAndRegions;
