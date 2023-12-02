import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const getSupabaseUIClient = () => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    return createClientComponentClient({ supabaseUrl, supabaseKey });
};

export { getSupabaseUIClient };
