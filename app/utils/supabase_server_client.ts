import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getSupabaseServerClient = () => {
    const cookieStore = cookies();

    return createServerComponentClient({ cookies: () => cookieStore });
};

export { getSupabaseServerClient };
