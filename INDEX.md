# Optimum Glass Tech - Master Project Index

**Quick Navigation**: [🚀 Quick Start](#-quick-start) | [📁 Files](#-file-structure) | [📚 Documentation](#-documentation-reference) | [🛠️ Development](#%EF%B8%8F-development-workflows) | [💼 Business](#-business-context) | [🎯 Common Tasks](#-common-tasks--solutions)

---

## 🚀 Quick Start

**Project Type**: Static glass services website | **Stack**: Vanilla HTML/CSS/JS | **Deploy**: Netlify + GitHub  
**Local Dev**: Open `index.html` directly or use Live Server | **No Build Process Required**

### Business Overview
- **Company**: Optimum Glass (Family-owned, 10+ years experience)
- **Phone**: (469) 794-5717 | **Email**: info@optimumglasstech.com
- **Location**: Indianapolis & Surrounding Areas
- **Services**: Auto Glass, Residential Windows, Commercial Glass, 24/7 Emergency

### For Developers
```bash
# Get started immediately
git clone [repository]
open index.html  # or use Live Server

# Common dev tasks
grep -r "contact-info-here" .     # Find contact info locations
grep -r "--color-primary" .       # Find design system variables
```

---

## 📁 File Structure

```
optimum-glass-tech/
├── 📄 index.html              # Main landing page [531 lines]
├── 🎨 styles.css              # Complete design system [1000+ lines]
├── ⚡ script.js               # Interactive features [700+ lines]
├── 🔧 sw.js                   # Service worker for PWA
├── 📱 manifest.json           # Web app manifest
├── 🌐 netlify.toml            # Deployment & security config
├── 📚 Documentation/
│   ├── README.md              # Project overview & setup
│   ├── CLAUDE.md              # AI assistant guidance
│   ├── PROJECT_DOCUMENTATION.md # Technical architecture
│   ├── AGENT_REFERENCE.md     # Quick reference for agents
│   └── INDEX.md               # This master index
└── 🖼️ assets/                 # Images & work samples
    ├── optimum-glass-logo.png
    ├── windshield-*.jpg (before/after)
    └── placeholder-info.md
```

### Key Line References
| Component | File | Lines | Description |
|-----------|------|-------|-------------|
| **Header Nav** | index.html | 42-55 | Logo + navigation menu |
| **Hero Section** | index.html | 57-120 | Main CTA with glass pattern bg |
| **About** | index.html | 121-176 | Company background & experience |
| **Services Grid** | index.html | 179-234 | Auto/Residential/Commercial cards |
| **Testimonials** | index.html | 237-304 | Customer reviews carousel |
| **Contact Modal** | index.html | 374-506 | Quote request form |
| **Design System** | styles.css | 2-100 | CSS custom properties |
| **Form Logic** | script.js | 137-290 | Validation & submission |
| **Emergency Banner** | script.js | 635-655 | After-hours detection |

---

## 📚 Documentation Reference

### Primary Documentation
- **[README.md](README.md)** - Project overview, setup, features overview
- **[CLAUDE.md](CLAUDE.md)** - AI assistant context and guidance  
- **[PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)** - Complete technical architecture
- **[AGENT_REFERENCE.md](AGENT_REFERENCE.md)** - Quick reference for AI agents

### Documentation Cross-Reference Matrix
| Need | README | CLAUDE | PROJECT_DOC | AGENT_REF |
|------|---------|---------|-------------|-----------|
| **Getting Started** | ✅ Primary | ⚠️ Context | ⚠️ Deep dive | ⚠️ Agent focus |
| **Business Info** | ✅ Overview | ✅ Detailed | ✅ Complete | ✅ Quick ref |
| **Technical Architecture** | ⚠️ Basic | ⚠️ Component focused | ✅ Complete | ⚠️ Implementation |
| **Development Workflow** | ✅ Setup | ✅ Commands | ✅ Architecture | ✅ Common tasks |
| **Customization Guide** | ✅ Basic | ✅ Content areas | ✅ Technical details | ✅ File locations |
| **Form Integration** | ✅ Setup | ✅ Structure | ✅ Technical | ✅ Gotchas |

**Legend**: ✅ = Primary source, ⚠️ = Supplementary information

---

## 🛠️ Development Workflows

### Common Development Tasks
| Task | Primary File | Supporting Files | Line References |
|------|-------------|------------------|----------------|
| **Update Contact Info** | index.html | script.js | Multiple locations ([details](#contact-information-locations)) |
| **Modify Services** | index.html | script.js, styles.css | 179-234, analytics tracking |
| **Change Colors** | styles.css | - | 3-45 (custom properties) |
| **Form Customization** | index.html, script.js | netlify.toml | 374-506, 137-290 |
| **Content Updates** | index.html | - | [Section reference](#component-line-references) |

### Framework-Specific Patterns
**Vanilla JavaScript Architecture**:
- **Initialization Pattern**: All features init in `DOMContentLoaded` (script.js:2-10)
- **Modular Functions**: Each feature has dedicated init function
- **Event Handling**: `addEventListener` pattern throughout
- **Form Handling**: Real-time validation + Netlify Forms backend

**CSS Architecture**:
- **Design System**: CSS custom properties in `:root` (styles.css:2-100)
- **Component Pattern**: BEM-style naming (`.component__element--modifier`)
- **Mobile-First**: Responsive with progressive enhancement
- **Animation**: Respects `prefers-reduced-motion`

---

## 💼 Business Context

### Services & Value Propositions
| Service Category | Target Market | Key Value Props | Form Integration |
|-----------------|---------------|-----------------|------------------|
| **Auto Glass** | Vehicle owners, Insurance claims | Mobile service, Insurance billing | `?service=auto` |
| **Residential** | Homeowners, Property managers | Energy efficiency, Custom sizing | `?service=residential` |
| **Commercial** | Business owners, Property mgmt | Emergency service, Storefront focus | `?service=commercial` |
| **Emergency** | All markets, After-hours needs | 24/7 availability, Rapid response | `?service=emergency` |

### Contact Information Locations
```
Contact details appear in multiple files - update all consistently:
├── index.html:80-115    # Hero section contact
├── index.html:420-435   # Contact section details
├── index.html:459-506   # Modal form email settings
├── script.js:485        # Emergency tracking phone number
└── Footer sections      # Business hours and location
```

### Emergency Service Logic
- **Time Detection**: Before 7am or after 6pm (script.js:635)
- **Dynamic Banner**: Programmatically created with emergency contact
- **Analytics Tracking**: Special events for emergency contact
- **Customizable Hours**: Modify time logic in `handleEmergencyService()`

---

## 🎯 Common Tasks & Solutions

### Content Management
| Task | Files | Approach | Cross-References |
|------|-------|----------|------------------|
| **Update Business Hours** | script.js:635 | Modify time conditions | [Emergency Service](#emergency-service-logic) |
| **Change Service Descriptions** | index.html:190-230 | Edit service card content | [Services Architecture](PROJECT_DOCUMENTATION.md#services-grid-lines-179-234) |
| **Add New Services** | index.html, script.js | Update form options + tracking | [Agent Reference](AGENT_REFERENCE.md#add-new-service-type) |
| **Modify Testimonials** | index.html:250-300 | Replace carousel content | [Component Structure](AGENT_REFERENCE.md#component-structure-reference) |

### Styling & Design
```css
/* Quick color scheme change */
:root {
  --color-primary: #new-color;     /* Primary brand color */
  --color-secondary: #new-color;   /* Secondary brand */
  --color-accent: #new-color;      /* Accent/CTA color */
}
```

### Form & Analytics
- **Form Backend**: Netlify Forms with `name="glass-quote-request"`
- **Required Fields**: name, email, phone, serviceType
- **URL Parameters**: `?service=type` for service pre-selection
- **Analytics Events**: Service interest, form submissions, emergency contacts

---

## 🔗 Integration Points

### Third-Party Services
| Service | Purpose | Configuration | Documentation |
|---------|---------|---------------|---------------|
| **Netlify Forms** | Contact form backend | `netlify.toml` | [Form Integration](CLAUDE.md#form-integration) |
| **Google Analytics** | Business tracking | `index.html` + `script.js` | [Analytics](PROJECT_DOCUMENTATION.md#analytics--tracking) |
| **Google Fonts** | Typography | `index.html:25-29` | [Design System](styles.css:52-65) |
| **PWA Features** | App installation | `manifest.json` + `sw.js` | [Performance](README.md#-performance-features) |

### SEO & Performance
- **Performance Targets**: <3s load time, >90 Lighthouse scores
- **SEO Focus**: Local Indianapolis glass repair searches
- **Accessibility**: WCAG 2.1 AA compliant
- **Browser Support**: Modern browsers (latest 2 versions)

---

## 🚨 Development Gotchas & Best Practices

### Critical Consistency Points
1. **Contact Info**: Must be updated in ALL locations (hero, contact, modal, footer)
2. **Form Integration**: Maintain `name="glass-quote-request"` for Netlify
3. **Mobile-First**: Always test responsive starting at 320px
4. **Emergency Hours**: Time-dependent logic needs testing at different hours
5. **Asset Paths**: Use relative paths, ensure assets exist in `/assets/`

### Quality Gates
- **Accessibility**: Maintain semantic HTML and ARIA labels
- **Performance**: Keep total size <500KB
- **SEO**: Preserve semantic structure and meta tags
- **Analytics**: Test event tracking after changes

---

## 📖 Related Documentation

### External Resources
- **Netlify Forms**: [Official Documentation](https://docs.netlify.com/forms/setup/)
- **Web App Manifest**: [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- **WCAG Guidelines**: [Accessibility Standards](https://www.w3.org/WAI/WCAG21/quickref/)

### Development Tools
- **Live Server**: VS Code extension for local development
- **Lighthouse**: Performance and accessibility auditing
- **Browser DevTools**: Responsive design testing

---

**Last Updated**: Current as of project structure  
**Maintained By**: Optimum Glass Tech development team  
**License**: All rights reserved to Optimum Glass