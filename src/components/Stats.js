import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const statsData = [
  {
    id: 1,
    value: 50000,
    suffix: '+',
    label: 'Happy Customers',
    icon: 'fa-users'
  },
  {
    id: 2,
    value: 10000,
    suffix: '+',
    label: 'Products Sold',
    icon: 'fa-box-open'
  },
  {
    id: 3,
    value: 99,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: 'fa-heart'
  },
  {
    id: 4,
    value: 24,
    suffix: '/7',
    label: 'Customer Support',
    icon: 'fa-headset'
  }
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), stat.value);
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
              <div className="stat-value">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
