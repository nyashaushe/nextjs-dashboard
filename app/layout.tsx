import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// This layout is used for all pages in the app directory 
// and is the root layout for the app
// It wraps the entire application and provides a consistent layout 
// across all pages
// It includes the global CSS styles and the Inter font
// It also sets the metadata for the application
// The layout is a functional component that takes in children as props
// and returns a JSX element that represents the layout of the application
// The layout is a server component, which means it can fetch data and render on the server
// The layout is a top-level component that is used to wrap the entire application
// The layout is a functional component that takes in children as props


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}