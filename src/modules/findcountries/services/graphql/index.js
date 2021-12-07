import { useQuery } from '@apollo/client';
import getAllCountries from './schema';

const getAllCountriesAndRegions = () => useQuery(getAllCountries);

export default getAllCountriesAndRegions;
