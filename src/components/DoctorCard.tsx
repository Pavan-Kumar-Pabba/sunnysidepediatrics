import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DoctorCardProps {
  name: string;
  title: string;
  specialty: string;
  experience: string;
  education: string;
  affiliations: string[];
  services: string[];
  imagePath: string;
}

export const DoctorCard = ({ 
  name, 
  title, 
  specialty, 
  experience, 
  education, 
  affiliations, 
  services,
  imagePath 
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-medical-white">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Doctor Image */}
          <div className="md:w-1/3 relative overflow-hidden">
            <img 
              src={imagePath} 
              alt={`Dr. ${name}`}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>
          
          {/* Doctor Information */}
          <div className="md:w-2/3 p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">{name}</h3>
              <p className="text-lg text-muted-foreground">{title}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-medical-blue-light text-primary">
                  {specialty}
                </Badge>
                <Badge variant="outline" className="border-secondary text-secondary">
                  {experience}
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-primary mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">{education}</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Hospital Affiliations</h4>
                <div className="flex flex-wrap gap-1">
                  {affiliations.map((affiliation, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {affiliation}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Specialized Services</h4>
                <div className="flex flex-wrap gap-1">
                  {services.map((service, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-medical-green-light text-secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};