interface UserRating {
  aggregate_rating?: number;
  rating_text?: string;
  rating_color?: string;
  votes?: number;
}
interface User {
  name?: string;
  zomato_handle?: string;
  foodie_level?: string;
  foodie_level_num?: number;
  foodie_color?: string;
  profile_url?: string;
  profile_deeplink?: string;
  profile_image?: string;
}
interface ResLocation {
  address?: string;
  locality?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  zipcode?: string;
  country_id?: number;
}
interface RestaurantL3 {
  id?: number;
  name?: string;
  url?: string;
  location?: ResLocation;
  average_cost_for_two?: number;
  price_range?: number;
  currency?: string;
  thumb?: string;
  featured_image?: string;
  photos_url?: string;
  menu_url?: string;
  events_url?: string;
  user_rating?: UserRating;
  has_online_delivery?: boolean;
  is_delivering_now?: boolean;
  has_table_booking?: boolean;
  deeplink?: string;
  cuisines?: string;
  all_reviews_count?: number;
  photo_count?: number;
  phone_numbers?: string;
  photos?: Photo[];
  all_reviews?: Review[];
}

interface Photo {
  id?: string;
  url?: string;
  thumb_url?: string;
  user?: User;
  res_id?: number;
  caption?: string;
  timestamp?: number;
  friendly_time?: string;
  width?: number;
  height?: number;
  comments_count?: number;
  likes_count?: number;
}
interface Review {
  rating?: number;
  review_text?: string;
  id?: number;
  rating_color?: string;
  review_time_friendly?: string;
  rating_text?: string;
  timestamp?: number;
  likes?: number;
  user?: User;
  comments_count?: number;
}

export interface Search {
  results_found?: number;
  results_start?: number;
  results_shown?: number;
  restaurants?: RestaurantL3[];
}
