# TriAmis International Inc - Sourcing Company Website

## Overview

TriAmis International Inc is a static business website for a sourcing company that connects international clients with Indian manufacturers across multiple industries. The website showcases their services, company information, and provides contact details for potential clients looking to source products from India.

## User Preferences

Preferred communication style: Simple, everyday language.
Color scheme: Updated to match company logo - Orange (#f97316), Navy Blue (#1e3a8a), and Light Blue (#dbeafe)
Logo: Company logo integrated across all pages replacing text-based branding

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Architecture Pattern**: Multi-page static website with traditional navigation
- **Responsive Design**: CSS Grid and Flexbox for responsive layouts
- **Asset Management**: External CDN for Font Awesome icons, local CSS and JS files

### Content Structure
- **Page-based Navigation**: Traditional multi-page website structure
- **Industry-specific Pages**: Dedicated pages for different product categories
- **Consistent Layout**: Shared navigation and styling across all pages

## Key Components

### Navigation System
- **Fixed Header**: Sticky navigation bar with company branding
- **Mobile-responsive Menu**: Hamburger menu for mobile devices
- **Active State Management**: Visual indication of current page

### Content Pages
- **Homepage**: Hero section with company overview and call-to-action buttons
- **About Page**: Company story and background information
- **Services Overview**: Grid-based layout showcasing different product categories
- **Industry-specific Pages**: Detailed pages for each sourcing category:
  - Pharmaceuticals & Chemicals
  - Textiles & Apparel
  - Agriculture & Food Products
  - Electronics
  - Automobiles & Components
  - Industrial Goods & Machinery
  - Metals & Materials
  - Gems & Jewelry
  - Home & Lifestyle
- **Contact Page**: Contact information and inquiry form

### Interactive Elements
- **Mobile Navigation**: JavaScript-powered hamburger menu
- **Smooth Scrolling**: Enhanced user experience for anchor links
- **Intersection Observer**: Fade-in animations for content sections
- **Contact Form**: Basic form structure (backend integration needed)

## Data Flow

### Static Content Delivery
- **Content Management**: Static HTML files with embedded content
- **Asset Loading**: CSS and JavaScript files loaded from local directory
- **External Resources**: Font Awesome icons loaded from CDN
- **Image Assets**: External image references (Pixabay URLs)

### User Interactions
- **Navigation**: Client-side routing through traditional page links
- **Form Submission**: Contact form requires backend integration for processing
- **Mobile Menu**: JavaScript handles show/hide functionality

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icon library for UI elements
- **External Images**: Pixabay for hero section imagery

### Third-party Integrations
- **Email Service**: Contact form needs email service integration
- **Analytics**: No current analytics implementation (Google Analytics could be added)

## Deployment Strategy

### Static Hosting
- **Hosting Requirements**: Any static hosting service (GitHub Pages, Netlify, Vercel)
- **Build Process**: No build process required - direct file serving
- **Domain Setup**: Custom domain configuration needed
- **SSL Certificate**: HTTPS recommended for professional appearance

### Performance Considerations
- **Optimization Needs**: Image optimization and compression
- **Caching Strategy**: Standard static file caching
- **Mobile Performance**: Responsive design implemented

### Potential Enhancements
- **Backend Integration**: Contact form processing and inquiry management
- **Content Management**: CMS integration for easier content updates
- **SEO Optimization**: Meta tags partially implemented, sitemap needed
- **Analytics Integration**: User behavior tracking and conversion monitoring
- **Progressive Web App**: Service worker for offline functionality

## Recent Changes

### August 3, 2025 - Video Background and Windmill Animation Implementation
- **Video Background**: Implemented fullscreen video background in hero section using uploaded MP4 file
  - Added video overlay with company blue tint for better text readability
  - Updated hero content styling for better contrast on video background
  - Enhanced text with shadow effects for improved visibility
- **Windmill Scroll Animation**: Added sophisticated windmill-style scrolling animation to services section
  - Implemented scroll-triggered animations using Intersection Observer API
  - Added staggered timing delays for each service card (0.1s to 0.6s)
  - Created hover effects with gentle rotation and floating animation
  - Services cards now fade in with rotation and translation effects
- **Professional Service Images**: Integrated high-quality product photography for all service categories
  - Replaced SVG illustrations with professional product images across entire website
  - Added 9 category-specific images: pharmaceuticals, textiles, home lifestyle, gems & jewelry, agriculture, industrial machinery, automobiles, electronics, and metals
  - Applied images to index page, services page, and all individual service detail pages
  - Updated all gallery sections in individual service pages with professional product photography
  - Implemented image hover effects with scale transformation
  - Enhanced visual appeal with realistic industry representation throughout website
- **Enhanced Services Page**: Applied windmill scroll effects to services page
  - Extended windmill animations to services.html page
  - Added consistent image styling across all service cards
  - Maintained responsive design and accessibility features
- **Migration to Replit**: Successfully migrated project from Replit Agent to standard Replit environment
  - Installed Python 3.11 environment for static file serving
  - Configured HTTP server workflow on port 5000
  - Verified all assets and functionality working correctly
- **Comprehensive Mobile Responsiveness**: Implemented complete mobile responsive design for all devices
  - Enhanced mobile navigation with improved hamburger menu functionality
  - Optimized service cards, gallery, footer, and about section layouts for mobile
  - Added responsive breakpoints for small mobile (480px), tablet (768px), and large tablet (992px)
  - Improved button sizing, text readability, and touch interactions on mobile devices
  - Disabled complex windmill animations on mobile for better performance
  - Enhanced JavaScript with mobile-specific interactions (outside click, escape key)

### July 26, 2025 - Logo Integration and Color Scheme Update
- **Logo Integration**: Replaced text-based logo with actual company logo image across all pages
- **Color Scheme Update**: Updated entire website color palette to match company branding:
  - Primary Blue: #1e3a8a (navy blue from logo)
  - Accent Orange: #f97316 (orange from logo) 
  - Light Blue: #dbeafe (complementary light blue)
  - Updated buttons, links, icons, and highlights to use new color scheme
- **JavaScript Fix**: Resolved variable naming conflict in image modal function
- **Back-to-top Button**: Updated to use new orange color scheme

## Technical Notes

The website uses modern CSS custom properties (CSS variables) for consistent color theming. The contact form is structured but requires backend functionality for actual form submission processing. The design follows modern web standards with clean, professional styling suitable for a B2B sourcing company, now fully branded with company colors and logo.