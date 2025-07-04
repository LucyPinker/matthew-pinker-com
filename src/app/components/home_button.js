import { usePathname } from 'next/navigation';

const HomeButton = () => {
  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12L11.204 3.045a1.125 1.125 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );

  const pathname = usePathname();
  const notHome = pathname !== '/' && !pathname.includes('/matthew-pinker-com');

  return (
    <div className={`absolute top-8 left-8 ${notHome ? 'visible' : 'invisible'}`}>
      <a href="/matthew-pinker-com">
        <HomeIcon />
      </a>
    </div>
  );
};

export default HomeButton;
