// create a function component

import { redirect } from 'next/navigation';
import { LoginForm } from '../../components/shared/auth/LoginForm';
import { getSupabaseServerClient } from '@/app/utils/supabase_server_client';

const LoginPage = async () => {
    const supabaseClient = getSupabaseServerClient();
    const { data } = await supabaseClient.auth.getSession();
    if (data.session) {
        redirect('/');
    }

    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
