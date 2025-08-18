import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StarBackground from './StarBackground';

const Layout: React.FC = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const bgMap: Record<string, string> = {
    '/': "/lovable-uploads/EMWBack.png",
    '/academy': "/lovable-uploads/9e48e9b3-7a5a-4c0a-b89d-9cbbef58d7a7.png",
    '/alien-trip': "/lovable-uploads/74c23ca3-be80-46d6-9817-d6a5cde81736.png",
    '/conetworking': "/lovable-uploads/debf8db3-f2a1-4235-9e43-f6b8ba371818.png",
    '/clubs': "/lovable-uploads/630f07a8-9ff5-4bd8-9881-91336cfaf826.png",
    '/contact': "/lovable-uploads/78a366c8-b4ad-4ae7-8358-3aae322b228f.png",
    '/about': "/lovable-uploads/808e8413-144f-4a4c-834a-cc55fceac706.png",
  };
  const bgImage = bgMap[location.pathname] || "/lovable-uploads/EMWBack.png";

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Star background effect - also behind content */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -20 }}>
        <StarBackground />
      </div>

      <Header />
      <main className="flex-1 relative z-10 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
