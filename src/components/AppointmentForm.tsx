import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Phone, Mail, FileText } from "lucide-react";

interface AppointmentFormData {
  patientName: string;
  parentName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  appointmentType: string;
  insuranceProvider: string;
  reasonForVisit: string;
  additionalNotes: string;
}

export const AppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: "",
    parentName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    appointmentType: "",
    insuranceProvider: "",
    reasonForVisit: "",
    additionalNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New Appointment Request - SunnySide Pediatrics

Patient Information:
- Patient Name: ${formData.patientName}
- Parent/Guardian: ${formData.parentName}
- Date of Birth: ${formData.dateOfBirth}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Address: ${formData.address}

Appointment Details:
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}
- Appointment Type: ${formData.appointmentType}
- Insurance Provider: ${formData.insuranceProvider}

Reason for Visit:
${formData.reasonForVisit}

Additional Notes:
${formData.additionalNotes}

Submitted on: ${new Date().toLocaleString()}
      `;

      // Create mailto link
      const subject = `New Appointment Request - ${formData.patientName}`;
      const mailtoLink = `mailto:sunnysidepediatrics1661@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Appointment Request Submitted",
        description: "Your email client has been opened with the appointment details. Please send the email to complete your request.",
      });

      // Reset form
      setFormData({
        patientName: "",
        parentName: "",
        dateOfBirth: "",
        phone: "",
        email: "",
        address: "",
        preferredDate: "",
        preferredTime: "",
        appointmentType: "",
        insuranceProvider: "",
        reasonForVisit: "",
        additionalNotes: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl text-primary">Book an Appointment</CardTitle>
        </div>
        <CardDescription className="text-base">
          Please fill out all required information to schedule your child's appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Patient Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patientName">Patient Name *</Label>
                <Input
                  id="patientName"
                  value={formData.patientName}
                  onChange={(e) => handleInputChange("patientName", e.target.value)}
                  required
                  placeholder="Child's full name"
                />
              </div>
              <div>
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => handleInputChange("parentName", e.target.value)}
                  required
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="(770) 233-4668"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="insuranceProvider">Insurance Provider *</Label>
                <Input
                  id="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={(e) => handleInputChange("insuranceProvider", e.target.value)}
                  required
                  placeholder="Blue Cross, Aetna, etc."
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                required
                placeholder="Street address, city, state, zip code"
                rows={2}
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Appointment Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="appointmentType">Type of Appointment *</Label>
              <Select onValueChange={(value) => handleInputChange("appointmentType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="well-child">Well-Child Checkup</SelectItem>
                  <SelectItem value="sick-visit">Sick Visit</SelectItem>
                  <SelectItem value="immunization">Immunization</SelectItem>
                  <SelectItem value="physical">Physical Exam</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Visit Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Visit Information</h3>
            </div>

            <div>
              <Label htmlFor="reasonForVisit">Reason for Visit *</Label>
              <Textarea
                id="reasonForVisit"
                value={formData.reasonForVisit}
                onChange={(e) => handleInputChange("reasonForVisit", e.target.value)}
                required
                placeholder="Please describe the reason for this appointment"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                placeholder="Any additional information you'd like us to know"
                rows={3}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};