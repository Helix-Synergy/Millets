import React, { useState } from "react";

const faqLinks = {
  tracks:"/foodtech-conference-tracks/" ,
  abstractSubmission: "/abstract-submission",
  schedule:"/foodtech-event-schedule" ,
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is MILLETS-2026?",
    answer:
      "MILLETS-2026, officially titled the “Millets & Climate-Resilient Agriculture Summit”, is a premier international conference organized by Helix Conferences. It brings together agricultural scientists, climate experts, policymakers, farmers, agribusiness leaders, nutritionists, and researchers to explore the role of millets in sustainable agriculture, climate resilience, food security, and nutritional well-being.",
  },
  {
    question: "When and where will MILLETS-2026 take place?",
    answer:
      "MILLETS-2026 will take place in 2026. The exact dates and venue will be announced soon.",
  },
  {
    question: "What are the highlights of MILLETS-2026?",
    answer:
      "Keynote addresses, expert-led scientific sessions, millet-based farming innovations, climate-resilient agriculture case studies, policy discussions, technology showcases, and global networking opportunities.",
  },
  {
    question: "What conference tracks are featured at MILLETS-2026?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          MILLETS-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To exhibit your products or discuss sponsorship opportunities, please
        contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract for MILLETS-2026?",
    answer: (
      <>
        You can submit your abstract{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the summit?",
    answer:
      "Registered participants will receive a digital summit kit including the agenda, speaker profiles, scientific sessions, and exhibitor details.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Oral presentations are typically 15–20 minutes long, including Q&A. Final presentation guidelines will be shared after abstract acceptance.",
  },
  {
    question: "Who will be attending MILLETS-2026?",
    answer:
      "Agricultural scientists, climate researchers, policymakers, farmers, agri-entrepreneurs, food and nutrition experts, sustainability leaders, and academicians from around the world.",
  },
  {
    question: "How many people usually attend the summit?",
    answer:
      "MILLETS-2026 is expected to host 120+ international attendees, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I register for multiple speaking sessions?",
    answer:
      "Yes, speakers may submit multiple abstracts provided each submission covers a distinct topic.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Interested candidates should indicate their preference during abstract submission.",
  },
  {
    question: "What is expected of speakers?",
    answer:
      "Speakers are expected to deliver insightful presentations, share research or field-based experiences, and actively engage with participants.",
  },
  {
    question: "Is there a fee to participate as a speaker or attendee?",
    answer:
      "Yes, registration fees apply to all participants. Please visit the “Buy A Ticket” section on the website for detailed pricing information.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The detailed summit schedule will be released soon. You can view or
        download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session list before the event?",
    answer:
      "Yes, the complete scientific program, including session topics and speaker details, will be published prior to the summit dates.",
  },
  {
    question: "Can I purchase tickets in advance?",
    answer:
      "Yes, early registration is encouraged, as availability may be limited closer to the event.",
  },
  {
    question: "How can I get assistance with accommodation or travel?",
    answer: (
      <>
        For accommodation or travel-related assistance, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
