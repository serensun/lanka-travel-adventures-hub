
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { User, Mail, Phone, Calendar, Users, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BookingFormProps {
  packageType: string;
  travelers: number;
  totalCost: number;
  initialComments?: string;
}

const BookingForm = ({ packageType, travelers, totalCost, initialComments = '' }: BookingFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    preferredDate: '',
    numberOfTravelers: travelers,
    specialRequests: initialComments,
    // Honeypot fields (hidden from users, visible to bots)
    website: '',
    url: '',
    honeypot: ''
  });

  // Parse package type to get tour details
  const getPackageDetails = () => {
    if (packageType.includes('5-day')) {
      const packageLevel = packageType.replace('5-day-', '');
      return {
        tourName: '5-Day Sri Lanka Cultural & Nature Tour',
        duration: '5 days',
        packageLevel: packageLevel.charAt(0).toUpperCase() + packageLevel.slice(1)
      };
    } else if (packageType.includes('4-day')) {
      const packageLevel = packageType.replace('4-day-', '');
      return {
        tourName: '4-Day Sri Lanka Whirlwind Tour',
        duration: '4 days',
        packageLevel: packageLevel.charAt(0).toUpperCase() + packageLevel.slice(1)
      };
    } else if (packageType.includes('2day')) {
      const packageLevel = packageType.replace('2day-', '');
      return {
        tourName: 'Sri Lanka Green Bless 2-Day Tour',
        duration: '2 days',
        packageLevel: packageLevel.charAt(0).toUpperCase() + packageLevel.slice(1)
      };
    } else {
      return {
        tourName: 'Sri Lanka Tour',
        duration: 'Multiple days',
        packageLevel: packageType.charAt(0).toUpperCase() + packageType.slice(1)
      };
    }
  };

  const packageDetails = getPackageDetails();

  // Update form data when initialComments changes
  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      specialRequests: initialComments
    }));
  }, [initialComments]);

  // Security: Add delay to prevent rapid submissions
  const validateAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot fields (should be empty)
    if (formData.website || formData.url || formData.honeypot) {
      console.log('Bot detected via honeypot fields');
      return; // Silently fail for bots
    }
    
    // Add artificial delay to slow down automated submissions
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await handleSubmit(e);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Starting booking submission process...');
      
      // First, submit to the database
      const { error: dbError } = await supabase
        .from('booking_submissions')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          preferred_date: formData.preferredDate,
          number_of_travelers: formData.numberOfTravelers,
          special_requests: formData.specialRequests,
          package_type: packageType,
          total_cost: totalCost
        });

      if (dbError) {
        console.error('Database error:', dbError);
        toast({
          title: "Error",
          description: "There was an error submitting your booking. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log('Database submission successful, now sending email...');

      // Then send email notification
      const emailPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        preferredDate: formData.preferredDate,
        numberOfTravelers: formData.numberOfTravelers,
        specialRequests: formData.specialRequests,
        packageType: packageType,
        totalCost: totalCost,
        tourName: packageDetails.tourName,
        duration: packageDetails.duration,
        packageLevel: packageDetails.packageLevel
      };

      console.log('Email payload:', emailPayload);

      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-booking-email', {
        body: emailPayload
      });

      if (emailError) {
        console.error('Email function error:', emailError);
        // Don't show error to user as booking was saved successfully
        console.log('Booking saved but email failed to send');
      } else {
        console.log('Email sent successfully:', emailData);
      }

      toast({
        title: "Booking Submitted Successfully!",
        description: "Thank you for your booking request. We will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        preferredDate: '',
        numberOfTravelers: travelers,
        specialRequests: initialComments,
        website: '',
        url: '',
        honeypot: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
          Book This {packageDetails.duration.charAt(0).toUpperCase() + packageDetails.duration.slice(1)} Adventure
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Complete Your Booking</DialogTitle>
        </DialogHeader>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Booking Summary</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p><strong>Tour:</strong> {packageDetails.tourName}</p>
            <p><strong>Duration:</strong> {packageDetails.duration}</p>
            <p><strong>Package Level:</strong> {packageDetails.packageLevel}</p>
            <p><strong>Travelers:</strong> {travelers} person{travelers > 1 ? 's' : ''}</p>
            <p className="font-bold text-lg"><strong>Total Cost:</strong> ${totalCost.toLocaleString()}</p>
          </div>
        </div>

        <form onSubmit={validateAndSubmit} className="space-y-4">
          {/* Honeypot fields - hidden from users but visible to bots */}
          <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Country *
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Travel Date *
              </Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="numberOfTravelers" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Number of Travelers
              </Label>
              <Input
                id="numberOfTravelers"
                name="numberOfTravelers"
                type="number"
                min="1"
                max="10"
                value={formData.numberOfTravelers}
                onChange={handleChange}
                readOnly
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Special Requests or Comments
            </Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special dietary requirements, accessibility needs, or other requests..."
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> This is a booking inquiry. Our team will contact you within 24 hours to confirm availability and finalize your booking details.
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
