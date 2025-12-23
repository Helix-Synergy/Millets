import React from "react";
import about_img from "../assets/about_img.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">

      {/* Image Section */}
      {/* <div className="flex justify-center">
        <img
          src={about_img}
          alt="Dental Conference 2026"
          loading="lazy"
          className="h-[50%] md:max-h-[50%] w-auto md:w-[80vh] md:mx-16 rounded-2xl object-cover"
        />
      </div> */}
    <div className="flex justify-center">
        <img
          src={about_img}
          alt="MILLETS"
className="h-[40vh] md:min-h-[50vh] max-h-[420px] w-auto md:max-w-[420px] mx-auto md:mx-16 rounded-xl object-contain"
loading="lazy"
        />
      </div>



      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Advancing Global Leadership  </span>{" "}
       in Millets & Climate-Resilient Agriculture
        </h1>
        <p className="text-base my-2">
     Welcome to the premier global platform for the   <Link to="https://helixconferences.com/buy-a-ticket"  className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">Millets & Climate-Resilient Agriculture Conference.</Link>  Our international summits convene leading experts and decision-makers driving advancements in millets cultivation, climate-resilient farming, sustainable food systems, and agri-biotechnology for nutrition security.
The conference brings together researchers, agronomists, farmers, policymakers, industry leaders, and sustainability professionals to address critical challenges and opportunities shaping the <Link to="/event_partners"  className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">future of climate-smart agriculture and resilient food systems.</Link> {" "}
          <Link
            className="text-accent font-bold"
            target="_blank"
            to="https://helixconferences.com/blog.php"
          ></Link>{" "}
        </p>
<p>“Empowering Sustainable Agriculture and Food Security Through Millets & Climate-Resilient Innovation”</p>
        <Link to="/about-millets-conclave">
          <button className="flex bg-one text-white px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
