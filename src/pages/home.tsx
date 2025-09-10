/* Generated from SiteSpec */
import Centered from "@/sections/Centered";
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import WithTestimonial from "@/sections/WithTestimonial";

export default function home(){
  return (<main>
    <Centered {...{
  headline: "Welcome to Clean Code Test",
  subhead: "Where Quality Meets Excellence",
  imageUrl: "https://example.com/image.jpg",
  primaryCta: {
    text: "Get Started Now",
    href: "/get-started"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/about"
  }
}} />
    <ThreeTiersWithToggle {...{
  title: "Flexible Pricing Plans",
  subtitle: "Choose the plan that fits your needs",
  showToggle: true,
  tiers: [
    {
      name: "Basic",
      id: "basic",
      href: "/pricing/basic",
      price: {
        monthly: "$19",
        annually: "$199"
      },
      description: "Ideal for individuals starting their coding journey.",
      features: [
        "Access to basic tests",
        "Email support",
        "Community forums"
      ],
      mostPopular: false
    },
    {
      name: "Pro",
      id: "pro",
      href: "/pricing/pro",
      price: {
        monthly: "$49",
        annually: "$499"
      },
      description: "Perfect for professionals looking to enhance their skills.",
      features: [
        "All Basic features",
        "Advanced tests",
        "Priority support",
        "Monthly webinars"
      ],
      mostPopular: true
    },
    {
      name: "Enterprise",
      id: "enterprise",
      href: "/pricing/enterprise",
      price: {
        monthly: "$99",
        annually: "$999"
      },
      description: "Comprehensive solutions for teams and organizations.",
      features: [
        "All Pro features",
        "Custom tests",
        "Dedicated account manager",
        "Team training sessions"
      ],
      mostPopular: false
    }
  ]
}} />
    <OffsetWithFeatureList {...{
  title: "Key Features",
  subtitle: "What Makes Us Stand Out",
  items: [
    {
      title: "Quality Assurance",
      body: "Our rigorous testing ensures your code is clean and efficient.",
      icon: "check-circle"
    },
    {
      title: "User-Friendly Interface",
      body: "Navigate effortlessly with our intuitive design.",
      icon: "desktop"
    },
    {
      title: "Flexible Pricing",
      body: "Choose a plan that fits your needs without breaking the bank.",
      icon: "dollar-sign"
    },
    {
      title: "Expert Support",
      body: "Our team is here to assist you 24/7 with any inquiries.",
      icon: "headset"
    }
  ]
}} />
    <WithTestimonial {...{
  headline: "What Our Customers Say",
  subhead: "Real feedback from real users.",
  imageUrl: "https://example.com/testimonial-image.jpg",
  primaryCta: {
    text: "Read More Testimonials",
    href: "/testimonials"
  },
  secondaryCta: {
    text: "Join Our Community",
    href: "/signup"
  }
}} />
  </main>);
}
