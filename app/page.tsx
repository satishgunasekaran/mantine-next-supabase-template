import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarMinimal } from '@/components/shared/navbar/NavbarMinimal';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function HomePage() {
  // implement protected routes of supabase

  // use cookies
  const supabase =  createServerComponentClient( {
    cookies: cookies,
  });
  


  const {data : {session}} = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }


  return (
    <>
      {/* i want navbar minial to be taking full screen */}
      <NavbarMinimal />
    </>
  );
}
