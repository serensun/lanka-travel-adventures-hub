import React from 'react';
import secureTransactions from '../assets/secure-transactions.webp';
import bestPriceGuaranteed from '../assets/best-price-guaranteed.webp';
import safeTravelBwttc from '../assets/safe-travel-bwttc.webp';
import positiveSsl from '../assets/positive-ssl.gif';
import googleTrust from '../assets/google-trust.webp';
import safeCheckout from '../assets/safe-checkout.webp';

const Footer = () => {
  const trustBadges = [
    {
      image: secureTransactions,
      url: "https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=POSDV&v_search=https://seerendipitytours.com/itinerary/sri-lanka-splendour-7-days-tour/&x=6&y=5",
      alt: "Secure Transactions"
    },
    {
      image: bestPriceGuaranteed,
      url: null,
      alt: "Best Price Guaranteed"
    },
    {
      image: safeTravelBwttc,
      url: "https://serendipitypvt.com/safe-secure-certificate/",
      alt: "Safe Travel Certificate"
    },
    {
      image: positiveSsl,
      url: "https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=POSDV&v_search=https://serendipitypvt.com/&x=6&y=5",
      alt: "SSL Certificate"
    },
    {
      image: googleTrust,
      url: "https://www.google.com/maps/place/Seerendipity+tours/@6.7176042,79.937261,15z/data=!4m5!3m4!1s0x0:0x3e8fff5735bbff49!8m2!3d6.7176042!4d79.937261?hl=en",
      alt: "Google Trust"
    },
    {
      image: safeCheckout,
      url: null,
      alt: "Safe Checkout"
    }
  ];

  return (
    <footer className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex justify-center">
              {badge.url ? (
                <a 
                  href={badge.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src={badge.image} 
                    alt={badge.alt}
                    className="h-16 w-auto object-contain"
                  />
                </a>
              ) : (
                <img 
                  src={badge.image} 
                  alt={badge.alt}
                  className="h-16 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Serendipity Tours Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;