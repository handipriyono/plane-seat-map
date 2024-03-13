const { VITE_API_GATEWAY, VITE_API_KEY_SUPABASE } = import.meta.env;

const config = {
  APIGateway: VITE_API_GATEWAY || "",
  APIKeySupabase: VITE_API_KEY_SUPABASE || "",
};

export default config;
