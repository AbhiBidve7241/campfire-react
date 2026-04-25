import React, { useState, useEffect } from 'react';
import './CollapsibleSection.css';

const CollapsibleSection = ({ 
  title, 
  subtitle,
  children, 
  defaultExpanded = false,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // On desktop, always show content without toggle
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`collapsible-section ${className} ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button 
        className="collapsible-header"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        <div className="collapsible-header-text">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
        <span className="collapsible-icon">
          <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
        </span>
      </button>
      
      <div className="collapsible-content">
        <div className="collapsible-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;

