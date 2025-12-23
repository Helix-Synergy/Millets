import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpeg";
import img2 from "../assets/tracks/img2.jpeg"
import img3  from "../assets/tracks/img3.jpeg";
import img4 from "../assets/tracks/img4.jpeg";
import img5 from "../assets/tracks/img5.jpeg";
import img6 from "../assets/tracks/img6.jpeg"
import img7 from "../assets/tracks/img7.jpeg";
import img8 from "../assets/tracks/img8.jpeg"
import img9 from "../assets/tracks/img9.jpeg";
import img10 from "../assets/tracks/img10.jpeg"
import img11 from "../assets/tracks/img11.jpeg";
import img12 from "../assets/tracks/img12.jpeg"
import img13 from "../assets/tracks/img13.jpeg";
import img14 from "../assets/tracks/img14.jpeg"
import img15 from "../assets/tracks/img15.jpeg";
import img16 from "../assets/tracks/img16.jpeg"
import img17 from "../assets/tracks/img17.jpeg"
import img18 from "../assets/tracks/img18.jpeg";
import img19 from "../assets/tracks/img19.jpeg"
import img20 from "../assets/tracks/img20.jpeg"

export const tracks = [
  {
    image: img1,
    title: "Millet Biodiversity",
    description: (
      <>
   Explore the rich diversity of millets, their role in sustainable agriculture, and nutritional significance. This track highlights conservation strategies, breeding innovations, and traditional knowledge, promoting resilient farming systems. Engage with experts to understand how{" "}
        <Link
          to="/millets-event-schedule"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        millet biodiversity 
        </Link> supports food security, climate adaptation, and healthy diets globally.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Agroecology & Crop Physiology of Millets",
    description: (
      <>
       This track delves into the{" "}
        <Link
          to="/about-millets-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         agroecological
        </Link>{" "}  practices and physiological traits of millets that enhance productivity and resilience. Focus areas include soil health, water use efficiency, stress tolerance, and crop management strategies. Participants will gain insights into sustainable millet cultivation and innovations supporting climate-resilient agriculture.
      </>
    ),
  },

  {
    image: img3,
    title: "Millet-Based Cropping Systems",
    description: (
      <>
      Explore sustainable{" "}
        <Link
          to="/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       millet-based cropping systems
        </Link> that optimize productivity, soil health, and resource use efficiency. This track covers intercropping, crop rotation, and integrated farming approaches, highlighting strategies to enhance food security, diversify income, and build climate-resilient agricultural landscapes. Engage with innovations shaping sustainable millet cultivation.
      </>
    ),
  },

  {
    image: img4,
    title: "Intercropping, Polyculture & Sustainable Intensification",
    description: (
      <>
       This track focuses on innovative cropping strategies that enhance productivity, biodiversity, and resource-use efficiency. Explore intercropping, polyculture, and sustainable intensification practices that improve soil health, resilience, and food security. Engage with research and case studies demonstrating how diversified systems support sustainable and  {" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   climate-smart agriculture.
        </Link>{" "}
  
      </>
    ),
  },

  {
    image: img5,
    title: "Breeding Innovations & Stress-Tolerant Millet Varieties",
    description: (
      <>
    This track highlights advances in millet breeding, focusing on developing stress-tolerant, high-yielding varieties. Explore genomic tools, molecular breeding, and traditional knowledge integration to enhance resilience against drought, pests, and climate challenges. Engage with experts driving innovations that strengthen food security and sustainable millet production.{" "}
        {/* <Link
          to="/foodtech-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        precision agriculture 
        </Link>{" "} */}
 
      </>
    ),
  },

  {
    image: img6,
    title: "Soil–Millet Interactions",
    description: (
      <>
  Explores the dynamic relationship between millets and soil health, emphasizing nutrient cycling, soil fertility, and
        <Link
          to="/millets-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       microbiome interactions
        </Link>{" "} Focus areas include sustainable soil management, organic amendments, and crop-soil feedbacks that enhance millet productivity. Engage with research advancing resilient, climate-smart, and resource-efficient millet cultivation systems.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Climate-Resilient Farming Models",
    description: (
      <>
This track focuses on farming strategies that enhance resilience to climate change. Explore adaptive millet-based systems, water-efficient practices, and risk management approaches that sustain productivity under extreme weather. Engage with innovations and case studies demonstrating how climate-smart agriculture ensures food security, environmental sustainability, and farmer livelihoods.{" "}
        {/* <Link
          to="/foodtech-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       
        </Link>{" "} */}
      </>
    ),
  },

  {
    image:  img8,
    title: "Micro-Irrigation, Moisture Retention & Hydrology in Millets",
    description: (
      <>
      This track highlights efficient water management in millet cultivation. Focus areas include {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     micro-irrigation techniques,
        </Link>{" "} soil moisture conservation, and hydrological practices that optimize water use and enhance crop resilience. Engage with research and innovations promoting sustainable, water-smart millet farming in water-scarce and climate-vulnerable regions.
      </>
    ),
  },

  {
    image: img9,
    title: "Disaster-Resilient Agriculture",
    description: (
      <>
      his track explores strategies to strengthen agriculture against natural disasters and climate extremes. Focus areas include resilient millet varieties, risk-adaptive cropping systems, and early-warning integration. Engage with research and innovations that enhance food security, protect farmer livelihoods, and build sustainable, {" "}
        <Link
          to="/about-millets-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      disaster-resilient agricultural 
        </Link>{" "} landscapes in vulnerable regions.
     
      </>
    ),
  },

  {
    image: img10,
    title: "Precision Agriculture for Millets",
    description: (
      <>
This track focuses on applying{" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        precision agriculture technologies to millet
        </Link>{" "} cultivation. Explore remote sensing, GPS-guided farming, soil and crop monitoring, and data-driven decision-making to optimize inputs, increase yields, and enhance sustainability. Engage with innovations shaping efficient, climate-smart, and resource-conserving millet production systems.
  
      </>
    ),
  },

  {
    image: img11,
    title: "AI/ML-Based Yield Forecasting & Pest Prediction",
    description: (
      <>
       This track explores the use of artificial intelligence and machine learning in {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         millet agriculture.
        </Link> 
  Focus areas include predictive models for crop yields, early pest and disease detection, and data-driven decision support. Engage with cutting-edge innovations enhancing productivity, sustainability, and climate resilience in millet farming systems.
      </>
    ),
  },

  {
    image: img12,
    title: "Post-Harvest Technologies",
    description: (
      <>
  This track focuses on innovations in millet post-harvest management, including storage, processing, and value addition. Explore techniques that reduce losses, enhance shelf-life, and improve product quality. Engage with research and technologies that strengthen food security, increase marketability, and promote sustainable, profitable millet value chains. {" "}
        {/* <Link
          to="/millets-conference-tracks/"" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      micro-catchments
        </Link>{" "}   */}
  
      
      </>
    ),
  },

  {
    image: img13,
    title: "Millet Nutrition, Bioavailability & Health Benefits",
    description: (
      <>
This track explores the nutritional value of millets, focusing on bioavailability, micronutrients, and functional properties. Discuss the role of millets in promoting health, preventing lifestyle diseases, and supporting dietary diversity. Engage with research and innovations that enhance millet-based nutrition for sustainable and{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        healthy diets.
        </Link> 
      
        
      </>
    ),
  },

  {
    image: img14,
    title: "Food Processing & Millet-Based Functional Foods",
    description: (
      <>
   This track highlights innovations in millet processing and the development of functional foods. Focus areas include value addition, nutraceuticals, and product diversification to enhance health benefits. Engage with {" "}
        <Link
          to= "/about-millets-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        research and technologies 
        </Link> that transform millets into safe, nutritious, and market-ready functional food products.
      </>
    ),
  },

  {
    image: img15,
    title: "Millet Entrepreneurship",
    description: (
      <>
        {" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Foodborne Microbial 
        </Link> */}
This track focuses on fostering entrepreneurship in the millet value chain. Explore opportunities in production, processing, marketing, and value-added millet products. Engage with success stories, business models, and innovations that empower farmers and startups, promote sustainable livelihoods, and drive growth in the millet-based economy.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Millet Policy Frameworks",
    description: (
      <>
This track explores policies and regulatory frameworks that support millet cultivation, value addition, and market development. Focus areas include food security strategies, subsidies, climate-resilient agriculture incentives, and research support. Engage with policymakers, experts, and stakeholders shaping sustainable millet production and promoting millet-based {" "}
        <Link
          to="/millets-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
           economic growth.
        </Link>

      </>
    ),
  },

  {
    image: img17,
    title: "Smart Farm Management for Dryland Crops",
    description: (
      <>
      This track focuses on innovative farm management strategies for{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
           dryland crops, 
        </Link> 
 including millets. Explore precision agriculture, water-efficient practices, soil health monitoring, and decision-support tools. Engage with research and technologies that enhance productivity, resilience, and sustainability in dryland farming systems under climate variability and resource constraints.
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Physiology of Millets Under Stress Conditions",
    description: (
      <>
     This track explores how millets respond physiologically to abiotic and biotic stresses, including drought, heat, and pest pressures. Focus areas include{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          photosynthesis, 
        </Link> 
water-use efficiency, and adaptive mechanisms. Engage with research revealing insights into stress tolerance, resilience, and strategies to improve millet productivity under challenging environmental conditions.
      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "3D Printing",
    description: (
      <>
 This track explores innovations in  {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  3D printing technology
        </Link>  and its applications across industries. Focus areas include materials science, prototyping, manufacturing, and customized product development. Engage with research, case studies, and emerging trends demonstrating how 3D printing is transforming production, design, and sustainable manufacturing solutions.
      </>
    ),
  },
  {
    image: img20,
    title: "Millet Malting & Brewing Science",
    description: (
      <>
    This track focuses on the malting and brewing potential of millets. Explore processes, enzymatic activities, fermentation techniques, and product development for traditional and modern beverages. Engage with innovations that enhance quality, flavor, and nutritional value, promoting millet-based malts and brews in the {" "}
        <Link
          to="/about-millets-conclave" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      food & beverage industry.
        </Link>{" "} 
   
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
