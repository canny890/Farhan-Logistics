# Farhan Logistics - Vanilla HTML/CSS/JS Version

This project has been converted from React/TypeScript to vanilla HTML, CSS, and JavaScript.

## Files

### Main HTML File
- **main.html** - Complete single-page website with all sections

### Stylesheets
- **styles.css** - All styling including responsive design

### JavaScript
- **app.js** - All functionality including navigation, forms, and dynamic content

## Features

### Fully Functional Components
1. **Responsive Navigation** - Mobile menu with smooth scrolling
2. **Hero Section** - Eye-catching banner with call-to-action buttons
3. **Services Section** - Dynamic service cards
4. **Fleet Showcase** - Complete vehicle gallery with specifications
5. **About Section** - Company profile, mission/vision, and testimonials
6. **Contact Form** - Fully validated quote request form
7. **Floating Contact Buttons** - Quick access to WhatsApp and email
8. **Responsive Footer** - Complete site links and contact information

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No frameworks or dependencies
- **Google Fonts** - Inter font family
- **Responsive Design** - Mobile-first approach with breakpoints

## How to Use

### Option 1: Direct Use
Simply open `main.html` in any modern web browser.

### Option 2: Local Server
For better performance and to test all features:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then visit: http://localhost:8000/main.html

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Form Functionality
The contact form includes:
- Client-side validation
- Error messaging
- Success/error feedback
- All required fields marked with asterisks

**Note:** The form currently uses a simulated submission. To connect to a real backend:
1. Update the form submission logic in `app.js`
2. Replace the simulated API call with your actual endpoint

## Customization

### Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary: #1E5FB4;
    --accent: #FF8A00;
    --dark: #1a202c;
}
```

### Content
Edit data arrays in `app.js`:
- `SERVICES` - Service offerings
- `FLEET` - Vehicle information
- `TESTIMONIALS` - Client testimonials

### Images
All images use Pexels URLs. To use custom images:
1. Add images to an `images/` folder
2. Update image URLs in `app.js` and `main.html`

## File Structure
```
project/
├── main.html       # Main HTML file
├── styles.css      # All styles
├── app.js          # All JavaScript
└── README.md       # This file
```

## Performance Notes
- Images use lazy loading
- Smooth scrolling enabled
- CSS animations for enhanced UX
- Mobile-optimized with responsive breakpoints
- No external dependencies (except Google Fonts)

## Contact Information
- Phone: +92 343 2426160
- Email: Farhan4naseem@gmail.com
- Address: Office No 15-B, MEZZANINE FLOOR NAGINA CENTER MA JINNAH ROAD KEMARI KARACHI

## Credits
Design by Graphics Vibes - https://www.graphicsvibes.pk
