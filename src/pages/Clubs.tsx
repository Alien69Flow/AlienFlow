import React, { useState } from 'react';
import { ExternalLink, Users, Trophy, CalendarDays, Star } from 'lucide-react';

// Types
type Partner = {
  name: string;
  logo: string;
  url: string;
  merchImage?: string;
};

type Merchandise = {
  name: string;
  image: string;
  url: string;
};

// ============   STATS & CLUB TYPES   ============

type Club = {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  isFeatured?: boolean;
  isFree?: boolean;
  color: string; // Tailwind gradient classes
};

const StatsCard = ({ label, value, icon: Icon }: { label: string; value: string | number; icon: React.ComponentType<any> }) => (
  <div className="text-center p-4 card-border rounded-lg flex flex-col items-center justify-center bg-alien-space-dark/60 backdrop-blur-md">
    <Icon className="h-6 w-6 text-alien-gold mb-2" />
    <span className="text-alien-gold font-bold text-xl font-nasalization">{value}</span>
    <span className="text-gray-300 text-xs uppercase tracking-wide font-[Exo]">{label}</span>
  </div>
);

// Reusable card for clubs
const ClubCard = ({ club }: { club: Club }) => (
  <div className={`rounded-xl p-4 ${club.color} bg-opacity-10 border border-alien-gold/20 hover:border-alien-gold/50 backdrop-blur-md transition-all duration-300 hover:scale-105`}>
    <div className="flex items-start justify-between mb-3">
      <span className="text-alien-gold text-xs font-[Exo] px-2 py-0.5 bg-alien-gold/20 rounded-full border border-alien-gold/40">
        {club.category}
      </span>
      {club.isFree && <span className="text-alien-green text-[10px] font-[Exo] px-2 py-0.5 bg-alien-green/20 rounded-full border border-alien-green/40">FREE</span>}
    </div>
    <h3 className="text-alien-gold font-semibold font-nasalization mb-2 text-lg leading-tight">
      {club.name}
    </h3>
    <p className="text-sm text-gray-300 mb-4 leading-relaxed font-[Exo] line-clamp-3">
      {club.description}
    </p>
    <div className="flex items-center justify-between text-xs text-gray-400 font-[Exo]">
      <div className="flex items-center gap-1">
        <Users className="h-3 w-3" /> {club.members.toLocaleString()}
      </div>
      {club.isFeatured && (
        <div className="flex items-center gap-1 text-alien-gold">
          <Star className="h-3 w-3" /> Featured
        </div>
      )}
    </div>
  </div>
);

// Reusable card for partners
const PartnerCard = ({ partner }: { partner: Partner }) => (
  <a
    href={partner.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-alien-space-dark/70 backdrop-blur-md rounded-xl p-4 border border-alien-gold/20 hover:border-alien-gold/50 transition-all duration-300 hover:scale-105 group flex flex-col items-center justify-center"
  >
    <div className="w-16 h-16 mb-3 flex items-center justify-center">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <span className="text-alien-gold font-semibold text-sm text-center mb-1 font-[Exo]">
      {partner.name}
    </span>
    <ExternalLink className="w-4 h-4 text-alien-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

// (Removed MerchandiseCard as merchandise feature deprecated)

const Clubs: React.FC = () => {
  /* ---------------- DATA ---------------- */
  const clubs: Club[] = [
    {
      id: 'ai-catflow',
      name: 'AI CatFlow',
      description: 'A cutting-edge AI club focused on decentralized feline cognition and flow states.',
      category: 'AI',
      members: 1256,
      isFeatured: true,
      isFree: true,
      color: 'bg-gradient-to-br from-fuchsia-600/20 to-pink-500/20',
    },
    {
      id: 'ai-sciflow',
      name: 'AI SciFlow',
      description: 'Exploring scientific breakthroughs with generative AI for better cosmic understanding.',
      category: 'Science',
      members: 987,
      isFeatured: true,
      isFree: true,
      color: 'bg-gradient-to-br from-emerald-600/20 to-teal-500/20',
    },
    {
      id: 'alt-wellness',
      name: 'Alternative Wellness ASFlow DAO',
      description: 'Holistic wellness meets Web3. Join to co-create regenerative health protocols.',
      category: 'Wellness',
      members: 1612,
      isFeatured: true,
      isFree: false,
      color: 'bg-gradient-to-br from-purple-600/20 to-indigo-500/20',
    },
    {
      id: 'bio-innovations',
      name: 'Bio Innovations',
      description: 'Biotech entrepreneurs collaborating on regenerative finance solutions.',
      category: 'Biotech',
      members: 542,
      color: 'bg-gradient-to-br from-green-600/20 to-lime-500/20',
      isFree: true,
    },
    {
      id: 'rnd-guardians',
      name: 'R&D Guardians',
      description: 'Open research & development for interstellar technologies and quantum finance.',
      category: 'Research',
      members: 721,
      color: 'bg-gradient-to-br from-cyan-600/20 to-blue-500/20',
      isFree: false,
    },
    {
      id: 'bim-architects',
      name: 'BIM Architects',
      description: 'Designing sustainable habitats using blockchain-integrated BIM workflows.',
      category: 'Architecture',
      members: 389,
      color: 'bg-gradient-to-br from-amber-600/20 to-orange-500/20',
      isFree: true,
    },
    {
      id: 'stg-guardians',
      name: 'IPFS Guardians',
      description: 'Custodians of decentralized storage and knowledge preservation across galaxies.',
      category: 'Storage',
      members: 468,
      color: 'bg-gradient-to-br from-indigo-600/20 to-violet-500/20',
      isFree: true,
    },
    {
      id: 'social-networks',
      name: 'Social Networks',
      description: 'Building next-gen social graphs prioritizing privacy and equitable rewards.',
      category: 'Social',
      members: 812,
      color: 'bg-gradient-to-br from-rose-600/20 to-pink-500/20',
      isFree: false,
    },
  ];

  const categories = ['All', ...Array.from(new Set(clubs.map(c => c.category)))];

  const upcomingEvents = [
    { id: 1, title: 'Blockchain Workshop', date: '25 Aug', url: '#' },
    { id: 2, title: 'Governance Proposal Round', date: '02 Sep', url: '#' },
    { id: 3, title: 'NFT Creative Jam', date: '10 Sep', url: '#' },
  ];

  /* ---------------- STATE ---------------- */
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredClubs = selectedCategory === 'All' ? clubs : clubs.filter(c => c.category === selectedCategory);

  // Official partners with links & (optional) merchandise images
  const officialPartners: Partner[] = [
    { name: 'Aragon DAO', logo: '/lovable-uploads/AragonDAOLogo.svg', url: 'https://www.aragon.org/' },
    { name: 'Virgo', logo: '/lovable-uploads/VirgoLogo.svg', url: 'https://www.virgo-gw.eu/' },
    { name: 'Unity Learn', logo: '/lovable-uploads/UnityLearnLogo.svg', url: 'https://learn.unity.com/' },
    { name: 'Udacity', logo: '/lovable-uploads/UdacityLogo.svg', url: 'https://www.udacity.com/' },
    { name: 'OpenUpEd', logo: '/lovable-uploads/OpenUpEdLogo.jpeg', url: 'https://openuped.eu/' },
    { name: 'OE Global', logo: '/lovable-uploads/OEGlobalLogo.jpeg', url: 'https://oeglobal.org/' },
    { name: 'UNSSC', logo: '/lovable-uploads/UNSSCLogo.png', url: 'https://unssc.org/' },
    { name: 'Skillshare', logo: '/lovable-uploads/SkillShareLogo.jpeg', url: 'https://www.skillshare.com/' },
    { name: 'DappRadar', logo: '/lovable-uploads/DappRadarLogo.jpeg', url: 'https://dappradar.com/' },
    { name: 'CoinMarketCap', logo: '/lovable-uploads/CoinMarketCapLogo.jpeg', url: 'https://coinmarketcap.com/' },
    { name: 'CoinGecko', logo: '/lovable-uploads/CoinGeckoLogo.svg', url: 'https://www.coingecko.com/' },
    { name: 'CoinGlass', logo: '/lovable-uploads/CoinGlassLogo.jpeg', url: 'https://www.coinglass.com/' },
    { name: 'Behance', logo: '/lovable-uploads/BehanceLogo.jpeg', url: 'https://www.behance.net/' },
    { name: 'Upwork', logo: '/lovable-uploads/UpWorkLogo.png', url: 'https://upwork.com/' },
    { name: 'WeWork', logo: '/lovable-uploads/WeWorkLogo.png', url: 'https://wework.com/' },
    { name: 'AulaFacil', logo: '/lovable-uploads/AulaFacilLogo.png', url: 'https://www.aulafacil.com/' },
    { name: 'Grow with Google', logo: '/lovable-uploads/GrowGoogleLogo.png', url: 'https://grow.google/' },
    { name: 'Hotmart', logo: '/lovable-uploads/HotmartLogo.png', url: 'https://www.hotmart.com/' },
    { name: 'MasterClass', logo: '/lovable-uploads/MasterClasssLogo.jpeg', url: 'https://masterclass.com/' },
    { name: 'edX', logo: '/lovable-uploads/edXLogo.png', url: 'https://www.edx.org/' },
    { name: 'MOOC', logo: '/lovable-uploads/MoocLogo.png', url: 'https://mooc.org/' },
  ];

  // Merchandise feature removed

  return (
    <div className="min-h-screen relative">
      <main className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        {/* ---------  STATS  --------- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <StatsCard label="Active Clubs" value={clubs.length} icon={Trophy} />
          <StatsCard label="Members" value={clubs.reduce((acc, c) => acc + c.members, 0).toLocaleString()} icon={Users} />
          <StatsCard label="Upcoming Events" value={upcomingEvents.length} icon={CalendarDays} />
          <StatsCard label="Categories" value={categories.length - 1} icon={Star} />
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <img
            src="/lovable-uploads/ClubLogo.png"
            alt="Clubs Official Logo"
            className="mx-auto h-16 w-16 object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold font-nasalization mb-4">
            Clubs
          </h1>
          <p className="text-gray-300 font-[Exo] max-w-2xl mx-auto">
            Descubre clubs y partners oficiales de la comunidad AlienFlowSpace.
          </p>
        </div>

        {/* ---------  FEATURED CLUBS  --------- */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-alien-green mb-6 font-[Atomic Age] text-center">Featured Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.filter(c => c.isFeatured).map(c => (
              <ClubCard key={c.id} club={c} />
            ))}
          </div>
        </section>

        {/* ---------  ALL CLUBS & SIDEBAR  --------- */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-alien-green font-[Atomic Age]">All Clubs</h2>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-alien-space-dark/60 border border-alien-gold/30 rounded-md px-3 py-1 text-sm text-alien-gold focus:outline-none focus:border-alien-gold"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredClubs.map(c => (
                <ClubCard key={c.id} club={c} />
              ))}
            </div>
          </div>

          {/* Sidebar Column for Upcoming Events */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-alien-green mb-4 font-[Atomic Age] text-center lg:text-left">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map(ev => (
                  <a key={ev.id} href={ev.url} className="block p-4 rounded-lg bg-alien-space-dark/60 backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between">
                      <span className="text-alien-gold font-[Exo] text-sm">{ev.title}</span>
                      <span className="text-alien-green font-[Exo] text-xs">{ev.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Community Chat Placeholder */}
            <div className="p-4 rounded-lg bg-alien-space-dark/60 backdrop-blur-md border border-alien-gold/20">
              <h3 className="text-xl font-bold text-alien-green mb-3 font-[Atomic Age] text-center lg:text-left">Community Chat</h3>
              <p className="text-gray-300 text-sm font-[Exo] text-center lg:text-left">Join our Telegram to connect with other explorers!</p>
              <div className="mt-4 flex justify-center lg:justify-start">
                <a href="#" className="bg-alien-gold text-alien-space-dark font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-alien-gold-light transition-colors">Join Chat</a>
              </div>
            </div>
          </div>
        </section>

        {/* Official Partners Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-alien-green mb-10 text-center font-[Atomic Age]">
            Official Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {officialPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>

        {/* Merchandise Section removed */}
      </main>
    </div>
  );
};

export default Clubs;
