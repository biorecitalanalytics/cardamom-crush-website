/*
  Cardamom Crush editable website content
  Edit this file when you want to update menu items, prices, pictures,
  ingredients, recipes, market venues, dates, social links, and QR landing-page buttons.
  Keep the commas and quotation marks exactly like the examples below.

  Menu picture tip:
  1. Add your food photo to the assets/menu folder.
  2. Add an image line to the matching item, for example:
     image: "assets/menu/masala-chai.jpg",
  3. Leave image blank or remove the line if an item has no picture yet.
*/
window.CC_DATA = {
  business: {
    name: "Cardamom Crush",
    tagline: "Sweet Spice & Satisfaction",
    email: "cardamom.crush@gmail.com",
    website: "https://cardamomcrush.ca",
    instagram: "https://www.instagram.com/cardamom_crush",
    instagramHandle: "@cardamom_crush",
    facebook: "https://www.facebook.com/cardamomcrush",
    facebookHandle: "@cardamomcrush"
  },
  marketVenues: [
    {
      name: "Carleton Place Farmers' Market",
      location: "11 Beckwith Street, Carleton Place, Ontario, K7C 0R1",
      schedule: "Saturdays from 8:30 AM to 12:30 PM during market season",
      booth: "Booth number to be confirmed",
      notes: "Follow us on Instagram and Facebook for weekly menu updates, free samples, and weather-related changes."
    }
  ],
  menuSections: [
    {
      title: "Drinks",
      items: [
        {
          name: "Authentic Masala Chai",
          description: "Warm brewed chai with milk and traditional spices.",
          price: "",
          image: "",
          dietary: "Contains milk",
          ingredients: ["black tea", "milk", "cardamom", "ginger", "cinnamon", "cloves", "black pepper"],
          recipeNote: "Serve hot. Sweeten to taste when requested."
        },
        // {
        //   name: "Iced Chai Latte",
        //   description: "Chilled chai with milk served over ice.",
        //   price: "",
        //   image: "assets/menu/iced-chai-latte.jpg",
        //   dietary: "Contains milk",
        //   ingredients: ["chai concentrate", "milk", "ice"],
        //   recipeNote: "Mix concentrate with milk and ice. Sweeten to taste."
        // },
        {
          name: "Chai Concentrate Bottles",
          description: "Take-home brewed concentrate. Add milk and sweetener to taste.",
          price: "",
          dietary: "No milk or sugar added unless noted",
          ingredients: ["black tea", "cardamom", "ginger", "cinnamon", "cloves", "black pepper", "mint"],
          recipeNote: "Keep refrigerated. Mix with milk and sweetener of choice."
        }
      ]
    },
    {
      title: "Puddings",
      items: [
        {
          name: "Traditional Rice Pudding",
          description: "Creamy, spiced, and comforting rice pudding.",
          price: "",
          dietary: "Contains milk; gluten-free",
          ingredients: ["whole milk", "rice", "dates", "jaggery", "golden raisins", "cardamom", "saffron", "nuts"],
          recipeNote: "Serve chilled or gently warmed. Garnish before serving."
        },
        {
          name: "Quinoa Chia Pudding",
          description: "Plant-based pudding with fruit and nut toppings.",
          price: "",
          dietary: "Plant-based; gluten-free",
          ingredients: ["quinoa", "chia seeds", "almond milk", "maple syrup", "blueberries", "sliced almonds"],
          recipeNote: "Keep chilled. Add toppings close to serving time."
        }
      ]
    },
    {
      title: "Baked Treats",
      items: [
        {
          name: "NYC Chocolate Chip Cookie",
          description: "Thick gluten-free cookie with dairy-free chocolate chips.",
          price: "",
          dietary: "Gluten-free; plant-based",
          ingredients: ["almond flour", "gluten-free oat flour", "almond butter", "coconut sugar", "apple sauce", "dairy-free chocolate chips"],
          recipeNote: "Bringing a classic cookie to the market with a twist. Perfect for all-day snacking."
        },
        {
          name: "Almond Croissant Cookie",
          description: "Almond-forward cookie with bakery-style flavour.",
          price: "",
          dietary: "Gluten-free; plant-based",
          ingredients: ["almond flour", "maple syrup", "vegan butter", "almond extract", "sliced almonds", "powdered sugar"],
          recipeNote: "Healthy and delicious treat with a hint of indulgence."
        },
        {
          name: "Wholesome Breakfast Cookie",
          description: "Oats, raisins, cinnamon, and nut butter.",
          price: "",
          dietary: "Gluten-free; plant-based",
          ingredients: ["gluten-free oats", "almond butter", "chickpea flour", "coconut sugar", "maple syrup", "raisins", "cinnamon"],
          recipeNote: "Great as a breakfast-style market item."
        },
        {
          name: "Zucchini Brownie",
          description: "Fudgy brownie made with zucchini and cocoa.",
          price: "",
          dietary: "Gluten-free; plant-based",
          ingredients: ["zucchini", "flax seeds", "almond flour", "peanut butter", "cocoa powder", "maple syrup", "coconut sugar"],
          recipeNote: "A yummy chocolate delight with hidden veggies for a healthier treat."
        },
        {
          name: "Cupcakes",
          description: "Blueberry and chocolate chip flavours.",
          price: "",
          dietary: "Gluten-free; plant-based",
          ingredients: ["gluten-free flour", "dairy-free milk", "vegan butter", "neutral oil", "vanilla", "blueberries or chocolate chips"],
          recipeNote: "Perfect for a sweet treat that's both healthy and delicious."
        }
      ]
    },
    {
      title: "Energy Bliss Balls",
      items: [
        {
          name: "Matcha Bliss Balls",
          description: "Delicately sweet with earthy matcha notes, these energizing bites offer a smooth, balanced flavor and a gentle boost from antioxidant-rich green tea.",
          price: "",
          dietary: "Gluten-free; plant-based; egg-free",
          ingredients: [
            "organic gluten-free rolled oats",
            "desiccated coconut",
            "almond flour",
            "cashew flour",
            "pure maple syrup",
            "organic matcha powder"
          ],
          recipeNote: "A naturally energizing snack featuring premium matcha and wholesome ingredients for a clean, satisfying bite."
        },
        {
          name: "Protein Power Balls",
          description: "Packed with plant-based protein and naturally sweet dates, these satisfying bites are designed to fuel busy days, workouts, and afternoon cravings.",
          price: "",
          dietary: "Gluten-free; plant-based; egg-free; high protein",
          ingredients: [
            "vegan chickpea protein powder",
            "organic dates",
            "cardamom",
            "natural peanut butter",
            "desiccated coconut"
          ],
          recipeNote: "A protein-rich energy bite inspired by traditional flavors and crafted for lasting satisfaction."
        },
        {
          name: "Snike Balls",
          description: "Inspired by a classic chocolate-peanut combination, these rich bites combine dates, peanut butter, pistachios, and dark chocolate for an indulgent yet wholesome treat.",
          price: "",
          dietary: "Gluten-free; plant-based; egg-free",
          ingredients: [
            "organic dates",
            "organic gluten-free oats",
            "natural peanut butter",
            "salted pistachios",
            "pure vanilla extract",
            "dark chocolate"
          ],
          recipeNote: "Our wholesome take on a beloved chocolate-caramel flavor profile, made with real ingredients and naturally sweetened dates."
        }
      ]
    }
  ],
  cateringProducts: [
    "Authentic Masala Chai",
    "Chai Concentrate Bottles",
    "Breakfast and Dessert Pudding Cups",
    "Cookies",
    "Zucchini Brownies",
    "Cupcakes",
    "Dessert Trays",
    "Custom Orders"
  ],
  linksPage: [
    { label: "View Menu", url: "menu.html" },
    { label: "Catering & Custom Orders", url: "catering.html" },
    { label: "Farmers Market Schedule", url: "market.html" },
    { label: "Instagram", businessLink: "instagram", icon: "instagram" },
    { label: "Facebook", businessLink: "facebook", icon: "facebook" },
    { label: "Contact Us", url: "contact.html" }
  ]
};
