import { createClient } from "@supabase/supabase-js";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);