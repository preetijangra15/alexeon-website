# AlexEon website starter

A responsive static 3-page manufacturer website:
- `index.html` — landing page
- `products.html` — product catalogue cards, without pricing
- `contact.html` — contact details and enquiry form
- `styles.css` — shared responsive styling
- `script.js` — mobile navigation, current year, and email enquiry behaviour
- `assets/` — locally stored illustrative SVG product placeholders

## Before publishing
1. In `contact.html`, replace `YOUR_EMAIL_HERE`, `+91 XXXXX XXXXX`, and `Your city, India` with the company's actual details.
2. In `script.js`, replace `YOUR_EMAIL_HERE` with the same real enquiry email.
3. Replace illustrative SVG placeholders with photographs of the real product models when available.
4. Confirm the product categories/names and descriptions match the actual catalogue.
5. Add a real submission endpoint (Netlify Forms, Formspree, or a backend) if you want the form to submit without opening the visitor's email app.

## Quickest deployment: Netlify
1. Extract this ZIP on your computer.
2. Open Netlify and sign in/create an account.
3. From the Netlify dashboard, choose **Add new site** / **Deploy manually** (wording may vary).
4. Drag the extracted `alexeon-website` folder into the deploy area. If it asks for a folder, select the folder containing `index.html`.
5. Netlify will provide a temporary `*.netlify.app` URL.
6. Test all three pages and the contact details before connecting your own domain.

No build command or framework setup is required. This is a static HTML/CSS/JavaScript website.
