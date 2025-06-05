import React, { useEffect, useState, useRef } from 'react';
import { Utensils, MoveRight, Leaf, Fish, Beef, ChefHat } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Placeholder for sponsor logos (Unchanged from your version) ---
const SponsorLogo = ({ name }) => (
  <div className="text-white hover:text-amber-600 transition-colors duration-300 text-xs sm:text-sm font-medium">
    {name}
  </div>
);

// --- ElegantHeroSection (Unchanged from your version) ---
const ElegantHeroSection = () => {
  const heroImageUrl = '/Untitled-2-conecpt_hero2.png';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImageUrl;
    img.onload = () => setIsLoaded(true);
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [heroImageUrl]);

  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center text-orange-50 font-serif selection:bg-amber-500 selection:text-white"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-gray-100/10"></div>
      <div className="relative z-10 flex flex-col flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6 sm:py-7">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2.5 text-2xl font-semibold hover:opacity-90 transition-opacity duration-300 text-orange-100">
              <Utensils size={28} className="text-amber-400" />
              <span className="tracking-tight">Épice</span>
            </a>
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {['Our Story', 'Menu', 'Reservations'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white hover:text-amber-400 transition-colors duration-300 text-sm tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-stone-300 hover:text-amber-400 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </nav>
        <main className="flex-grow flex flex-col items-start justify-center py-16 sm:py-20 lg:py-24 text-left">
          <div className="w-full md:w-3/5 lg:w-1/2 xl:w-2/5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug mb-6 text-white"
            >
              The Art of<br />Flavor.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl text-white mb-10 max-w-md leading-relaxed "
            >
              Exquisite dishes crafted with passion, savored in an atmosphere of true elegance.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 1)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-400 text-white font-semibold py-3.5 px-10 rounded-lg text-base inline-flex items-center space-x-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 tracking-wide"
            >
              <span>Explore Our World</span>
              <MoveRight size={20} />
            </motion.button>
          </div>
        </main>
        <footer className="py-8 sm:py-10 mt-auto">
          <div className="border-t border-gray-100/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex items-center justify-center md:justify-start flex-wrap gap-x-8 sm:gap-x-10 gap-y-3">
              <SponsorLogo name="Le Gourmet" />
              <SponsorLogo name="Fine Table Co." />
              <SponsorLogo name="Artisan Foods" />
            </div>
            <p className="text-xs sm:text-sm text-stone-100 max-w-md text-center md:text-right leading-relaxed">
              A symphony of taste, where every ingredient tells a story.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// --- About Us Section (Unchanged from your version) ---
const AboutSection = () => {
  const sectionItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="our-story"
      className="py-24 sm:py-32 bg-orange-50 text-stone-700 font-serif"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <motion.div variants={sectionItemVariants}>
          <ChefHat size={48} className="mx-auto mb-8 text-amber-500" />
        </motion.div>
        <motion.h2
          variants={sectionItemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-700 mb-10 tracking-tight"
        >
          Our Culinary Philosophy
        </motion.h2>
        <motion.p
          variants={sectionItemVariants}
          className="text-lg sm:text-xl leading-relaxed mb-6 text-stone-600"
        >
          At Épice, we believe dining is an experience that tantalizes all senses. Our journey began with a simple passion: to blend timeless techniques with contemporary creativity, sourcing the finest seasonal ingredients to craft dishes that are both innovative and comforting.
        </motion.p>
        <motion.p
          variants={sectionItemVariants}
          className="text-lg sm:text-xl leading-relaxed text-stone-600"
        >
          We are more than a restaurant; we are storytellers, with each plate narrating a tale of dedication, artistry, and the pure joy of food. Join us for an unforgettable gastronomic adventure.
        </motion.p>
      </div>
    </motion.section>
  );
};

// --- Dish Data (Unchanged from your version) ---
const dishesData = [
  {
    name: "Saffron Risotto Milanese",
    description: "Creamy Arborio rice infused with saffron, Parmesan, and a hint of white wine. A classic reborn.",
    details: ["Arborio Rice", "Saffron", "Parmigiano", "Wine"],
    imageUrl: "/rissoto.png",
    icon: <Leaf size={24} className="text-green-600" />,
  },
  {
    name: "Pan-Seared Scallops",
    description: "Delicate U-10 scallops, seared to golden perfection, with lemon-butter sauce and asparagus.",
    details: ["Scallops", "Lemon", "Butter", "Asparagus"],
    imageUrl: "/scallops.png",
    icon: <Fish size={24} className="text-sky-600" />,
  },
  {
    name: "Filet Mignon Rosé",
    description: "Prime beef tenderloin, rosé wine reduction, and truffle dauphinoise potatoes.",
    details: ["Beef Tenderloin", "Rosé Wine", "Potatoes", "Truffle"],
    imageUrl: "filet.png", // Assuming this path is correct, like others
    icon: <Beef size={24} className="text-red-700" />,
  },
  {
    name: "Spiced Lamb Chops",
    description: "Tender lamb chops marinated in aromatic spices, grilled, with couscous and roasted vegetables.",
    details: ["Lamb Chops", "Spices", "Couscous", "Mint"],
    imageUrl: "lamb.png", // Assuming this path is correct
    icon: <ChefHat size={24} className="text-orange-700" />,
  },
];

// --- MODIFIED AnimatedDishItem Component ---
const AnimatedDishItem = ({ dish, index, totalDishes, scrollYProgress }) => {
  let currentPoint, prevPoint, nextPoint;

  if (totalDishes <= 1) {
    currentPoint = 0.5; 
    prevPoint = 0;
    nextPoint = 1;
  } else {
    const scrollPoints = Array.from({ length: totalDishes }, (_, i) => i / (totalDishes - 1));
    currentPoint = scrollPoints[index];
    
    if (index === 0) {
      prevPoint = currentPoint - (scrollPoints[1] - scrollPoints[0]); 
    } else {
      prevPoint = scrollPoints[index - 1];
    }

    if (index === totalDishes - 1) { 
      nextPoint = currentPoint + (scrollPoints[totalDishes - 1] - scrollPoints[totalDishes - 2]); 
    } else {
      nextPoint = scrollPoints[index + 1];
    }
  }
  
  const opacity = useTransform(
    scrollYProgress,
    [prevPoint, currentPoint, nextPoint],
    [0, 1, 0] 
  );

  const x = useTransform(
    scrollYProgress,
    [prevPoint, currentPoint, nextPoint],
    ["50%", "0%", "-50%"] 
  );

  // Subtle scale effect for the image when it's in focus
  const imageScale = useTransform(
    scrollYProgress,
    [prevPoint, currentPoint, nextPoint],
    [0.95, 1.05, 0.95] // Scale down, then up to focus, then down again
  );
  
  const staticOpacity = totalDishes === 1 ? 1 : opacity;
  const staticX = totalDishes === 1 ? "0%" : x;
  const animatedImageScale = totalDishes === 1 ? 1 : imageScale;


  return (
    <motion.div
      style={{
        opacity: staticOpacity,
        x: staticX,
        position: 'absolute', 
        width: '100%', 
        maxWidth: '880px', // Increased card size
        top: '50%', 
        left: '50%', 
        translateY: '-50%', 
        translateX: '-50%', 
      }}
      className="flex" // Simplified outer className, focusing on content alignment via style
    >
      {/* Inner container for layout and padding, maintaining transparency */}
      <div className="flex flex-col md:flex-row items-center bg-transparent rounded-2xl p-8 md:p-10 lg:p-12 w-full">
        {/* Image Container with Scale Animation */}
        <motion.div 
          style={{ scale: animatedImageScale }}
          className="w-full md:w-1/2 lg:w-6/12 flex-shrink-0 mb-8 md:mb-0 md:mr-8 lg:mr-12" // Gave image more space
        >
          <img
            src={dish.imageUrl}
            alt={dish.name}
            className="w-full h-auto object-contain rounded-2xl " // Changed to object-contain for full image visibility, increased rounding and shadow
          />
        </motion.div>

        {/* Text Content Container */}
        <div className="w-full md:w-1/2 lg:w-6/12 text-center md:text-left flex flex-col justify-center">
          <div className="flex justify-center md:justify-start items-center mb-4 lg:mb-5">
            {React.cloneElement(dish.icon, { size: 26, className: `${dish.icon.props.className} mr-3` })} {/* Slightly larger icon */}
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-amber-800 tracking-tight">{dish.name}</h3> {/* Larger title */}
          </div>
          <p className="text-stone-600 text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 lg:mb-8"> {/* Larger description, removed min-h */}
            {dish.description}
          </p>
          {dish.details && dish.details.length > 0 && (
            <div className="mt-auto"> {/* Pushes details to bottom if text content is short */}
              <h4 className="text-base lg:text-lg font-semibold text-stone-700 mb-3 tracking-wide">KEY INGREDIENTS:</h4>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2.5 lg:gap-3">
                {dish.details.map(detail => (
                  <li key={detail} className="text-sm lg:text-base text-stone-500 bg-amber-100/90 px-3 py-1.5 rounded-full shadow-sm"> {/* Enhanced tags */}
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};


// --- DishShowcaseSection Component (Unchanged from your version) ---
const DishShowcaseSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"] 
  });

  const scrollDurationPerDishVh = 175; 
  const calculateSectionHeight = (totalDishes) => {
    if (totalDishes <= 0) return '0px';
    if (totalDishes === 1) return '120vh'; 
    return `calc(${(totalDishes - 1) * scrollDurationPerDishVh}vh + 100vh)`;
  };

  return (
    <section 
      ref={sectionRef} 
      id="menu" 
      style={{ height: calculateSectionHeight(dishesData.length) }}
      className="relative bg-orange-50 text-stone-700 font-serif pt-20 sm:pt-28"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-amber-700 mb-10 sm:mb-16 tracking-tight pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
        >
          Signature Creations
        </motion.h2>
        <div className="relative flex-grow w-full flex items-center justify-center">
          {dishesData.map((dish, index) => (
            <AnimatedDishItem
              key={dish.name}
              dish={dish}
              index={index}
              totalDishes={dishesData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- RestaurantLandingPage Component (Unchanged from your version) ---
const RestaurantLandingPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FFF7ED';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="selection:bg-amber-500 selection:text-white bg-orange-50">
      <ElegantHeroSection />
      <AboutSection />
      <DishShowcaseSection />

      <section className="py-16 sm:py-20 bg-orange-50 text-stone-700 font-serif">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.button
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }} 
              viewport={{ once:true, amount:0.5 }} 
              transition={{ duration:0.6, delay:0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(217, 119, 6, 1)', color: 'white' }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent text-amber-600 font-semibold py-3.5 px-10 rounded-lg text-base inline-flex items-center space-x-2.5 shadow-md hover:shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 tracking-wide border border-amber-500"
          >
            <span>View Full Menu</span>
            <MoveRight size={20} />
          </motion.button>
        </div>
      </section>

       {/* MODIFIED Footer section */}
      <footer className="py-20 bg-amber-100 text-stone-600 border-t border-amber-200/70 font-serif">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href="#" className="flex items-center justify-center space-x-2.5 text-2xl font-semibold hover:opacity-90 transition-opacity duration-300 text-amber-700 mb-8">
            <Utensils size={28} className="text-amber-500" />
            <span className="tracking-tight">Épice</span>
          </a>
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-8">
            {['Our Story', 'Menu', 'Reservations', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-amber-600 transition-colors duration-300 text-sm text-stone-500"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-xs text-stone-500">&copy; {new Date().getFullYear()} Épice. All Rights Reserved. Crafted with passion.</p>
          <p className="text-xs mt-1.5 text-stone-500">123 Culinary Avenue, Flavor Town, CA 90210</p>
          {/* ADDED LINE BELOW */}
         <p className="text-xs mt-2 text-stone-500">
  Designed & Powered by{' '}
  <a 
    href="https://odyyn.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="underline hover:text-amber-600 transition-colors duration-300"
  >
    Odyyn, LLC
  </a>
</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantLandingPage;