# Optimum Glass Tech - Project Documentation

## Project Overview

**Project Type**: Professional Glass Services Landing Page  
**Technology Stack**: Vanilla HTML5, CSS3, JavaScript ES6+  
**Deployment**: Netlify with automatic GitHub integration  
**Domain**: optimumglasstech.com  

A static website for Optimum Glass, a family-owned glass repair and replacement business serving Indianapolis. Originally adapted from a DJ services template, fully customized for professional glass services with performance optimization and accessibility compliance.

## Architecture & Technical Design

### File Structure
```
optimum-glass-tech/
├── index.html              # Main landing page (semantic HTML5)
├── styles.css              # Complete stylesheet with design system
├── script.js               # Interactive features and analytics
├── sw.js                   # Service worker for PWA features
├── manifest.json           # Web app manifest for installation
├── netlify.toml            # Deployment config with security headers
├── CLAUDE.md               # Development guidance for AI assistants
├── README.md               # Project overview and setup instructions
└── assets/                 # Image assets and work samples
    ├── optimum-glass-logo.png
    ├── before/after gallery images
    └── placeholder-info.md
```

### Design System Architecture

**CSS Custom Properties** (`:root` definitions):
- **Color Palette**: Professional blue/green theme
  - Primary: `#2563eb` (Professional Blue)
  - Secondary: `#1e40af` (Deep Blue) 
  - Accent: `#059669` (Professional Green)
  - Emergency: `#dc2626` (Emergency Red)
- **Typography**: Inter and Roboto font families with responsive scale
- **Spacing**: Consistent scale from `--space-1` (0.25rem) to `--space-20` (5rem)
- **Glass Morphism**: `--glass-bg`, `--glass-border`, `--glass-shadow` for modern effects

**Layout Strategy**:
- Mobile-first responsive design (320px minimum width)
- CSS Grid and Flexbox for component layouts
- Semantic HTML5 structure with proper landmarks

## Core Components & Features

### 1. Header Navigation (`index.html:42-58`)
- Fixed navigation with smooth scrolling
- Logo + brand name combination
- Responsive mobile menu (hamburger)
- Links: About, Services, Why Choose, Contact

### 2. Hero Section (`index.html:59-118`)
- Glass pattern background with CSS animations
- Primary call-to-action messaging
- Contact information prominence
- Emergency service detection

### 3. About Section (`index.html:121-176`)
- Company background and experience (10+ years)
- Professional bio and family business emphasis
- Trust indicators and value propositions

### 4. Services Grid (`index.html:179-234`)
- Three primary service categories:
  - **Auto Glass**: Repair and replacement
  - **Residential**: Window installation and repair
  - **Commercial**: Business glass solutions
- Interactive cards with hover effects
- Service-specific contact forms via URL parameters

### 5. Before/After Gallery (`index.html:237-304`)
- Customer testimonials carousel
- 8-second auto-advance testimonials
- Dot navigation indicators
- Real customer feedback

### 6. Why Choose Section (`index.html:308-360`)
- Key differentiators and value propositions
- Family business emphasis
- Quality and pricing guarantees

### 7. Contact Modal (`index.html:374-506`)
- Netlify Forms integration
- Real-time client-side validation
- Required fields: name, email, phone, service type
- Success/error state handling
- Anti-spam honeypot field

## JavaScript Functionality (`script.js`)

### Core Features:
1. **Smooth Scrolling Navigation** (`initSmoothScrolling()`)
2. **Form Validation & Submission** (`initFormValidation()`)
3. **Modal Handling** (`initModalHandling()`)
4. **Animations & Scroll Effects** (`initAnimations()`)
5. **Analytics Integration** (`initAnalytics()`)
6. **Testimonial Carousel** (`initTestimonialCarousel()`)

### Emergency Service Detection
- **Hours Logic**: Before 7am or after 6pm
- **Dynamic Banner**: Creates emergency contact banner
- **Analytics Tracking**: Emergency contact events
- **Prominent Messaging**: 24/7 availability emphasis

### Form Integration
- **Backend**: Netlify Forms with spam protection
- **Form Name**: `glass-quote-request`
- **Validation**: Real-time with error messages
- **Success Handling**: In-modal confirmation
- **Service Pre-selection**: URL parameter support

### Analytics & Tracking
- **Google Analytics**: Custom events for glass business
- **Event Categories**: Service interest, form submissions, emergency contacts
- **Performance Tracking**: Page load times and user engagement
- **Conversion Tracking**: Estimate requests and phone calls

## Business Information & Content

### Contact Details
- **Phone**: (469) 794-5717
- **Email**: info@optimumglasstech.com
- **Service Area**: Indianapolis & Surrounding Areas
- **Hours**: Standard business hours with 24/7 emergency service

### Service Offerings
1. **Auto Glass Repair and Replacement**
   - Windshield repair and replacement
   - Side window replacement
   - Insurance claim assistance
2. **Residential Window Installation**
   - Window replacement and repair
   - Energy-efficient options
   - Custom sizing
3. **Commercial Glass Solutions**
   - Storefront glass repair
   - Office building windows
   - Emergency commercial service

### Value Propositions
- Family-owned business with 10+ years experience
- "Quality work at the best price"
- "We aren't satisfied until our customers are satisfied"
- Professional, reliable, and affordable service
- Emergency 24/7 service availability

## URL Parameters & Routing

### Service Pre-selection
- `?service=auto` - Auto-opens quote modal with auto glass selected
- `?service=residential` - Pre-selects residential windows
- `?service=commercial` - Pre-selects commercial glass
- `?service=emergency` - Pre-selects emergency repair

### Netlify Redirects (`netlify.toml:32-60`)
- `/quote` → `/#contact`
- `/estimate` → `/#contact`
- `/auto-glass` → `/?service=auto#services`
- `/residential` → `/?service=residential#services`
- `/commercial` → `/?service=commercial#services`
- `/emergency` → `/?service=emergency#contact`

## Performance & Optimization

### Performance Targets
- **Load Time**: <3 seconds on 3G connection
- **Lighthouse Scores**: >90 Performance, >95 Accessibility
- **File Sizes**: Total <500KB for optimal mobile experience

### Optimization Features
- **Resource Preloading**: Critical fonts and CSS preloaded
- **Image Optimization**: Compressed assets in `/assets/`
- **CSS Minification**: Efficient custom properties system
- **Caching Strategy**: Service worker with cache-first strategy
- **Security Headers**: Comprehensive security via Netlify configuration

### PWA Features (`sw.js`, `manifest.json`)
- **Service Worker**: Cache-first strategy for offline functionality
- **Web App Manifest**: Installable PWA with glass business branding
- **Cache Strategy**: Critical resources cached for offline access

## SEO & Accessibility

### SEO Implementation
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Meta Tags**: Optimized for local glass service searches
- **Open Graph**: Social media sharing optimization
- **Local Business Focus**: Indianapolis-specific keywords and content
- **Structured Data Ready**: Business information markup ready for implementation

### Accessibility Features (WCAG 2.1 AA Compliant)
- **Semantic Markup**: Proper HTML5 elements and ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Descriptive alt text and labels
- **High Contrast**: Color ratios meet accessibility standards
- **Reduced Motion**: Respects `prefers-reduced-motion` settings

## Deployment & Configuration

### Netlify Configuration (`netlify.toml`)
- **Static Site**: No build process required
- **Security Headers**: XSS protection, content type validation
- **Caching**: Optimized cache control for assets
- **Form Handling**: Automatic Netlify Forms processing
- **Redirects**: SEO-friendly URL structure

### Environment Support
- **Development**: Open `index.html` locally or use Live Server
- **Production**: Automatic deployment via GitHub integration
- **Testing**: Manual cross-browser and device testing

## Content Management Areas

### Key Sections for Updates
1. **Hero Contact Info** (`index.html:80-115`)
2. **About Company Details** (`index.html:140-170`)
3. **Service Descriptions** (`index.html:190-230`)
4. **Testimonials** (`index.html:250-300`)
5. **Contact Information** (`index.html:420-435`)
6. **Emergency Hours Logic** (`script.js:635-655`)

### Business Information Updates
- Contact details appear in multiple locations
- Service descriptions customizable for specific offerings
- Testimonials replaceable with real customer reviews
- Emergency hours configurable in JavaScript

## Development Guidelines

### Code Standards
- **HTML**: Semantic HTML5 with accessibility in mind
- **CSS**: Custom properties design system, mobile-first approach
- **JavaScript**: ES6+ features, modular function organization
- **Performance**: Optimize for real-world 3G connections

### Customization Notes
- Use existing CSS custom properties for consistent theming
- Follow established component patterns for new features
- Maintain accessibility compliance for all changes
- Test across modern browsers (Chrome, Firefox, Safari, Edge)

### Analytics Configuration
- Google Analytics integration ready
- Custom events for glass business tracking
- Performance monitoring and user engagement metrics
- Conversion tracking for business objectives

## Integration Points

### Third-Party Services
- **Netlify Forms**: Contact form backend with spam protection
- **Google Fonts**: Inter and Roboto font families
- **Google Analytics**: Business performance tracking
- **Service Worker**: Progressive Web App functionality

### Future Enhancement Opportunities
- **Live Chat Integration**: Customer service widget
- **Online Scheduling**: Appointment booking system
- **Payment Processing**: Deposit collection capability
- **CRM Integration**: Customer relationship management
- **Local Business Schema**: Structured data for search engines