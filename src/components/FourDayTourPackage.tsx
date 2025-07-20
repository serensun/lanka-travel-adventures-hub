import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare, Star, Clock, CreditCard, Shield, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import BookingForm from './BookingForm';
import tourGallery1 from '@/assets/tour-gallery-1.avif';
import tourGallery2 from '@/assets/tour-gallery-2.avif';
import tourGallery3 from '@/assets/tour-gallery-3.avif';
import tourGallery4 from '@/assets/tour-gallery-4.avif';
import tourGallery5 from '@/assets/tour-gallery-5.avif';
import tourGallery6 from '@/assets/tour-gallery-6.avif';
import tourGallery7 from '@/assets/tour-gallery-7.avif';
import tourGallery8 from '@/assets/tour-gallery-8.avif';
import tourGallery9 from '@/assets/tour-gallery-9.avif';

const FourDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const packageRates = {
    standard: { double: 399, single: 699 },
    comfort: { double: 599, single: 799 },
    luxury: { double: 699, single: 999 }
  };

  const galleryImages = [
    {
      url: tourGallery1,
      alt: 'Sri Lanka Wildlife Safari',
      caption: 'See the fascinating wildlife on a Yala safari'
    },
    {
      url: tourGallery2,
      alt: 'Scenic Mountains and Tea Gardens',
      caption: 'Visit scenic mountains and tea gardens'
    },
    {
      url: tourGallery3,
      alt: 'Hill Country Train Journey',
      caption: 'Experience one of the most scenic train trips in the world'
    },
    {
      url: tourGallery4,
      alt: 'Temple of the Sacred Tooth',
      caption: 'Visit the tooth relic temple and downtown Kandy'
    },
    {
      url: tourGallery5,
      alt: 'Ella Hill Country',
      caption: 'Enjoy the beautiful settings in the hill country resort of Ella'
    },
    {
      url: tourGallery6,
      alt: 'Nuwara Eliya Tea Country',
      caption: 'Experience the beautiful hill country and Nuwara Eliya'
    },
    {
      url: tourGallery7,
      alt: 'Waterfalls and Nature',
      caption: 'Visit waterfalls and scenic natural landscapes'
    },
    {
      url: tourGallery8,
      alt: 'Beaches and Coastal Areas',
      caption: 'Explore beautiful beaches and coastal cities'
    },
    {
      url: tourGallery9,
      alt: 'Villages and Culture',
      caption: 'Experience local villages and rich cultural heritage'
    }
  ];

  const highlights = [
    'See the fascinating wildlife on a Yala safari',
    'Visit waterfalls, scenic mountains, tea garden, beaches, cities and villages',
    'Experience one of the most scenic train trips in the world',
    'Visit the tooth relic temple and downtown Kandy',
    'Enjoy the beautiful settings in the hill country resort of Ella and Nuwara Eliya'
  ];

  const inclusions = [
    '3-nights accommodation in standard hotels',
    '3 breakfasts',
    'Entire ground transportation, transfers and sightseeing tours',
    'Local tour guide',
    'Entrance fees to spice/herbal garden',
    '4-wheel-drive jeep for Yala safari',
    'Guided walking tour of Galle fort',
    'Guided tour of Tea garden and Tea factory',
    'Entrance fees to the Mask Museum',
    'Guided sightseeing tour of Ella',
    'All-inclusive hill country train trip',
    'Bentota river safari',
    'All taxes'
  ];

  const exclusions = [
    'Entrance fees to Yala national park, Tooth relic temple, and the Royal botanical garden, rainforest',
    'Tips and gratuities',
    'Lunch and dinner',
    'Drinks'
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Colombo / Galle, Bentota / Yala", 
      time: "Full Day",
      highlights: "Bentota River, Galle Fort, Hikkaduwa Beach, Mask Museum",
      description: "Meet and greet your guide and leave for the hotel in Yala. En route, stop at Bentota River, visit Galle Fort, stop at Hikkaduwa Beach, visit Mask museum, visit Mirissa Beach. Check-in at the hotel in Yala and enjoy leisure."
    },
    { 
      day: 2, 
      title: "Yala / Ella", 
      time: "Full Day",
      highlights: "Yala Safari, Mini-Adams Peak, Ravana Falls, Nine Arch Bridge",
      description: "Early morning Yala National Park Safari. Continue to the hotel in Ella. En-route stops at Ella Mini-Adams Peak, visit Ravana Falls, see Nine Arch Bridge. Check-in the hotel in Ella and leisure."
    },
    { 
      day: 3, 
      title: "Ella / Nuwara Eliya / Kandy", 
      time: "Full Day",
      highlights: "Hill Country Train, Tea Factory, Ramboda Waterfall",
      description: "Early morning hill country blue train from Ella railway station. Train journey from Ella to Nuwara Eliya (2 hours - one of the most scenic in the world). Continue journey to Kandy via Nuwara Eliya. En-route stop at downtown Nuwara Eliya, visit tea factory and garden, see Ramboda waterfall."
    },
    { 
      day: 4, 
      title: "Kandy / Colombo", 
      time: "Full Day",
      highlights: "Tooth Relic Temple, Royal Botanical Garden, Spice Garden",
      description: "After breakfast, Kandy city tour. Visit the tooth relic temple, explore the Royal Botanical Garden, tour downtown Kandy. Continue journey to Colombo. En route, stop at the spice/herbal garden."
    }
  ];

  const getTotalPrice = () => {
    if (travelers === 1) {
      return packageRates[selectedPackage].single;
    } else {
      return packageRates[selectedPackage].double * travelers;
    }
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'standard': return 'from-blue-500 to-blue-700';
      case 'comfort': return 'from-blue-600 to-blue-800';
      case 'luxury': return 'from-blue-700 to-blue-900';
      default: return 'from-blue-500 to-blue-700';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          4-Day Sri Lanka Tour with Adventure, Nature, Wildlife, History and Culture
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          See beautiful hill-country scenery, enjoy train trip, go on a safari, go boating and take a rainforest tour.
        </p>
        
        {/* Tour Features */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Free cancellation
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Reserve now & pay later
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Duration: 4 days
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Small group: Private tour
          </Badge>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-yellow-800 text-sm">
            <strong>Free cancellation:</strong> Cancel up to 24-hours in advance for a full refund<br/>
            <strong>Reserve now & pay later:</strong> Keep your travel plans flexible — book your spot and pay nothing today.<br/>
            <strong>Live tour guide:</strong> English, Italian, French
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Tour Gallery</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                 <Dialog>
                   <DialogTrigger asChild>
                     <div 
                       className="relative group overflow-hidden rounded-lg cursor-pointer"
                       onClick={() => setCurrentImageIndex(index)}
                     >
                       <img
                         src={image.url}
                         alt={image.alt}
                         className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-125"
                       />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <ZoomIn className="h-8 w-8 text-white mb-16" />
                       </div>
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                         <p className="text-white text-sm p-4 font-medium">{image.caption}</p>
                       </div>
                     </div>
                   </DialogTrigger>
                   <DialogContent className="max-w-4xl w-full max-h-[90vh] p-2">
                     <div className="relative">
                       <img 
                         src={galleryImages[currentImageIndex].url} 
                         alt={galleryImages[currentImageIndex].alt}
                         className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
                       />
                       
                       {/* Previous Arrow */}
                       <button
                         onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)}
                         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                         aria-label="Previous image"
                       >
                         <ChevronLeft className="h-6 w-6" />
                       </button>
                       
                       {/* Next Arrow */}
                       <button
                         onClick={() => setCurrentImageIndex(prev => prev < galleryImages.length - 1 ? prev + 1 : 0)}
                         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                         aria-label="Next image"
                       >
                         <ChevronRight className="h-6 w-6" />
                       </button>
                       
                       {/* Image Counter */}
                       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                         {currentImageIndex + 1} / {galleryImages.length}
                       </div>
                     </div>
                   </DialogContent>
                 </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Highlights Section */}
      <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Tour Highlights
        </h3>
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tour Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Itinerary */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue-900">4-Day Itinerary</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowExpandedItinerary(!showExpandedItinerary)}
                className="flex items-center gap-2"
              >
                {showExpandedItinerary ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Short View
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Detailed View
                  </>
                )}
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Day</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="w-24">Duration</TableHead>
                  <TableHead>Key Highlights</TableHead>
                  {showExpandedItinerary && <TableHead>Full Description</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {itineraryData.map((day) => (
                  <TableRow key={day.day} className="hover:bg-muted/50">
                    <TableCell className="font-semibold text-primary">
                      {day.day}
                    </TableCell>
                    <TableCell className="font-medium">
                      {day.title}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{day.time}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {day.highlights}
                    </TableCell>
                    {showExpandedItinerary && (
                      <TableCell className="text-sm">
                        {day.description}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Package Selection */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Select Package Type</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(packageRates).map(([pkg, rates]) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                    selectedPackage === pkg
                      ? `bg-gradient-to-r ${getPackageColor(pkg)} text-white shadow-lg`
                      : 'bg-white/70 text-blue-800 hover:bg-white/90 border border-blue-200'
                  }`}
                >
                  <div className="font-semibold capitalize mb-2">{pkg} Package</div>
                  <div className="text-sm">
                    <div>${rates.double} p.p (twin sharing)</div>
                    <div>${rates.single} (single rate)</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Travelers */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Travelers (1-10)
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="travelers" className="text-blue-900 font-medium">
                  Travelers:
                </label>
                <input
                  id="travelers"
                  type="number"
                  min="1"
                  max="10"
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="bg-white/70 text-blue-900 placeholder-blue-500 border border-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 text-center"
                />
              </div>
              <div className="text-blue-700 text-sm">
                {travelers === 1 ? (
                  <p>Single traveler rate applies</p>
                ) : (
                  <p>Twin sharing rate: ${packageRates[selectedPackage].double} per person</p>
                )}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Comments & Special Requests
            </h3>
            <div className="space-y-4">
              <Label htmlFor="comments" className="text-blue-900 font-medium">
                Tell us about your preferences, dietary requirements, or any special requests:
              </Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="e.g., vegetarian meals, accessibility needs, celebration occasions, preferred activities..."
                rows={4}
                className="bg-white/70 text-blue-900 placeholder-blue-500 border border-blue-300 focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <p className="text-blue-700 text-sm">
                This information will help us customize your tour experience to better suit your needs.
              </p>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Check className="w-5 h-5 mr-2 text-green-600" />
                Includes
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <X className="w-5 h-5 mr-2 text-red-500" />
                Excludes
              </h3>
              <ul className="space-y-2">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Book Your Adventure
          </h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700">Duration</span>
                <span className="font-semibold flex items-center text-blue-900">
                  <Calendar className="w-4 h-4 mr-1" />
                  4 days
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700">Travelers</span>
                <span className="font-semibold text-blue-900">{travelers} person{travelers > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700">Package</span>
                <span className="font-semibold capitalize text-blue-900">{selectedPackage}</span>
              </div>
            </div>

            <div className="border-t border-blue-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-800">Total Cost</span>
                <span className="text-green-600">${getTotalPrice().toLocaleString()}</span>
              </div>
              <p className="text-blue-600 text-sm mt-1">
                {travelers === 1 ? 'Single rate' : `$${packageRates[selectedPackage].double} per person`}
              </p>
            </div>

            <BookingForm 
              packageType={selectedPackage}
              travelers={travelers}
              totalCost={getTotalPrice()}
              initialComments={comments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourDayTourPackage;