import UserForm from '@/components/UserForm';
import Header from '@/components/Header';
import Side from '@/components/Side';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Side />
      <UserForm />
      <Footer />
    </main>
  );
}
