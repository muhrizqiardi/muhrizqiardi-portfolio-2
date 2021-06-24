import { useRouter } from 'next/router'
import { useEffect } from 'react';

function Main(props) {
  const router = useRouter();
  useEffect(() => {
    const lang = window.navigator.language.toLowerCase();
    if (['en', 'id', 'jp'].includes(lang)) {
      router.push(`/${lang}`);
    } else {
      router.push(`/en`);
    }
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <p>Redirecting...</p>
    </div>
  );
}
export default Main;
