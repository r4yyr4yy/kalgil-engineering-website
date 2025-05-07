import Image from "next/image"
import Link from "next/link"
import { CookieConsent } from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"
import { ProjectSlideshow } from "@/components/project-slideshow"
import { FixedHeader } from "@/components/fixed-header"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Industrial Process Optimization",
    description:
      "Redesigned manufacturing workflow resulting in 35% efficiency improvement for a major chemical plant.",
    image: "/images/projects/project1.jpeg",
  },
  {
    id: 2,
    title: "Sustainable Infrastructure Design",
    description:
      "Award-winning eco-friendly bridge design incorporating renewable materials and energy-efficient lighting.",
    image: "/images/projects/project2.jpeg",
  },
  {
    id: 3,
    title: "Advanced Mechanical Systems",
    description:
      "Custom-engineered precision components for aerospace applications with exceptional durability and performance.",
    image: "/images/projects/project3.jpeg",
  },
  {
    id: 4,
    title: "Smart Factory Implementation",
    description:
      "IoT-enabled factory monitoring system providing real-time analytics and predictive maintenance capabilities.",
    image: "/images/projects/project4.jpeg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <FixedHeader />

      {/* Empty space to compensate for fixed header */}
      <div className="h-16"></div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.jpg"
              alt="Engineering facility"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
              Innovative Engineering Solutions for All
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Expertise in process, civil, and mechanical engineering.
            </p>
            <Button className="bg-slate-200 text-slate-900 hover:bg-white">LEARN MORE</Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Kalgil Engineering</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Kalgil Engineering Solutions is a leading provider of innovative engineering services across multiple
                  industries. With decades of combined experience, our team of experts delivers cutting-edge solutions
                  tailored to meet the unique challenges of each client.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  We specialize in process engineering, civil engineering, and mechanical engineering, offering
                  comprehensive services from initial concept and design to implementation and ongoing support.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to excellence, innovation, and client satisfaction has established us as a trusted
                  partner for businesses seeking reliable engineering expertise.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/engineering-team.jpeg"
                  alt="Engineering team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Background Image */}
        <section id="services" className="relative py-24">
          <div className="absolute inset-0 z-0">
            <Image src="/images/services-background.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Our Services</h2>

            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Process Engineering</h3>
                <p className="text-gray-100">
                  Our process engineering services optimize production workflows, improve efficiency, and enhance
                  product quality through innovative solutions and technologies.
                </p>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Production workflow optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Quality control systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Resource utilization analysis</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Civil Engineering</h3>
                <p className="text-gray-100">
                  We provide comprehensive civil engineering services for infrastructure projects, including design,
                  analysis, and project management for buildings, roads, and utilities.
                </p>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Structural design and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Infrastructure development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Environmental compliance</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Mechanical Engineering</h3>
                <p className="text-gray-100">
                  Our mechanical engineering team designs and develops innovative mechanical systems, components, and
                  products that meet the highest standards of performance and reliability.
                </p>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Product design and prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Thermal and fluid systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automation and robotics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-white text-slate-900 hover:bg-gray-100">Learn More About Our Services</Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Explore Our Innovative Engineering Projects
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover how our engineering expertise has helped clients across various industries achieve their goals
              through innovative solutions and cutting-edge technology.
            </p>

            <div className="max-w-4xl mx-auto">
              <ProjectSlideshow projects={projectsData} />
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="mx-auto">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full md:w-auto">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kalgil Engineering Solutions</h3>
              <p className="text-slate-300">Providing innovative engineering solutions for all your needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-slate-300 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <address className="not-italic text-slate-300">
                <p>123 Engineering Way</p>
                <p>Anytown, ST 12345</p>
                <p className="mt-2">Email: info@kalgilengineering.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Kalgil Engineering Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  )
}
