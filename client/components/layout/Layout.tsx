import { PropsWithChildren, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock3,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const TopBar = () => (
  <div className="w-full bg-sky-700 text-white">
    <div className="container mx-auto flex items-center justify-between gap-4 py-2 text-xs md:text-sm">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4" /> Call Center 1109
        </span>
        <span className="hidden md:flex items-center gap-2">
          <MapPin className="h-4 w-4" /> 605 Park Drive, Heamintorian 1103
        </span>
        <span className="hidden lg:flex items-center gap-2">
          <Clock3 className="h-4 w-4" /> Mon - Sat 08:00 - 20:00
        </span>
      </div>
      <div className="hidden md:flex items-center gap-4 opacity-90">
        <a
          href="#"
          aria-label="facebook"
          className="hover:opacity-100 transition-opacity"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href="#"
          aria-label="twitter"
          className="hover:opacity-100 transition-opacity"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href="#"
          aria-label="instagram"
          className="hover:opacity-100 transition-opacity"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  const navLink = (to: string, label: string) => (
    <NavLink
      to={to}
      onClick={close}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive || location.pathname === to
            ? "text-sky-700"
            : "text-foreground/80 hover:text-foreground",
        )
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-sky-700" />
          <span className="font-extrabold tracking-tight text-xl md:text-2xl">
            DENTICA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLink("/about", "About Us")}
          {navLink("/dentists", "Our Dentists")}
          {navLink("/services", "Services")}
          {navLink("/contact", "Contact Us")}
          {navLink("/faq", "FAQ")}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-5 py-2">
            Make an Appointment
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto flex flex-col py-2">
            {navLink("/about", "About Us")}
            {navLink("/dentists", "Our Dentists")}
            {navLink("/services", "Services")}
            {navLink("/contact", "Contact Us")}
            {navLink("/faq", "FAQ")}
            <Button className="mt-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
              Make an Appointment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="mt-24 border-t bg-muted/30">
    <div className="container mx-auto grid gap-10 py-14 md:grid-cols-12">
      <div className="md:col-span-7 space-y-5">
        <h3 className="text-2xl font-semibold">DENTICA</h3>
        <p className="text-muted-foreground max-w-xl">
          We are experienced and internationally certified healthcare workers
          providing gentle, modern dental care.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Lewistika Panda I Block D No.88,
            South Tangerang
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> 4733378901 (Call Center) • 4733378902
            (Support)
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" /> Mon - Sat 08:00 - 20:00
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-4 text-sm">
          <div>
            <div className="font-semibold mb-2">Page</div>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/dentists" className="hover:underline">
                  Our Dentists
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow</div>
            <div className="flex items-center gap-3 text-foreground/70">
              <Facebook className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Instagram className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h4 className="text-lg font-semibold mb-4">Schedule</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Monday", "08:00 - 20:00"],
              ["Tuesday", "08:00 - 20:00"],
              ["Wednesday", "08:00 - 20:00"],
              ["Thursday", "08:00 - 20:00"],
              ["Friday", "08:00 - 20:00"],
              ["Saturday", "10:00 - 16:00"],
              ["Sunday", "10:00 - 16:00"],
            ].map(([d, t]) => (
              <li
                key={d}
                className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
              >
                <span>{d}</span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-4 w-full rounded-full bg-teal-500 hover:bg-teal-600">
            Make an Appointment
          </Button>
        </div>
      </div>
    </div>
    <div className="border-t py-6 text-center text-sm text-muted-foreground">
      2025 © Dentica — Dentist & Dental Clinic.
    </div>
  </footer>
);

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
