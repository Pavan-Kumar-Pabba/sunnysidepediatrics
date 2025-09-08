import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-medical-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to provide exceptional pediatric care for your family
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>Get in Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    1661 West McIntosh Road<br />
                    Griffin, GA 30223
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <a 
                    href="tel:770-233-4668" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (770) 233-4668
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a 
                    href="mailto:sunnysidepediatrics1661@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    sunnysidepediatrics1661@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Website</h3>
                  <a 
                    href="https://sunnysidepediatrics.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sunnysidepediatrics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Office Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm text-secondary mt-2">
                      *Emergency appointments available
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  onClick={() => window.open('tel:770-233-4668')}
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map or Additional Info */}
          <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Visit Our Clinic</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-medical-blue-light to-medical-green-light rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    1661 West McIntosh Road
                  </h3>
                  <p className="text-muted-foreground mb-4">Griffin, GA 30223</p>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://maps.google.com/?q=1661+West+McIntosh+Road,+Griffin,+GA+30223')}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Parking & Accessibility</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Free parking available</li>
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Ground floor location</li>
                  <li>• Child-friendly waiting area</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};