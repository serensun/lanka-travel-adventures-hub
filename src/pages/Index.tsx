import React, { useState } from 'react';
import { MapPin, Hotel, Camera, Calculator, Plane, Star, Calendar, ChevronDown, Users, Phone, FileText, Mail, MessageCircle, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import sanjeewaImage from '../assets/sanjeewa.jpg';
import tourGallery1 from '../assets/tour-gallery-1.avif';
import newTourGallery5 from '../assets/new-tour-gallery-5.avif';
import culturalTriangleWildlifeHero from '../assets/cultural-triangle-wildlife-hero.avif';

const Index = () => {
  const { t } = useTranslation();
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
        title: t('toast.termsRequired'),
        description: t('toast.termsRequiredDescription'),
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
        title: t('toast.enquirySentSuccess'),
        description: t('toast.enquirySentSuccessDescription'),
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
        title: t('toast.errorSendingEnquiry'),
        description: t('toast.errorSendingEnquiryDescription'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Featured tour packages (3 random ones)
  const featuredTourPackages = [
    {
      id: '2day-cultural-triangle',
      title: 'Private 2-Day Cultural Triangle + Wildlife Tour',
      description: 'Awaken Your Spirit: 2-Day Sacred Journey Through Sri Lanka\'s Cultural Heart with UNESCO World Heritage sites.',
      duration: 2,
      price: 'From $299',
      image: culturalTriangleWildlifeHero,
      path: '/Private-2-Day-Cultural-Triangle-Wildlife-Tour-of-Sri Lanka',
      highlights: ['UNESCO World Heritage Sites', 'Wildlife Safari', 'Buddhist Temples']
    },
    {
      id: '4day-kandy-tour', 
      title: '4-Day Sri Lanka Full Circle Private Tour',
      description: 'Why take weeks when you can see it all in just 4 action-packed days? Ancient kingdoms, wildlife safaris, beach bliss and cultural treasures.',
      duration: 4,
      price: 'From $499',
      image: newTourGallery5,
      path: '/kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo',
      highlights: ['Ancient Wonders', 'Hill Country Train', 'Wildlife Safari', 'Coastal Charms']
    },
    {
      id: '2day-tour',
      title: '2-Day Green Bless Tour',
      description: 'Experience the natural beauty of Sri Lanka with visits to Sigiriya Rock Fortress and Dambulla Cave Temple.',
      duration: 2,
      price: 'From $180',
      image: tourGallery1,
      path: '/2-day-tour',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Cultural Triangle']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Sections 1 & 2 Side by Side */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Section 1: About Serendipity Tours */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('homepage.aboutSerendipity')}</h2>
          <div className="space-y-4 text-blue-800 leading-relaxed">
            <p>
              {t('homepage.aboutDescription1')}
            </p>
            <p>
              {t('homepage.aboutDescription2')}
            </p>
            <p>
              {t('homepage.aboutDescription3')}
            </p>
          </div>
        </div>

        {/* Section 2: We are here to help you */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('homepage.weAreHereToHelp')}</h2>
          <div className="flex items-start space-x-6">
            <img 
              src={sanjeewaImage} 
              alt="Sanjeewa - Travel Expert" 
              className="w-24 h-24 rounded-full object-cover flex-shrink-0"
            />
            <div className="space-y-4 text-blue-800 leading-relaxed">
              <p>
                {t('homepage.helpDescription')}
              </p>
            
              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {t('homepage.operatingHours')}
                </h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <p><strong>{t('homepage.mondayToFriday')}</strong> {t('homepage.operatingHoursWeekdays')}</p>
                  <p><strong>{t('homepage.saturday')}</strong> {t('homepage.operatingHoursSaturday')}</p>
                  <p><strong>{t('homepage.sunday')}</strong> {t('homepage.operatingHoursSunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Customer Reviews */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t('homepage.customerReviews')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"{t('reviews.review1')}"</p>
            <p className="font-semibold text-blue-900">- {t('reviews.customer1')}</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"{t('reviews.review2')}"</p>
            <p className="font-semibold text-blue-900">- {t('reviews.customer2')}</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"{t('reviews.review3')}"</p>
            <p className="font-semibold text-blue-900">- {t('reviews.customer3')}</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"{t('reviews.review4')}"</p>
            <p className="font-semibold text-blue-900">- {t('reviews.customer4')}</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-blue-700 mb-4">"{t('reviews.review5')}"</p>
            <p className="font-semibold text-blue-900">- {t('reviews.customer5')}</p>
          </div>
        </div>
      </div>

      {/* Sections 4 & 5 Side by Side */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Section 4: Why Book With Us */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('homepage.whyBookWithUs')}</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">{t('homepage.bestPriceGuaranteed')}</h3>
              <p className="text-blue-700 text-sm">{t('homepage.bestPriceDescription')}</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">{t('homepage.flexiblePayment')}</h3>
              <p className="text-blue-700 text-sm">{t('homepage.flexiblePaymentDescription')}</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">{t('homepage.paperFree')}</h3>
              <p className="text-blue-700 text-sm">{t('homepage.paperFreeDescription')}</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">{t('homepage.helpThePoor')}</h3>
              <p className="text-blue-700 text-sm">{t('homepage.helpThePoorDescription')}</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">{t('homepage.noHiddenFees')}</h3>
              <p className="text-blue-700 text-sm">{t('homepage.noHiddenFeesDescription')}</p>
            </div>
          </div>
        </div>

        {/* Section 5: Contact Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('homepage.planYourTrip')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-blue-900 mb-2">
                {t('homepage.fullName')} *
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full"
                placeholder={t('homepage.fullNamePlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                {t('homepage.email')} *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full"
                placeholder={t('homepage.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="enquiryMessage" className="block text-sm font-medium text-blue-900 mb-2">
                {t('homepage.enquiryMessage')}
              </label>
              <Textarea
                id="enquiryMessage"
                name="enquiryMessage"
                value={formData.enquiryMessage}
                onChange={handleInputChange}
                className="w-full min-h-[120px]"
                placeholder={t('homepage.enquiryPlaceholder')}
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
                {t('homepage.agreeToTerms')}
              </label>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={!formData.agreeToTerms || isSubmitting}
            >
              {isSubmitting ? t('common.sending') : t('common.sendEnquiry')}
            </Button>
          </form>
        </div>
      </div>

      {/* Featured Tour Packages Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t('homepage.featuredTourPackages')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredTourPackages.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  <Calendar className="w-3 h-3 mr-1" />
                  {tour.duration} {tour.duration === 1 ? t('common.day') : t('common.days')}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-green-600 font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {t('homepage.from')} {tour.price.replace('From ', '')}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 leading-tight">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  {tour.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {tour.highlights.length > 2 && (
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                        +{tour.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Private Tour</span>
                  </div>
                  <Link to={tour.path}>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      {t('common.viewDetails')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/itinerary">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Tour Packages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;