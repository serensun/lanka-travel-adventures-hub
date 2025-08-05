import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Calendar } from 'lucide-react';

// Import images
import heroImage from '@/assets/untouched-rainforests-hero.avif';
import sinharajaImage from '@/assets/untouched-rainforests-1.avif';
import knucklesImage from '@/assets/untouched-rainforests-2.avif';
import kdnImage from '@/assets/untouched-rainforests-3.avif';

const UntouchedRainforests = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Untouched rainforests in Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Exploring Sri Lanka's Untouched Rainforests
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A Hidden Paradise
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            February 2, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            18 min read
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Sri Lanka
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="secondary">Rainforests</Badge>
          <Badge variant="secondary">Eco-tourism</Badge>
          <Badge variant="secondary">Biodiversity</Badge>
          <Badge variant="secondary">Wildlife</Badge>
          <Badge variant="secondary">Conservation</Badge>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#why-visit" className="block text-primary hover:text-primary/80 transition-colors">
                • Why Visit Sri Lanka's Rainforests?
              </a>
              <a href="#top-rainforests" className="block text-primary hover:text-primary/80 transition-colors">
                • Top Untouched Rainforests in Sri Lanka
              </a>
              <div className="ml-4 space-y-1">
                <a href="#sinharaja" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                  - Sinharaja Forest Reserve
                </a>
                <a href="#knuckles" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                  - Knuckles Mountain Range
                </a>
                <a href="#kdn" className="block text-primary hover:text-primary/80 transition-colors text-sm">
                  - KDN Forest
                </a>
              </div>
              <a href="#best-time" className="block text-primary hover:text-primary/80 transition-colors">
                • Best Time to Visit Sri Lanka's Rainforests
              </a>
              <a href="#responsible-travel" className="block text-primary hover:text-primary/80 transition-colors">
                • Tips for Responsible Rainforest Travel
              </a>
              <a href="#final-thoughts" className="block text-primary hover:text-primary/80 transition-colors">
                • Final Thoughts
              </a>
            </nav>
          </CardContent>
        </Card>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed">
            Sri Lanka, known for its stunning beaches and ancient temples, is also home to some of the world's most pristine and untouched rainforests. These lush green havens are biodiversity hotspots, teeming with endemic wildlife, rare plants, and breathtaking landscapes. If you're an eco-tourist or nature lover, exploring these rainforests should be at the top of your Sri Lanka itinerary.
          </p>
        </div>

        <Separator className="mb-12" />

        {/* Why Visit Section */}
        <section id="why-visit" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Visit Sri Lanka's Rainforests?</h2>
          <p className="text-lg mb-6">
            Sri Lanka's rainforests are among the most biologically diverse ecosystems on the planet. They offer:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Unique wildlife sightings</strong> – including endemic birds, leopards, and purple-faced langurs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Ancient flora</strong> – with towering trees, rare orchids, and medicinal plants.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Adventure opportunities</strong> – from jungle trekking to waterfall explorations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Eco-tourism experiences</strong> – sustainable travel that supports conservation efforts.</span>
            </li>
          </ul>
        </section>

        <Separator className="mb-12" />

        {/* Top Rainforests Section */}
        <section id="top-rainforests" className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Top Untouched Rainforests in Sri Lanka</h2>

          {/* Sinharaja */}
          <div id="sinharaja" className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">1. Sinharaja Forest Reserve (A UNESCO World Heritage Site)</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <img
                  src={sinharajaImage}
                  alt="Sinharaja Forest Reserve with endemic Sri Lanka blue magpie"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  One of the last remaining primary rainforests in Sri Lanka, <strong><a href="https://www.urlaub-sr-lanka.info/sinharaja-forest-reserve/" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Sinharaja Forest Reserve</a></strong> is a biodiversity marvel. Over 60% of its trees are endemic, and it's home to rare species like the Sri Lanka blue magpie and the green pit viper.
                </p>
                <div>
                  <p className="font-semibold mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    <li>• Guided nature walks through dense foliage</li>
                    <li>• Birdwatching with over 160 species recorded</li>
                    <li>• Stunning waterfalls like the Rakwana Falls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Knuckles */}
          <div id="knuckles" className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">2. Knuckles Mountain Range</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div className="order-2 md:order-1">
                <p className="text-lg mb-4">
                  A UNESCO-designated conservation area, the Knuckles Range offers misty forests, rugged trails, and panoramic views. It's a paradise for hikers and wildlife enthusiasts.
                </p>
                <div>
                  <p className="font-semibold mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    <li>• Rare amphibian species</li>
                    <li>• Scenic viewpoints like Mini World's End</li>
                    <li>• Traditional village encounters</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={knucklesImage}
                  alt="Knuckles Mountain Range misty rainforest with hiking trails"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* KDN Forest */}
          <div id="kdn" className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">3. Kanneliya-Dediyagala-Nakiyadeniya (KDN) Forest</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <img
                  src={kdnImage}
                  alt="KDN Forest hidden waterfall surrounded by medicinal plants"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  This tropical rainforest is a haven for nature lovers, with winding trails leading to hidden waterfalls like the Anagimale Falls.
                </p>
                <div>
                  <p className="font-semibold mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    <li>• Rich in medicinal plants</li>
                    <li>• Ideal for eco-tourism and research</li>
                    <li>• Less crowded than Sinharaja</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Best Time Section */}
        <section id="best-time" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Sri Lanka's Rainforests</h2>
          <p className="text-lg">
            The ideal time for rainforest exploration is during the <strong>dry season (January to April and July to September)</strong>, when trails are accessible, and wildlife is more active. For a detailed seasonal guide, check out <strong><a href="https://seerendipitytours.com/Sri-lanka-wildlife-seasonal-guide" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Seerendipity Tours' Wildlife Guide</a></strong>.
          </p>
        </section>

        <Separator className="mb-12" />

        {/* Responsible Travel Section */}
        <section id="responsible-travel" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tips for Responsible Rainforest Travel</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Hire a local guide</strong> – Supports conservation and enhances your experience.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Stay on marked trails</strong> – Protects fragile ecosystems.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Avoid plastic waste</strong> – Carry reusable bottles and bags.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-semibold">•</span>
              <span><strong>Respect wildlife</strong> – Observe animals from a distance.</span>
            </li>
          </ul>
        </section>

        <Separator className="mb-12" />

        {/* Final Thoughts */}
        <section id="final-thoughts" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
          <p className="text-lg mb-6">
            Sri Lanka's untouched rainforests are a treasure trove of biodiversity and natural beauty. Whether you're trekking through <strong>Sinharaja</strong>, exploring the <strong>Knuckles Range</strong>, or discovering <strong>KDN Forest</strong>, these ecosystems promise an unforgettable adventure.
          </p>
          <p className="text-lg font-semibold">
            Plan your eco-friendly journey today and immerse yourself in Sri Lanka's wild side!
          </p>
        </section>
      </div>
    </div>
  );
};

export default UntouchedRainforests;