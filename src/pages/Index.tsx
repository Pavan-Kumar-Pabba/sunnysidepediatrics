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
  Thermometer
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
      imagePath: "/lovable-uploads/fdfe85f6-1f3c-4561-9354-e9e187dbe418.png"
    },
    {
      name: "Jose Rios, MD", 
      title: "Pediatrician",
      specialty: "Pediatrics",
      experience: "15+ years of experience",
      education: "Board Certified in Pediatrics",
      affiliations: ["Wellstar Cobb Medical Center"],
      services: ["New Patient Care", "Acute Care", "Developmental Assessments", "Family Medicine"],
      imagePath: "/lovable-uploads/3048296b-4012-4a1a-b167-4151a9932479.png"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SunnySide Pediatrics
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Comprehensive pediatric care with compassion, expertise, and dedication to your child's health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome to SunnySide Pediatrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in Griffin, GA, we provide exceptional pediatric healthcare with a commitment to nurturing 
              healthy, happy children. Our experienced team offers comprehensive medical services in a warm, 
              welcoming environment designed specifically for children and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "Compassionate Care", description: "We treat every child with love and understanding" },
              { icon: Shield, title: "Trusted Expertise", description: "Decades of combined pediatric experience" },
              { icon: Users, title: "Family-Centered", description: "We partner with families for better health outcomes" },
              { icon: Award, title: "Quality Service", description: "Committed to excellence in pediatric healthcare" },
            ].map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card to-medical-white">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-medical-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Pediatric Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services designed to support your child's growth and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg text-primary">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
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

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
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
              <h3 className="text-xl font-bold mb-4">SunnySide Pediatrics, LLC</h3>
              <p className="text-gray-300 mb-2">1661 West McIntosh Road</p>
              <p className="text-gray-300 mb-2">Griffin, GA 30223</p>
              <p className="text-gray-300">(770) 233-4668</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-300 hover:text-white" onClick={() => setShowAppointmentForm(true)}>Book Appointment</Button></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
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