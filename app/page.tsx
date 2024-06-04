import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1 className=' mb-5 text-3xl font-semibold '>Hello World!</h1>
      <Link
        className=' bg-teal-950 text-gray-50 px-6 py-2 rounded '
        href='/users'
      >
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
