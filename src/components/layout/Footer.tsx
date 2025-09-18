'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleNewsletterSignup = () => {
    router.push('/newsletter');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'SAP Solutions',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'SAP Modules', href: '/sap-modules' },
        { name: 'Integration APIs', href: '/integration-apis' },
        { name: 'Data Migration', href: '/data-migration' },
        { name: 'Technical Documentation', href: '/technical-docs' },
      ],
    },
    {
      title: 'Enterprise',
      links: [
        { name: 'About SAP Integrator', href: '/about' },
        { name: 'Implementation Blog', href: '/implementation-blog' },
        { name: 'SAP Consultant Careers', href: '/sap-careers' },
        { name: 'Press Releases', href: '/press' },
        { name: 'Certified Partners', href: '/certified-partners' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Support Resources',
      links: [
        { name: 'SAP Help Center', href: '/sap-help' },
        { name: 'Developer Community', href: '/developer-community' },
        { name: 'Integration Tutorials', href: '/integration-tutorials' },
        { name: 'SAP Webinars', href: '/sap-webinars' },
        { name: 'Implementation Case Studies', href: '/implementation-cases' },
        { name: 'System Status', href: '/system-status' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'Data Privacy Policy', href: '/privacy' },
        { name: 'Service Terms', href: '/terms' },
        { name: 'Cookie Management', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Enterprise Security', href: '/enterprise-security' },
        { name: 'SOX Compliance', href: '/sox-compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sapintegrator' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/sapintegrator' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/sapintegrator' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sapintegrator' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sapintegrator' },
  ];

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">SI</span>
                </div>
                <span className="font-bold text-xl">SAP Integrator</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Streamlining enterprise SAP implementations with cutting-edge integration solutions.
                Trusted by Fortune 500 companies for seamless digital transformation and data
                synchronization.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">enterprise@sapintegrator.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (800) SAP-HELP</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Enterprise Plaza, Suite 2000</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">SAP Integration Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter enterprise email"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Receive SAP integration insights and implementation updates. Enterprise-focused
                content only.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 SAP Integrator. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-red-500 fill-current" /> for enterprise
                excellence
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility Standards
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/enterprise-support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Enterprise Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
