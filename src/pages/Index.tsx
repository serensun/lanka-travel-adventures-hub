import React, { useState } from 'react';
import { MapPin, Hotel, Camera, Calculator, Plane, Star, Calendar, ChevronDown, Users, Phone, FileText, Mail, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import TourPackageSelector from '../components/TourPackageSelector';
import sanjeewaImage from '../assets/sanjeewa.jpg';

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    enquiryMessage: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Sending enquiry:', formData);
      
      // Call the edge function to send email
      const { data, error } = await supabase.functions.invoke('send-enquiry-email', {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          enquiryMessage: formData.enquiryMessage,
        },
      });

      if (error) {
        throw error;
      }

      console.log('Enquiry sent successfully:', data);
      
      toast({
        title: "Enquiry Sent Successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        enquiryMessage: '',
        agreeToTerms: false
      });

    } catch (error: any) {
      console.error('Error sending enquiry:', error);
      toast({
        title: "Error Sending Enquiry",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Sections 1 & 2 Side by Side */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Section 1: About Serendipity Tours */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About Serendipity Tours</h2>
          <div className="space-y-4 text-blue-800 leading-relaxed">
            <p>
              Perhaps Sri Lanka is most popular for its beach resorts that line its extensive coast, but Sri Lanka is also a cultural melting pot with many ethnic groups and religions. There are ancient rock temples and fortresses, ruins of ancient and sacred cities, and remnants of a colonial age. And if that's not quite enough to tempt you, the island possesses a naturally spectacular interior that's home to green-capped mountains, cascading waterfalls, rolling tea plantations, and wildlife-rich parks and reserves where elephants, leopards, crocodiles, and sloth bears roam free.
            </p>
            <p>
              Make your Sri Lanka trips at your own pace with Serendipity Tours Private Limited; in fact, Sri Lanka holidays take on a slower pace. Time takes on a different meaning for Sri Lanka; it may take a little longer to get from A to B, but that only adds to its charm. It gives you more time to take in your surroundings and discover the country from a local's perspective as your guide proudly regales you with tales of their homeland.
            </p>
            <p>
              Whether you're seeking a beach escape or a bespoke Sri Lanka tour, talk to us and we'll help create the right Sri Lanka holiday for you.
            </p>
          </div>
        </div>

        {/* Section 2: We are here to help you */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">We are here to help you</h2>
          <div className="flex items-start space-x-6">
            <img 
              src={sanjeewaImage} 
              alt="Sanjeewa - Travel Expert" 
              className="w-24 h-24 rounded-full object-cover flex-shrink-0"
            />
            <div className="space-y-4 text-blue-800 leading-relaxed">
              <p>
                At Serendipity Tours Private Limited, your Sri Lanka trip begins with a conversation with one of our local travel experts. Our specialists are ready to share their expertise and create holiday that's tailored to you.
              </p>
            
              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Operating Hours
                </h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <p><strong>Monday to Friday:</strong> 9am - 8pm</p>
                  <p><strong>Saturday:</strong> 9am - 6pm</p>
                  <p><strong>Sunday:</strong> 11am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Customer Reviews */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"Absolutely amazing experience! The tour was perfectly organized and our guide was incredibly knowledgeable about Sri Lankan culture and history."</p>
            <p className="font-semibold text-blue-900">- Sarah Johnson, UK</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"Serendipity Tours made our honeymoon unforgettable. From the pristine beaches to the ancient temples, every moment was magical."</p>
            <p className="font-semibold text-blue-900">- Michael & Emma Chen, Australia</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"Professional service and great value for money. The wildlife safari exceeded our expectations. Highly recommended!"</p>
            <p className="font-semibold text-blue-900">- David Martinez, Spain</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"The cultural tour was enlightening and the accommodations were excellent. Thank you for an incredible Sri Lankan adventure!"</p>
            <p className="font-semibold text-blue-900">- Lisa Thompson, Canada</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"Best travel experience we've ever had! The attention to detail and personalized service made all the difference."</p>
            <p className="font-semibold text-blue-900">- Robert & Maria Fischer, Germany</p>
          </div>
        </div>
      </div>

      {/* Sections 4 & 5 Side by Side */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Section 4: Why Book With Us */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Book With Us?</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Best price guaranteed</h3>
              <p className="text-blue-700 text-sm">Serendipity Tours Private Limited is a truly local company with its head office in Panadura, Colombo. As a local company, we offer you the best for all tour packages offered by us.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Flexible payment methods</h3>
              <p className="text-blue-700 text-sm">We accept credit card payments, bank transfers and payments on arrival. Please choose the most convenient payment method for you, and we are ready to work with you.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">We are paper-free</h3>
              <p className="text-blue-700 text-sm">We are completely dependent on a digital system, eliminating the need for paper-based documents, statements, and other materials, opting for online versions instead.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Help the poor</h3>
              <p className="text-blue-700 text-sm">With every booking you make, Serendipity Tours helps needy people with part of its profit.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">No hidden fees or commissions</h3>
              <p className="text-blue-700 text-sm">We do not add hefty commissions and hidden fees as you reach the latter stage of the online booking. All our trips include all taxes, service charges and supplement charges.</p>
            </div>
          </div>
        </div>

        {/* Section 5: Contact Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Plan Your Trip</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-blue-900 mb-2">
                Full Name *
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="enquiryMessage" className="block text-sm font-medium text-blue-900 mb-2">
                Enquiry Message
              </label>
              <Textarea
                id="enquiryMessage"
                name="enquiryMessage"
                value={formData.enquiryMessage}
                onChange={handleInputChange}
                className="w-full min-h-[120px]"
                placeholder="Tell us about your travel plans and preferences..."
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData(prev => ({
                  ...prev,
                  agreeToTerms: checked as boolean
                }))}
              />
              <label htmlFor="agreeToTerms" className="text-sm text-blue-700">
                By contacting us, you agree to our Terms and Conditions
              </label>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={!formData.agreeToTerms || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </Button>
          </form>
        </div>
      </div>

      {/* Tour Packages Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Tour Packages</h2>
        <TourPackageSelector />
      </div>
    </div>
  );
};

export default Index;