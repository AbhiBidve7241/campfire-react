import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Services from '../components/Services';
import CollapsibleSection from '../components/CollapsibleSection';
import { featuredProducts, newArrivals, features, heroImages } from '../data/products';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero images={heroImages} />

      <CollapsibleSection
        title="Featured Products"
        subtitle="Explore our top-selling smartphones"
        defaultExpanded={true}
      >
        <section className="products-section section">
          <div className="container">
            <div className="section-header">
              <h2>Featured Products</h2>
              <p>Explore our top-selling smartphones</p>
            </div>

            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </CollapsibleSection>

      <CollapsibleSection
        title="Our Services"
        subtitle="Why choose us for your tech needs"
        defaultExpanded={false}
      >
        <Services />
      </CollapsibleSection>

      <CollapsibleSection
        title="New Arrivals"
        subtitle="Latest accessories for your devices"
        defaultExpanded={true}
      >
        <section className="new-arrivals-section section">
          <div className="container">
            <div className="section-header">
              <h2>New Arrivals</h2>
              <p>Latest accessories for your devices</p>
            </div>

            <div className="products-grid">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </CollapsibleSection>

      <CollapsibleSection
        title="Our Stats"
        subtitle="Numbers that speak for themselves"
        defaultExpanded={false}
      >
        <Stats />
      </CollapsibleSection>

      <CollapsibleSection
        title="Features"
        subtitle="What makes us stand out"
        defaultExpanded={false}
      >
        <Features features={features} />
      </CollapsibleSection>

      <CollapsibleSection
        title="What Our Customers Say"
        subtitle="Real feedback from real customers"
        defaultExpanded={false}
      >
        <Testimonials />
      </CollapsibleSection>

      <Newsletter />
    </div>
  );
};

export default Home;
