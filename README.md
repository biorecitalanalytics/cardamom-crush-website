# Cardamom Crush Website V3

This is a static website ready for Netlify hosting.

## Live-site editing
This site now includes a browser-based admin editor at:

```text
https://cardamomcrush.ca/admin/
```

The admin editor uses Decap CMS with Netlify Identity and Git Gateway. From the admin UI, you can update menu items, prices, pictures, availability, market details, catering checkbox options, business links, and QR-code landing page buttons.

Menu photos uploaded through the admin UI are saved in `assets/menu`.

## Netlify setup for the admin editor
After the site is connected to a Git repository and deployed on Netlify:

1. In Netlify, go to Site configuration > Identity and enable Identity.
2. Set registration to Invite only.
3. Enable Git Gateway under Identity services.
4. Invite yourself as a user.
5. Open the invite email, set your password, then go to `/admin/`.

When you save in `/admin/`, Decap CMS commits the change to the `main` branch. Netlify then rebuilds and publishes the updated live site.

### Everyday menu workflow

1. Visit `https://cardamomcrush.ca/admin/` and sign in.
2. Open **Site Content**, then **Menu & Website Content**.
3. Expand **Menu Sections** and choose the section and item to edit.
4. Set **Menu Status** to **Available**, **Sold out**, or **Hidden**.
5. Drag menu items or sections to change their public display order.
6. Select **Publish** to save the changes. Netlify will rebuild the site automatically.

Use **Sold out** when customers should still see an item, and **Hidden** when it should disappear from the public menu without being deleted. Turn off **Show this section** to hide an entire menu category temporarily.

### Add or remove menu sections and items

- To add a category such as Cookies or Cupcakes, open **Menu Sections** and select **Add Menu Section**.
- To add a product, open its category and select **Add Menu Item**.
- Use the drag handle to change the order of categories or products.
- Use the trash icon beside a category or product to delete it permanently.
- Choose **Hidden** instead of deleting an item if you may offer it again later.
- Select **Publish** when finished. The homepage menu preview and full menu page will both update after Netlify deploys the saved content.

### Add gallery images and customer reviews

- Open **Product Gallery** in the admin editor and select **Add Gallery Image**.
- Upload a product photo, provide a useful image description, and optionally add a caption.
- Open **Customer Reviews** and select **Add Customer Review** to enter an approved quote, customer name, and optional context.
- Drag gallery images or reviews to reorder them, or use the trash icon to remove one.
- The gallery and review sections stay hidden when empty and appear on the homepage after you add content and publish. Visitors can click any gallery image to view it at a larger size.

Only publish customer messages when you have permission to share them. Use a first name or initials when appropriate, and never include private contact information.

## What is editable?
Most business content is now in `data/site.json` and can be edited from `/admin/`:

- Business email and social media links
- QR-code landing page buttons
- Market venues, schedule, booth notes, and locations
- Menu sections and menu items
- Prices
- Menu item pictures
- Dietary notes
- Ingredients
- Recipe / prep notes
- Catering product checkbox list

## How to edit menu, prices, pictures, ingredients, recipes, or market venues
Use `/admin/` on the live site for normal updates. The text-file workflow is still available for developer updates:

1. Open `data/site.json` in a text editor.
2. Change the text inside quotation marks.
3. Keep commas, brackets, and quotation marks in place.
4. Save the file.
5. Upload the updated folder to Netlify again, or commit the change if using GitHub.

## How to add or update a menu item
In `/admin/`, open Site Content > Menu & Website Content > Menu Sections.

For developer edits, each menu item lives inside one of the `menuSections` groups in `data/site.json`.

To update an existing item, change its `name`, `description`, `price`, `image`, `dietary`, `ingredients`, or `recipeNote`.

To add a new item, copy an existing item block, paste it into the correct section, and update the text. Keep a comma between item blocks.

Example:

```json
{
  "name": "Iced Chai Latte",
  "description": "Chilled chai with milk served over ice.",
  "price": "$6",
  "image": "/assets/menu/iced-chai-latte.jpg",
  "dietary": "Contains milk",
  "ingredients": ["chai concentrate", "milk", "ice"],
  "recipeNote": "Mix concentrate with milk and ice. Sweeten to taste."
}
```

## How to add menu pictures
From `/admin/`, use the Picture field on any menu item.

For developer edits:

1. Add the photo file to `assets/menu`.
2. Use simple lowercase file names, such as `iced-chai-latte.jpg`.
3. In `data/site.json`, set `image` to the matching path, such as `"/assets/menu/iced-chai-latte.jpg"`.
4. If an item has no picture yet, leave `image: ""` or remove the `image` line.

## Important
The public website is static. The `/admin/` editor is password-protected through Netlify Identity, and it saves changes by committing them to the connected Git repository.

`editable-data.js` remains as a fallback for older/local previews. The live site reads `data/site.json` first.

For private recipes, do not put exact full recipes online. Use the `recipeNote` field for public prep notes only, or keep private production recipes in a separate internal document.

## Netlify forms
The catering and contact forms are ready for Netlify Forms.
After deployment, submit one test form to activate form detection in Netlify.

## QR code recommendation
Point your printed QR code to:

https://cardamomcrush.ca/links

That page can be updated anytime through `editable-data.js` without reprinting the QR code.
