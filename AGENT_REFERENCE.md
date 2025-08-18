# Claude Agent Technical Reference - Optimum Glass Tech

## Quick Start for Agents

**Project Type**: Static glass services website  
**Stack**: Vanilla HTML/CSS/JS  
**Deployment**: Netlify with GitHub integration  
**No Build Process**: Open `index.html` directly or use Live Server  

## File Modification Guidelines

### Critical Files for Common Tasks

#### Content Updates
- **Contact Info**: `index.html:80-115, 420-435` + `script.js:485` (emergency tracking)
- **Services**: `index.html:190-230` (service descriptions and pricing)
- **Company Info**: `index.html:140-170` (about section, experience years)
- **Testimonials**: `index.html:250-300` (customer reviews)

#### Styling Changes
- **Colors**: `styles.css:2-26` (CSS custom properties)
- **Typography**: `styles.css:34-47` (font variables)
- **Layout**: Mobile-first responsive, use existing grid/flexbox patterns

#### Functionality Updates
- **Form Logic**: `script.js:137-170` (validation), `script.js:240-290` (submission)
- **Emergency Hours**: `script.js:635-655` (time detection logic)
- **Analytics**: `script.js:415-490` (event tracking)

### Component Structure Reference

```
Header (Fixed Nav)          | Lines 42-58   | Logo + navigation
Hero Section               | Lines 59-118  | CTA + contact prominence  
About Section             | Lines 121-176 | Company background
Services Grid             | Lines 179-234 | 3 service categories
Before/After Gallery      | Lines 237-304 | Testimonials carousel
Why Choose Section        | Lines 308-360 | Value propositions
Contact Section          | Lines 411-450 | Contact details + CTA
Contact Modal            | Lines 374-506 | Quote request form
```

## Business Context for Agents

### Company Details
- **Business**: Optimum Glass (family-owned, 10+ years)
- **Location**: Indianapolis & surrounding areas
- **Phone**: (469) 794-5717
- **Email**: info@optimumglasstech.com
- **Specialty**: Auto, residential, commercial glass repair/replacement

### Service Categories
1. **Auto Glass**: Windshield repair/replacement, side windows, insurance claims
2. **Residential**: Window replacement, energy-efficient options, custom sizing
3. **Commercial**: Storefront glass, office buildings, emergency service

### Key Value Props
- Family-owned with 10+ years experience
- "Quality work at the best price"
- Customer satisfaction guarantee
- 24/7 emergency service availability

## Common Agent Tasks & Solutions

### 1. Content Updates
**Task**: Update business hours, contact info, or service descriptions  
**Files**: `index.html` (multiple locations), potentially `script.js` for emergency logic  
**Pattern**: Search for existing content, replace consistently across all locations  

### 2. Style Modifications
**Task**: Change colors, fonts, or layout  
**Approach**: Modify CSS custom properties in `:root` for global changes  
**Files**: `styles.css:2-70` (design system variables)  

### 3. Form Enhancements
**Task**: Add form fields, modify validation, change submission behavior  
**Files**: `index.html:459-506` (form structure), `script.js:137-290` (logic)  
**Key**: Maintain Netlify Forms compatibility (`name="glass-quote-request"`)  

### 4. Performance Optimization
**Task**: Improve load times, optimize images, enhance SEO  
**Focus Areas**: Image compression, CSS efficiency, HTML semantic structure  
**Tools**: Lighthouse audits, browser dev tools  

### 5. Mobile/Responsive Issues
**Pattern**: Mobile-first CSS approach, test at 320px minimum width  
**Key Breakpoints**: Check `styles.css` media queries around lines 1200+  

## Technical Implementation Patterns

### CSS Architecture
- **Design System**: All styling via CSS custom properties (`:root`)
- **Component Pattern**: `.component__element--modifier` BEM-style naming
- **Responsive**: Mobile-first with progressive enhancement
- **Animation**: CSS transforms and transitions, respects `prefers-reduced-motion`

### JavaScript Patterns
- **Initialization**: All features initialized in `DOMContentLoaded` event
- **Modular Functions**: Each feature has dedicated init function
- **Event Handling**: `addEventListener` pattern throughout
- **Form Handling**: Real-time validation + Netlify Forms submission

### Form Integration Details
- **Backend**: Netlify Forms (automatic processing)
- **Required Setup**: `name="glass-quote-request"` + hidden form-name field
- **Validation**: Client-side real-time with server-side spam protection
- **Success Flow**: In-modal confirmation message

## URL Parameters & Routing
- `?service=auto|residential|commercial|emergency` - Pre-selects service type
- Netlify redirects handle common glass service search terms
- All routing configured in `netlify.toml:32-60`

## Emergency Service Logic
- **Time Detection**: Before 7am or after 6pm (`script.js:635`)
- **Dynamic Banner**: Created programmatically with emergency contact
- **Analytics**: Special tracking for emergency contact events
- **Hours Customizable**: Modify time logic in `handleEmergencyService()`

## Analytics & Tracking
- **Events**: Service interest, form submissions, emergency contacts, page performance
- **Setup**: Google Analytics with glass business-specific custom events
- **Key Metrics**: Contact form conversions, phone call tracking, page engagement

## Security & Performance
- **Security Headers**: Comprehensive protection via `netlify.toml`
- **PWA Features**: Service worker caching, installable app manifest
- **Performance**: <3s load time target, optimized for 3G connections
- **Accessibility**: WCAG 2.1 AA compliant

## Development Workflow
1. **Local Development**: Open `index.html` directly or use Live Server
2. **Testing**: Manual cross-browser testing (Chrome, Firefox, Safari, Edge)
3. **Deployment**: Automatic via GitHub push to Netlify
4. **Monitoring**: Check Lighthouse scores, form submissions, analytics

## Common Gotchas for Agents

1. **Contact Info Consistency**: Update contact details in ALL locations (hero, contact section, modal, footer, emergency banner)
2. **Form Integration**: Maintain `name="glass-quote-request"` and hidden form-name field for Netlify Forms
3. **Mobile-First**: Always test responsive design starting at 320px width
4. **Emergency Banner**: Logic depends on current time, test at different hours
5. **Asset Paths**: Use relative paths for assets, ensure images exist in `/assets/`
6. **CSS Custom Properties**: Use existing design system variables instead of hardcoded values
7. **Accessibility**: Maintain semantic HTML structure and ARIA labels when making changes

## Quick Commands for Common Tasks

### Update Contact Phone Number
```bash
# Search for all instances
grep -r "(469) 794-5717" .
# Update in index.html, script.js, and any other files found
```

### Change Color Scheme
```css
/* Modify in styles.css:4-9 */
--color-primary: #new-color;
--color-secondary: #new-color;
--color-accent: #new-color;
```

### Add New Service Type
1. Update `index.html:485-493` (service dropdown options)
2. Update `script.js:620-625` (URL parameter mapping)
3. Consider adding new service card in services grid

### Test Emergency Banner
```javascript
// In browser console, force current time to trigger emergency
// Modify script.js:635 time conditions temporarily for testing
```

This reference provides Claude agents with the essential information needed to effectively work on the Optimum Glass Tech website while maintaining business requirements and technical standards.