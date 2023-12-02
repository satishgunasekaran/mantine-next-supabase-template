// create a function component
import { redirect } from 'next/navigation';
import RegisterForm from '@/components/shared/auth/RegisterForm';
import { getSupabaseServerClient } from '@/app/utils/supabase_server_client';

const RegisterPage = async () => {
    const supabaseClient = getSupabaseServerClient();
    const { data } = await supabaseClient.auth.getSession();
    if (data.session) {
        redirect('/');
    }
    return (
        <div>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
