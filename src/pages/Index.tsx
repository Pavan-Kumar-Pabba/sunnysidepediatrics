import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppointmentForm } from "@/components/AppointmentForm";
import { DoctorCard } from "@/components/DoctorCard";
import { ContactSection } from "@/components/ContactSection";
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Phone, 
  Calendar,
  Stethoscope,
  Baby,
  Activity,
  Syringe,
  Eye,
  Thermometer,
  Menu,
  CreditCard,
  FileText,
  MessageSquare,
  UserCircle
} from "lucide-react";
import heroImage from "@/assets/hero-pediatrics.jpg";

const Index = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const services = [
    { icon: Baby, name: "Well-Child Checkups", description: "Comprehensive health assessments for growing children" },
    { icon: Syringe, name: "Immunizations", description: "Complete vaccination programs following CDC guidelines" },
    { icon: Stethoscope, name: "Sick Visits", description: "Prompt care for acute illnesses and injuries" },
    { icon: Activity, name: "Physical Exams", description: "Sports physicals and school health requirements" },
    { icon: Eye, name: "Vision & Hearing", description: "Early detection and screening services" },
    { icon: Thermometer, name: "Chronic Care", description: "Management of ongoing health conditions" },
  ];

  const doctors = [
    {
      name: "Chandana Prabhudev, MD",
      title: "Pediatrician",
      specialty: "Pediatrics",
      experience: "35+ years of experience",
      education: "University of Mysore / Adichunchanagiri Institute of Medical Science (1987)",
      affiliations: ["Wellstar Spalding Medical Center"],
      services: ["Well-Child Care", "Telehealth Appointments", "Preventive Medicine", "Chronic Disease Management"],
      imagePath: "/lovable-uploads/ff59fd4c-8eeb-4038-af0a-dcc72dcf0cd9.png"
    },
    {
      name: "Jose Rios, MD", 
      title: "Pediatrician",
      specialty: "Pediatrics",
      experience: "15+ years of experience",
      education: "Board Certified in Pediatrics",
      affiliations: ["Wellstar Cobb Medical Center"],
      services: ["New Patient Care", "Acute Care", "Developmental Assessments", "Family Medicine"],
      imagePath: "/lovable-uploads/30c518d3-b0e7-4549-b315-0fdcd9431b21.png"
    }
  ];

  if (showAppointmentForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAppointmentForm(false)}
              className="mb-4"
            >
              ← Back to Homepage
            </Button>
            <h1 className="text-3xl font-bold text-primary">Schedule an Appointment</h1>
          </div>
          <AppointmentForm />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/0aa46d63-b681-4fff-a8d0-58bfc20a1328.png" 
                alt="SunnySide Pediatrics Logo" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sunnyside Pediatrics</h1>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">HOME</a>
              <a href="#messages" className="text-gray-700 hover:text-primary font-medium transition-colors">MESSAGES FROM THE DOCTORS</a>
              <a href="#medical-records" className="text-gray-700 hover:text-primary font-medium transition-colors">MEDICAL RECORDS</a>
              <a href="#billing" className="text-gray-700 hover:text-primary font-medium transition-colors">BILLING</a>
              <a href="#patient-portal" className="text-gray-700 hover:text-primary font-medium transition-colors">PATIENT PORTAL</a>
            </nav>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:770-233-4668" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                <Phone className="inline h-4 w-4 mr-1" />
                (770) 233-4668
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sunny-orange to-sunny-yellow">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Welcome to Sunnyside Pediatrics
              </h1>
              <p className="text-xl mb-8 opacity-95">
                Providing exceptional pediatric care with compassion and expertise for your child's health and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-semibold"
                  onClick={() => setShowAppointmentForm(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary h-14 px-8 text-lg font-semibold"
                  onClick={() => window.open('tel:770-233-4668')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (770) 233-4668
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/d1be701b-d9cc-479e-b378-7502b5582904.png" 
                alt="Happy family with baby" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Portal & Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-sunny-yellow rounded-full p-3 mr-4">
                  <img 
                    src="/lovable-uploads/0aa46d63-b681-4fff-a8d0-58bfc20a1328.png" 
                    alt="SunnySide Pediatrics Logo" 
                    className="h-8 w-8"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Sunnyside Pediatrics</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Have you signed up for our Patient Portal?</h3>
                  <p className="text-gray-600 mb-4">Click here for more information.</p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => setShowAppointmentForm(true)}
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    Patient Portal
                  </Button>
                </div>
                
                <Button 
                  className="bg-sunny-yellow text-gray-900 hover:bg-sunny-yellow/90 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('#billing')}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pay Your Bill
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/fdfe85f6-1f3c-4561-9354-e9e187dbe418.png" 
                alt="Happy diverse children" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Pediatric Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to support your child's growth and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sunny-yellow">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg text-primary">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Pediatricians
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced pediatricians are dedicated to providing exceptional healthcare for your children
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setShowAppointmentForm(true)}>
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Book Appointment</h3>
                <p className="text-sm text-gray-600">Schedule your child's visit online</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="pt-6">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Messages</h3>
                <p className="text-sm text-gray-600">Connect with your doctors</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Medical Records</h3>
                <p className="text-sm text-gray-600">Access patient information</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="pt-6">
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Billing</h3>
                <p className="text-sm text-gray-600">Pay bills and view statements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-sunny-orange to-sunny-yellow text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Child's Appointment?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join our family of satisfied patients and experience the difference of personalized pediatric care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-semibold"
              onClick={() => setShowAppointmentForm(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary h-14 px-8 text-lg font-semibold"
              onClick={() => window.open('tel:770-233-4668')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/0aa46d63-b681-4fff-a8d0-58bfc20a1328.png" 
                  alt="SunnySide Pediatrics Logo" 
                  className="h-8 w-8 mr-3"
                />
                <h3 className="text-xl font-bold">SunnySide Pediatrics, LLC</h3>
              </div>
              <p className="text-gray-300 mb-2">1661 West McIntosh Road</p>
              <p className="text-gray-300 mb-2">Griffin, GA 30223</p>
              <p className="text-gray-300 mb-2">(770) 233-4668</p>
              <p className="text-gray-300">
                <a href="https://sunnysidepediatrics.com" className="hover:text-sunny-yellow transition-colors">
                  sunnysidepediatrics.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-sunny-yellow transition-colors">Our Services</a></li>
                <li><a href="#doctors" className="hover:text-sunny-yellow transition-colors">Our Doctors</a></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-sunny-yellow" onClick={() => setShowAppointmentForm(true)}>Book Appointment</Button></li>
                <li><a href="#patient-portal" className="hover:text-sunny-yellow transition-colors">Patient Portal</a></li>
                <li><a href="#billing" className="hover:text-sunny-yellow transition-colors">Billing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SunnySide Pediatrics, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;