import dynamic from 'next/dynamic';

const BrandingClient = dynamic(() => import('./client'), { ssr: false });

export default function Branding() {
  return <BrandingClient />;
}
