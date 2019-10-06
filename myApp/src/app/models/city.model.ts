export interface City {
  status: string;
  location_suggestions?: CityDetails[];
}
interface CityDetails {
  id: number;
  name: string;
  country_id?: number;
  country_name?: string;
  is_state?: boolean;
  state_id?: number;
  state_name?: string;
  state_code?: string;
}
