import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarMinimal } from '@/components/shared/navbar/NavbarMinimal';

export default async function HomePage() {
  // implement protected routes of supabase

  // use cookies
  const supabase = createServerComponentClient({
    cookies,
  });

  const { data: { session } } = await supabase.auth.getSession();

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
