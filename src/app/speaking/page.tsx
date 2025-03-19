"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Speaking() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Designers Éthiques",
      description: "Accessibility & inclusion: beyond compliance",
      location: "Online",
      date: "June 15, 2025",
      link: "#",
      badge: "Soon!"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Paris Web",
      description: "Pushing for accessibility as UX designers",
      location: "Paris, France",
      date: "October 12, 2024",
      link: "https://www.paris-web.fr/",
    },
    {
      id: 2,
      title: "Flupa",
      description: "Debunking accessibility myths",
      location: "Lyon, France",
      date: "May 5, 2024",
      link: "https://flupa.eu/",
    },
    {
      id: 3,
      title: "A11y Meetup Paris",
      description: "Neuroinclusive design for everyone",
      location: "Paris, France",
      date: "March 21, 2024",
      link: "#",
    },
    {
      id: 4,
      title: "Interaction Design Foundation",
      description: "Master Class: Designing for neurodiversity",
      location: "Online Webinar",
      date: "November 8, 2023",
      link: "#",
    },
    {
      id: 5,
      title: "AccessibilityCamp",
      description: "How to run inclusive user testing",
      location: "London, UK",
      date: "September 26, 2023",
      link: "#",
    },
    {
      id: 6,
      title: "Web2Day",
      description: "Inclusive design principles",
      location: "Nantes, France",
      date: "June 7, 2023",
      link: "#",
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Talks & workshops</h1>
            <p className="text-xl text-gray-600">
              I speak at conferences and run workshops about accessibility, inclusive design, and user research with disabled people.
            </p>
          </div>

          {/* Featured Talk */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Featured talk: Accessibility, play your cards right</h2>
                <p className="mb-4">
                  A practical workshop where teams learn accessibility principles through a card game. Each card presents a different accessibility challenge and participants need to design solutions.
                </p>
                <p className="mb-6">
                  This interactive format has been run at companies like MAIF, L'Oréal, and RATP, helping teams understand accessibility in a fun, engaging way.
                </p>
                <Link
                  href="/accessibility-deck"
                  className="inline-flex items-center bg-[#312e2b] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Learn about the deck →
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[240px]">
                  <Image
                    src="https://ext.same-assets.com/1652986384/3691149304.webp"
                    alt="Accessibility cards from the deck being used in a workshop"
                    fill
                    className="object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Upcoming events</h2>

            <ul className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <li key={event.id} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div>
                    {event.badge && <p className="text-green-600 mb-2">{event.badge}</p>}
                    <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                    <p className="mb-2">{event.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>{event.location}</p>
                      <p>{event.date}</p>
                    </div>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#81865a] hover:underline"
                    >
                      Event details →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Past events</h2>

            <ul className="grid md:grid-cols-3 gap-6">
              {pastEvents.map(event => (
                <li key={event.id} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                    <p className="mb-2">{event.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>{event.location}</p>
                      <p>{event.date}</p>
                    </div>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#81865a] hover:underline"
                    >
                      Event details →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Book me section */}
          <div className="bg-[#f1f6e0] p-8 rounded-lg mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Want me to speak at your event?</h2>
                <p className="mb-6">
                  I'm available for conferences, workshops, and in-house training on accessibility, inclusive design, user research with disabled people, and neuroinclusive design.
                </p>
                <a
                  href="mailto:hello@iamtamara.design"
                  className="inline-flex items-center bg-[#312e2b] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Get in touch →
                </a>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#81865a] text-white flex-shrink-0 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Practical, hands-on workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#81865a] text-white flex-shrink-0 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Accessible presentation materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#81865a] text-white flex-shrink-0 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Talks in English or French</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#81865a] text-white flex-shrink-0 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span>Real-world examples and case studies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
