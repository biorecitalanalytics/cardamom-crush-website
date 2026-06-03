# Cardamom Crush Website V3

This is a static website ready for Netlify hosting.

## What is editable?
Most business content is now in `editable-data.js`:

- Business email and social media links
- QR-code landing page buttons
- Market venues, schedule, booth notes, and locations
- Menu sections and menu items
- Prices
- Dietary notes
- Ingredients
- Recipe / prep notes
- Catering product checkbox list

## How to edit menu, ingredients, recipes, or market venues
1. Open `editable-data.js` in a text editor.
2. Change the text inside quotation marks.
3. Keep commas, brackets, and quotation marks in place.
4. Save the file.
5. Upload the updated folder to Netlify again, or commit the change if using GitHub.

## Important
This is not a password-protected admin panel. It is a simple editable content file for easy updates before/after deployment.

For private recipes, do not put exact full recipes online. Use the `recipeNote` field for public prep notes only, or keep private production recipes in a separate internal document.

## Netlify forms
The catering and contact forms are ready for Netlify Forms.
After deployment, submit one test form to activate form detection in Netlify.

## QR code recommendation
Point your printed QR code to:

https://cardamomcrush.ca/links

That page can be updated anytime through `editable-data.js` without reprinting the QR code.
