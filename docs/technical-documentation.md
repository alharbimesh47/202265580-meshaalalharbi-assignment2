

# Technical Documentation

**Project**: Portfolio Website  
**Student**: Meshaal Alharbi  
**Date**: February 2025

---

## Overview

A simple personal portfolio website with three sections: About, Projects, and Contact. Built with HTML, CSS, and JavaScript.

---

## Technologies

- HTML5
- CSS3
- JavaScript
- Git and GitHub

---

## File Structure
```
assignment-1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └──docs
│   └── images/
│       ├── project1.png
│       └── project2.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```

---

## Features

### HTML Structure
- Navigation bar with links to About, Projects, and Contact
- About section with greeting and introduction
- Projects section with two project cards
- Contact form with name, email, and message fields

### CSS Styling
- Responsive layout using CSS Grid and Flexbox
- Dark and light theme
- Sticky navigation bar
- Hover effects on cards and buttons
- Mobile responsive with media queries at 768px and 480px

### JavaScript Functionality
1. Welcome greeting displayed on page load
2. Theme toggle button that switches between dark and light mode
3. Theme preference saved in localStorage
4. Button text changes based on current theme
5. Form submission with alert message

---

## Color Scheme

**Light Mode:**
- Background: #f4f4f4
- Navigation: #2c3e50
- Accent: #3498db

**Dark Mode:**
- Background: #1a1a1a
- Navigation: #111
- Accent: #5dade2

---

## Responsive Breakpoints

- Desktop: Full layout with two-column grid
- Tablet (768px): Stacked navigation, adjusted spacing
- Mobile (480px): Single column layout, smaller text

---

## Browser Compatibility

Tested on:
- Google Chrome
- Safari

---

## Code Structure

**HTML**: Simple semantic structure with clear sections

**CSS**: 
- Basic reset at the top
- Navigation styles
- Section styles
- Dark theme overrides
- Media queries at the end

**JavaScript**:
- DOM ready event listener
- Greeting setup
- Theme toggle with localStorage
- Form submit handler

---

## Known Limitations

1. Contact form does not actually send emails
2. Only two placeholder projects
3. No backend functionality
4. Images are simple icons, not real screenshots

---

## Future Improvements

- Add more projects as I complete them
- Include a skills section
- Add social media links
- Connect contact form to email service
- Add a resume download button

---

## How to Run

1. Download the project files
2. Open index.html in a web browser
3. No installation or setup needed

---

## Lessons Learned

- CSS Grid makes card layouts easy
- localStorage is simple to use for saving preferences
- Media queries are important for mobile design
- Testing on different screen sizes is essential
- Keep code organized from the start

---

**Last Updated**: February 2025  
**Author**: Meshaal Alharbi