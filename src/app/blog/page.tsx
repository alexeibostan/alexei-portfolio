"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Being blind on the Internet",
      description: "Accessibility is more than compliance. Sylvie Duchateau, a blind accessibility expert, shares her frustrations, barriers, and how she fights for change.",
      duration: "13 minutes",
      image: "https://ext.same-assets.com/2806209813/2126766149.avif",
      slug: "being-blind-on-the-internet"
    },
    {
      id: 2,
      title: "Disability isn't extraordinary",
      description: "Learn why we need to normalize disability in our designs and communications, and avoid inspiration porn.",
      duration: "10 minutes",
      image: "https://ext.same-assets.com/2629827493/817408965.avif",
      slug: "disability-isnt-extraordinary"
    },
    {
      id: 3,
      title: "Defending digital accessibility",
      description: "Strategies to advocate for accessibility in your organization and make it a priority in the design process.",
      duration: "8 minutes",
      image: "https://ext.same-assets.com/4114944593/2263969589.avif",
      slug: "defending-accessibility"
    },
    {
      id: 4,
      title: "Designing for Deaf users",
      description: "Best practices for making digital experiences accessible for Deaf and hard of hearing people.",
      duration: "11 minutes",
      image: "https://ext.same-assets.com/1863528744/497087517.avif",
      slug: "designing-for-deaf-users"
    },
    {
      id: 5,
      title: "Easy checks for accessibility compliance",
      description: "Simple steps to evaluate the accessibility of your designs and ensure they meet basic standards.",
      duration: "9 minutes",
      image: "https://ext.same-assets.com/941845126/1750523315.avif",
      slug: "easy-checks-for-accessibility-compliance"
    },
    {
      id: 6,
      title: "Designing for autistic users",
      description: "How to create inclusive experiences for people on the autism spectrum.",
      duration: "12 minutes",
      image: "https://ext.same-assets.com/2208374048/2556260062.avif",
      slug: "neuroinclusive-design-autism"
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The accessible design blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Here's some tips to start designing accessible, inclusive experiences
          </p>

          <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].slug}`} className="block bg-white rounded-lg overflow-hidden border border-gray-200 transition-shadow hover:shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-3">{blogPosts[0].title}</h2>
                  <p className="mb-4">{blogPosts[0].description}</p>
                  <p className="text-sm text-gray-500">{blogPosts[0].duration}</p>
                </div>
                <div className="flex items-center justify-center p-4">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={blogPosts[0].image}
                      alt="Illustration for article about being blind on the internet"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-[#f1f6e0] p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Need help getting started?</h2>
            <p className="mb-6">
              Accessibility can seem intimidating. Here's a curated list of courses, blogs, and tools to design inclusive experiences.
            </p>
            <Link
              href="/accessibility-resources"
              className="inline-flex items-center bg-[#312e2b] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Accessibility resources →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {blogPosts.slice(1).map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg overflow-hidden border border-gray-200 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex">
                  <div className="w-16 h-16 mr-4 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={post.image}
                        alt={`Illustration for ${post.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
                    <div className="w-20 h-1 bg-[#f1f6e0] mb-2"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-[#f1f6e0] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">More ways to learn</h2>
            <p className="mb-6">
              Not everyone learns best by reading. If you prefer watching a talk or joining a hands-on workshop, check out my talks page. You'll find upcoming events and past conference recordings with practical insights to help design more inclusive products.
            </p>
            <Link
              href="/speaking"
              className="inline-flex items-center bg-[#312e2b] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Browse my talks →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
