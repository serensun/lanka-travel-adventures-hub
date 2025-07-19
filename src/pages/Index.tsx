
import React, { useState, useEffect } from 'react';
import { MapPin, Hotel, Camera, Calculator, Plane, Star, Calendar, ChevronDown, Users, Phone, FileText } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import TourPackageSelector from '../components/TourPackageSelector';
import MainNavigation from '../components/MainNavigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'packages':
        return <TourPackageSelector />;
      case 'about':
        return (
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">About Serendipity</h2>
              <div className="space-y-6 text-blue-800 leading-relaxed">
                <p>
                  Welcome to the official website of Serendipity Tours. We humbly request you to take a closer look at our Sri Lanka tour packages and discover the opportunities to see the fascinating island of Sri Lanka. Serendipity tours is a leading Sri Lanka tours and beach holiday provider, possessing a broad range of experience, expertise, and knowledge needed to assist you to organize your memorable Sri Lanka road trip.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">"Safe & Secure" certified tour operator</h3>
                  <p className="text-blue-700">
                    Serendipity tours is a Sri Lankan company that earned the status of "Safe and Secure tour operator" (Safe and secure Certificate) in an independent assessment carried out by Ernst & young. Serendipity is a registered tour operator with the Sri Lanka tourist board and has all the legal provisions to carry out business as a travel agent. As a responsible tour operator, we take it as a very important matter to provide you with a safe Sri Lanka trip at all times. All our staff is carefully trained to carry on all activities in compliance with the health guidelines issued by the Sri Lankan government. All our staff, especially the drivers, guides, and helpers are fully vaccinated and "safe and secure certified".
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Truly Sri Lankan touch</h3>
                  <p className="text-blue-700">
                    We are a truly local organization and all the transactions and reservations are done through our head office in Colombo. We offer a wide choice, not only of locations but of quality and price. Since all the transactions are done through our permanent Colombo office, you can make sure that you get the best for your money. You can choose one of our package tours or you can have a tailor-made tour package, we are flexible and ready to negotiate. We have true local touch; we know the island, and our local staff with more than 10 years of experience in the tourism industry help to plan one of the most memorable Sri Lanka tours.
                  </p>
                  <p className="mt-4 text-blue-700">
                    We help you to craft the best tailor-made Sri Lanka tours, we are experts in promoting Sri Lankan holiday packages around the world. Let us do the planning of your tour and accommodation, we work together and make the best itinerary for you. We have a large fleet of comfortable vehicles and we offer the best hotels on the island. We can create the perfect itinerary for your tour and find the best hotels meeting your interests and dreams.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Expertise</h3>
                  <p className="text-blue-700">
                    We are closely working with many tour operators in the world and many multinational OTAs such as GetYourGuide, Viator, Bemyguest, etc. You can directly book one of our readymade packages or you can have a tailor-made Sri Lanka tour package, we are flexible and ready to negotiate. We have true local touch; we know the island, and our local staff with more than 20 years of experience in the tourism industry help to plan one of the most memorable vacations on the island. Our local staff is coming from various branches of the tourism industry such as the tour department, airline industry, hotel industry, Ayurveda, etc. Therefore we have all the qualifications to help you to plan the entire Sri Lanka trip package without any lapses.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Why Serendipity Tours</h3>
                  <p className="text-blue-700">
                    There are no middlemen between Serendipity tours and you and thereby you can eliminate heavy commissions, usually between 25%-50% charged by the online booking portals.
                  </p>
                  <p className="mt-4 text-blue-700">
                    We have a large fleet of comfortable vehicles and we offer the best hotels on the island. We guarantee the best price for Accommodations, transportation, sightseeing, and all other services. All tours are private, which means you have maximum privacy during the trip, and you are not a part of a big coach group anymore. We can create the perfect itinerary for your Sri Lanka private tours and find the best hotels meeting your interests and dreams. We are a truly local organization and all the transactions and reservations are done through our head office in Colombo.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Services offered by Serendipity Tours</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Sri Lanka tours with activities and leisure (Golfing, Eco-holiday, cycling tours, adventure holidays, diving and snorkeling, bird watching, honeymoon packages)</li>
                    <li>Daily tours and excursions to explore the nature and history of the island</li>
                    <li>Visa arrangement</li>
                    <li>Hotels and resorts reservation</li>
                    <li>Flight ticket and train ticket reservation</li>
                    <li>Car rental</li>
                    <li>Conference packages (MICE)</li>
                    <li>Tour guides and Interpreters/Translators for Sri Lanka tours</li>
                    <li>Extensions to the Maldives of your Sri Lanka tours</li>
                    <li>Apartment facilities (if available) on the island</li>
                    <li>All types of transportation requirements for Sri Lanka tours and excursions</li>
                    <li>Airport transfers</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Flexible payment methods</h3>
                  <p className="text-blue-700">
                    We offer most payment options available online as well as offline. You can make payments via the most popular cards as well as bank transfers. You can make a full payment or half payment at the time of the booking, or you can book the Sri Lanka trip without making any payment.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Book now and pay later</h3>
                  <p className="text-blue-700">
                    If you wish to make the booking now and pay later, we are ready to cooperate with you. You can book any of our Sri Lanka tour packages now and complete the payment at the time you start the trip. You can just send us the duly completed online reservation form and we do the needful. We do not insist you make the payment before arrival.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">We plan the best Sri Lanka trip for you</h3>
                  <p className="text-blue-700">
                    Sri Lanka is a tropical island with a fascinating blend of nature, culture, and history, beautiful locations and an ideal climate for holidays make the island, the best holiday destination in southern Asia. Pristine, palm-fringed beaches, iconic architecture, fascinating wildlife, historical cities, and rich cultural heritage ensure the island has a bright future in the tourism industry.
                  </p>
                  <p className="mt-4 text-blue-700">
                    We help you to plan the best tailor-made Sri Lanka tours and beach holiday packages, we are experts in promoting Sri Lanka tours. Let us do the planning of your Sri Lanka tour, we work together and make the best itinerary for you. We have a large fleet of comfortable vehicles and we offer the best hotels on the island. We can create the perfect itinerary for your Sri Lanka tour and find the best hotels meeting your interests and dreams.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Complete Tour</h3>
                  <p className="text-blue-700">
                    Our tour packages are equipped with complete tours around the island. If you are a foreigner, you may not have a clue about Sri Lanka, and a Sri Lanka tour package becomes very necessary since you will be shown around the unknown territory. We offer complete tour itineraries from your arrival to departure. These itineraries are carefully crafted to meet your budget and interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Serendipity Tours (Private) Limited</h3>
                    <div className="space-y-3 text-blue-700">
                      <p><strong>Address:</strong><br />
                      No 159 Kiriberiya road, Malamulla, Panadura, Sri Lanka.</p>
                      
                      <p><strong>Phone:</strong><br />
                      Tel: 0094 382238512<br />
                      Mobile: 0094 77 4440977</p>
                      
                      <p><strong>WhatsApp:</strong><br />
                      0094 774440977</p>
                      
                      <p><strong>Email:</strong><br />
                      admin@seerendipitytours.com<br />
                      seerendipitytourslk@gmail.com</p>
                      
                      <p><strong>Website:</strong><br />
                      www.serendipitypvt.com</p>
                      
                      <p><strong>Blog:</strong><br />
                      www.urlaub-sr-lanka.in</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Get In Touch</h3>
                    <p className="text-blue-700 mb-4">
                      Ready to plan your perfect Sri Lankan adventure? Contact us today and let our experienced team help you create unforgettable memories.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-600" />
                        <span className="text-blue-800">Call us for immediate assistance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-orange-600" />
                        <span className="text-blue-800">Visit our office in Panadura</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-orange-600" />
                        <span className="text-blue-800">Safe & Secure certified operator</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Terms and Conditions</h2>
              <div className="space-y-6 text-blue-700 leading-relaxed">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">THE CONTRACT</h3>
                  <p>
                    The holiday contract is made by Serendipity Tours Private Limited (ST) with the person who signs the booking form, even though payments may be made by others, and every person signing the booking form is fully responsible for the holiday contract. This contract is made under the terms of these booking conditions which are governed by Sri Lankan Law and both parties agree to submit to the jurisdiction of the Sri Lankan Court at all times.
                  </p>
                  <p className="mt-4">
                    Where a third party or other Tour Operator is used, their Terms and Conditions supersede the ones set out below and the client is bound by those.
                  </p>
                </div>

                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">BOOKING TERMS AND CONDITIONS</h3>
                  <p>
                    The relevant information is in the brochure. Any changes to the particulars given in the brochure or website will be set out in the itinerary or advised in writing. ST checks to ensure that the descriptions, information and opinions given in brochures or websites used by ST concerning the airlines, hotels, facilities and suppliers are correct, and based on the latest information available at the time of publishing. However, because brochures are necessarily prepared some time in advance, such matters may change by the time you are ready to book your holiday. Your holiday contract is made on the basis of the changes notified in the itinerary or in writing.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">THE PRICE GUARANTEE</h3>
                  <p>
                    After a Confirmation Invoice has been issued, the price of your holiday is, regrettably, subject to the possibility of surcharges in certain limited circumstances. ST guarantees that up until 30 days before your departure date the price of your holiday will not be subject
to surcharges except for:

Variations in transportation costs, including the cost of the fuel
Variations in duties, taxes or fees chargeable for services such as landing taxes or embarkation or disembarkation fees at ports and airports
the exchange rates applied to the holiday booking.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">THE PAYMENT SCHEDULE</h3>
                  <p>
                    There will be no binding contract for your holiday until ST has received a signed booking form and/or payment of the deposit/sum required. Your booking will be automatically cancelled if you are not able to make the full payment or a part payment within 48 hours since the invoice is generated.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">PAYMENT MODE</h3>
                  <p>
                    ST offers 3 payment modes mainly card payments, bank transfers and cash payments. If the customers opt for a bank transfer or a card payment it should be done at least 5 days prior to the arrival. If the customers choose the on-arrival payment mode they have to settle payment in full in cash on arrival. ST accept only cash payments on arrival.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">CHANGES TO THE HOLIDAY</h3>
                  <p>
                    A change must be requested in writing by the person who signed the booking form. ST will assist you if you wish to make changes to your booked holiday but cannot guarantee that relevant suppliers will agree to your changes. ST reserves the right to charge an additional premium of 50 USD in the event of changes to the itinerary once you are travelling.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">CANCELLATIONS</h3>
                  <p>
                    All cancellations must be advised in writing and will take effect the day we receive it. ST voluntarily returns all recoverable costs for cancellations. ST will be entitled to retain part of the payment made by you as compensation for the work that has been put into preparing the itinerary.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">TRAVEL INSURANCE</h3>
                  <p>
                    It is a condition of booking that you and everyone in your party is adequately insured for the full duration of the holiday in respect of illness, injury, death, loss of baggage and personal items, cancellation and curtailment.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">EMERGENCY CONTACT</h3>
                  <p>
                    In case of a genuine crisis or emergency, you can reach our local office on: Serendipity Tours: +94 77444 0977
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            {/* Introduction Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Discover Sri Lanka</h2>
              <div className="space-y-6 text-blue-700 leading-relaxed">
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

            {/* We are here to help you Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">We are here to help you</h2>
              <div className="space-y-6 text-blue-700 leading-relaxed">
                <p>
                  At Serendipity Tours Private Limited, your Sri Lanka trip begins with a conversation with one of our local travel experts. Our specialists are ready to share their expertise and create holiday that's tailored to you.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Monday to Friday:</strong> 9am - 8pm</p>
                    <p><strong>Saturday:</strong> 9am - 6pm</p>
                    <p><strong>Sunday:</strong> 11am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Book With Us Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Book With Us?</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Best price guaranteed</h3>
                  <p className="text-blue-700">
                    Serendipity Tours Private Limited is a truly local company with its head office in Panadura, Colombo. As a local company, we offer you the best for all tour packages offered by us.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Flexible payment methods</h3>
                  <p className="text-blue-700">
                    We accept credit card payments, bank transfers and payments on arrival. Please choose the most convenient payment method for you, and we are ready to work with you.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">We are paper-free</h3>
                  <p className="text-blue-700">
                    We are completely dependent on a digital system, eliminating the need for paper-based documents, statements, and other materials, opting for online versions instead.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Help the poor</h3>
                  <p className="text-blue-700">
                    With every booking you make, Serendipity Tours helps needy people with part of its profit.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">No hidden fees or commissions</h3>
                  <p className="text-blue-700">
                    We do not add hefty commissions and hidden fees as you reach the latter stage of the online booking. All our trips include all taxes, service charges and supplement charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-8 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Explore Sri Lanka?</h2>
              <p className="text-blue-700 mb-6 text-lg">
                Discover the Pearl of the Indian Ocean with our expertly crafted tour packages
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 rounded-lg p-6 text-center">
                  <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Amazing Destinations</h3>
                  <p className="text-blue-700">Explore ancient cities, pristine beaches, and lush tea plantations</p>
                </div>
                
                <div className="bg-white/80 rounded-lg p-6 text-center">
                  <Hotel className="mx-auto mb-4 text-orange-600" size={48} />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Luxury Accommodation</h3>
                  <p className="text-blue-700">Stay in hand-picked hotels and resorts for the ultimate comfort</p>
                </div>
                
                <div className="bg-white/80 rounded-lg p-6 text-center">
                  <Camera className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Unforgettable Experiences</h3>
                  <p className="text-blue-700">Create memories that will last a lifetime</p>
                </div>
              </div>
              
              <Link
                to="/?section=packages"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Calendar className="mr-2" size={20} />
                Explore Tour Packages
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="https://serendipitypvt.com/wp-content/uploads/2025/05/header-image-travel-cart.avif" 
              alt="Serendipity Tours Logo" 
              className="h-20 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-2">
            Sri Lanka Travel Planner
          </h1>
          <p className="text-blue-700 text-lg">Your gateway to paradise</p>
        </div>

        <MainNavigation />

        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default Index;
