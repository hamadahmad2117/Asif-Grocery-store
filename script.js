// Sample product data
const products = [
    {
        id: 1,
        name: "Premium Basmati Rice (5kg)",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        category: "Grains"
    },
    {
        id: 2,
        name: "Organic Quinoa (1kg)",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        category: "Grains"
    },
    {
        id: 3,
        name: "Fresh Vegetables Pack",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
        category: "Vegetables"
    },
    {
        id: 4,
        name: "Premium Chocolate Box",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b",
        category: "Sweets"
    },
    {
        id: 5,
        name: "Organic Honey (500g)",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
        category: "Condiments"
    },
    {
        id: 6,
        name: "Fresh Milk (1L)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
        category: "Dairy"
    },
    {
        id: 7,
        name: "Artisan Bread Loaf",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        category: "Bakery"
    },
    {
        id: 8,
        name: "Free Range Eggs (12)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7",
        category: "Dairy"
    },
    {
        id: 9,
        name: "Organic Apples (1kg)",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
        category: "Fruits"
    },
    {
        id: 10,
        name: "Premium Coffee Beans (500g)",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
        category: "Beverages"
    },
    {
        id: 11,
        name: "Greek Yogurt (500g)",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        category: "Dairy"
    },
    {
        id: 12,
        name: "Organic Pasta (500g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1551462147-37885acc36f1",
        category: "Grains"
    },
    {
        id: 13,
        name: "Extra Virgin Olive Oil (750ml)",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        category: "Condiments"
    },
    {
        id: 14,
        name: "Mixed Nuts Pack (500g)",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32",
        category: "Snacks"
    },
    {
        id: 15,
        name: "Fresh Orange Juice (1L)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b",
        category: "Beverages"
    },
    {
        id: 16,
        name: "Organic Chicken Breast (1kg)",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
        category: "Meat"
    },
    {
        id: 17,
        name: "Premium Tea Selection Box",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
        category: "Beverages"
    },
    {
        id: 18,
        name: "Fresh Atlantic Salmon (500g)",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c",
        category: "Seafood"
    },
    {
        id: 19,
        name: "Organic Avocados (3pcs)",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
        category: "Fruits"
    },
    {
        id: 20,
        name: "Artisan Cheese Selection",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862",
        category: "Dairy"
    },
    {
        id: 21,
        name: "Organic Granola (750g)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1",
        category: "Breakfast"
    },
    {
        id: 22,
        name: "Fresh Berries Mix (400g)",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1563583991355-9d649c5b3f52",
        category: "Fruits"
    },
    {
        id: 23,
        name: "Premium Dark Chocolate (200g)",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919",
        category: "Sweets"
    },
    {
        id: 24,
        name: "Organic Almond Milk (1L)",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757",
        category: "Dairy"
    },
    {
        id: 25,
        name: "Fresh Sourdough Bread",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb",
        category: "Bakery"
    },
    {
        id: 26,
        name: "Fresh Bananas (1kg)",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
        category: "Fruits"
    },
    {
        id: 27,
        name: "Organic Tomatoes (500g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2",
        category: "Vegetables"
    },
    {
        id: 28,
        name: "Whole Wheat Bread",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
        category: "Bakery"
    },
    {
        id: 29,
        name: "Premium Tea Bags (100)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
        category: "Beverages"
    },
    {
        id: 30,
        name: "Natural Yogurt (1kg)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        category: "Dairy"
    },
    {
        id: 31,
        name: "Organic Carrots (1kg)",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37",
        category: "Vegetables"
    },
    {
        id: 32,
        name: "Cleaning Supplies Set",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1585636310595-ab9347e0c5e7",
        category: "Household"
    },
    {
        id: 33,
        name: "Paper Towels (6 Rolls)",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1583251633146-d0c6c036187d",
        category: "Household"
    },
    {
        id: 34,
        name: "Hand Sanitizer (250ml)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8",
        category: "Personal Care"
    },
    {
        id: 35,
        name: "Toothpaste Pack",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1587642313724-9722268418ef",
        category: "Personal Care"
    },
    {
        id: 36,
        name: "Dish Soap (750ml)",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1585999601878-fcc7a0a10c0c",
        category: "Household"
    },
    {
        id: 37,
        name: "Premium Cookies Assortment",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
        category: "Snacks"
    },
    {
        id: 38,
        name: "Spicy Nimko Mix (400g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087",
        category: "Snacks"
    },
    {
        id: 39,
        name: "Masala Papad Pack",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
        category: "Snacks"
    },
    {
        id: 40,
        name: "Cream Biscuits (Family Pack)",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1531685250784-7569952593d2",
        category: "Snacks"
    },
    {
        id: 41,
        name: "Salted Mathri (250g)",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f",
        category: "Snacks"
    },
    {
        id: 42,
        name: "Premium Notebook Set",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
        category: "Stationery"
    },
    {
        id: 43,
        name: "Gel Pen Pack (12 Colors)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1581077968936-643e2b77945b",
        category: "Stationery"
    },
    {
        id: 44,
        name: "Mechanical Pencil Set",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1568205612837-017257d2310a",
        category: "Stationery"
    },
    {
        id: 45,
        name: "Highlighter Pack (6 Colors)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1568205612837-017257d2310a",
        category: "Stationery"
    },
    {
        id: 46,
        name: "Sticky Notes Assortment",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
        category: "Stationery"
    },
    {
        id: 47,
        name: "Art Sketch Book",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
        category: "Stationery"
    },
    {
        id: 48,
        name: "Geometry Set",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1598619469929-c9a2a3f78585",
        category: "Stationery"
    },
    {
        id: 49,
        name: "Erasers & Sharpeners Set",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1595231712607-a5f68c461cfa",
        category: "Stationery"
    },
    {
        id: 50,
        name: "Colored Paper Pack",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
        category: "Stationery"
    },
    {
        id: 51,
        name: "School Backpack",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc",
        category: "Stationery"
    },
    {
        id: 67,
        name: "Premium Organic Avocados (4pcs)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
        category: "Premium",
        tags: ["Fresh", "Organic", "Premium"]
    },
    {
        id: 68,
        name: "Premium Japanese Green Tea",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97",
        category: "Premium",
        tags: ["Premium", "Beverages"]
    },
    {
        id: 69,
        name: "Premium Dark Chocolate (70%)",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919",
        category: "Premium",
        tags: ["Premium", "Sweets"]
    },
    {
        id: 70,
        name: "Fresh Strawberries (500g)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1518635017480-d9a4666cdc24",
        category: "Fresh",
        tags: ["Fresh", "Fruits"],
        deal: "Buy 1 Get 1 Free"
    },
    {
        id: 71,
        name: "Fresh Bell Peppers Mix",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
        category: "Fresh",
        tags: ["Fresh", "Vegetables"],
        deal: "20% Off"
    },
    {
        id: 72,
        name: "Fresh Mushrooms (250g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        category: "Fresh",
        tags: ["Fresh", "Vegetables"]
    },
    {
        id: 73,
        name: "Premium Saffron (2g)",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1584704135557-d8bf7ca50eae",
        category: "Premium",
        tags: ["Premium", "Spices"]
    },
    {
        id: 74,
        name: "Fresh Organic Spinach",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
        category: "Fresh",
        tags: ["Fresh", "Organic", "Vegetables"],
        deal: "Buy 2 Get 1 Free"
    },
    {
        id: 75,
        name: "Premium Almonds (500g)",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46",
        category: "Premium",
        tags: ["Premium", "Nuts"]
    },
    {
        id: 76,
        name: "Fresh Cherry Tomatoes",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
        category: "Fresh",
        tags: ["Fresh", "Vegetables"],
        deal: "15% Off"
    },
    {
        id: 77,
        name: "Premium Cashews (400g)",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1543208541-0961a29a8c4d",
        category: "Premium",
        tags: ["Premium", "Nuts"]
    },
    {
        id: 78,
        name: "Fresh Mixed Berries Pack",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1563746098251-d35aef196e83",
        category: "Fresh",
        tags: ["Fresh", "Fruits"],
        deal: "Save $2"
    },
    {
        id: 79,
        name: "Premium Wagyu Beef (500g)",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976",
        category: "Premium",
        tags: ["Premium", "Meat"]
    },
    {
        id: 80,
        name: "Premium Truffle Oil (100ml)",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc",
        category: "Premium",
        tags: ["Premium", "Condiments"]
    },
    {
        id: 81,
        name: "Premium Caviar (30g)",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e",
        category: "Premium",
        tags: ["Premium", "Delicacies"]
    },
    {
        id: 82,
        name: "Fresh Organic Kale Bundle",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57",
        category: "Fresh",
        tags: ["Fresh", "Organic", "Vegetables"]
    },
    {
        id: 83,
        name: "Fresh Mango (4pcs)",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
        category: "Fresh",
        tags: ["Fresh", "Fruits"]
    },
    {
        id: 84,
        name: "Fresh Asparagus Bundle",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1515471216966-c8521f85c2f7",
        category: "Fresh",
        tags: ["Fresh", "Vegetables"]
    },
    {
        id: 85,
        name: "Premium Wine Collection",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
        category: "Premium",
        tags: ["Premium", "Beverages"],
        featured: true
    },
    {
        id: 86,
        name: "Premium Cheese Board Set",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1543821711-42ed69f6c9af",
        category: "Premium",
        tags: ["Premium", "Dairy"],
        featured: true
    },
    {
        id: 87,
        name: "Fresh Dragon Fruit (2pcs)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1527325678964-54921661f888",
        category: "Fresh",
        featured: true
    },
    {
        id: 88,
        name: "Artisanal Potato Chips",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        category: "Snacks",
        tags: ["Snacks", "Featured"]
    },
    {
        id: 89,
        name: "Premium Craft Beer 6-Pack",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13",
        category: "Beverages",
        tags: ["Refreshments", "Featured"]
    },
    {
        id: 90,
        name: "Gourmet Popcorn Mix",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f",
        category: "Snacks",
        tags: ["Snacks", "Featured"]
    },
    {
        id: 91,
        name: "Sparkling Water Variety Pack",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1560508180-03f285f67ded",
        category: "Beverages",
        tags: ["Refreshments"]
    },
    {
        id: 92,
        name: "Premium Leather Journal",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
        category: "Stationery",
        tags: ["Premium", "Stationery"]
    },
    {
        id: 93,
        name: "Luxury Fountain Pen Set",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1563089145-599997674d42",
        category: "Stationery",
        tags: ["Premium", "Stationery"]
    },
    {
        id: 94,
        name: "Designer Desk Organizer",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
        category: "Stationery",
        tags: ["Premium", "Stationery"]
    },
    {
        id: 95,
        name: "Fresh Sushi Grade Salmon",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        category: "Fresh",
        tags: ["Fresh", "Seafood"],
        featured: true
    },
    {
        id: 96,
        name: "Premium Coffee Gift Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        category: "Premium",
        tags: ["Premium", "Beverages"],
        featured: true
    },
    {
        id: 97,
        name: "Fresh Herb Garden Kit",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        category: "Fresh",
        tags: ["Fresh", "Herbs"],
        featured: true
    },
    {
        id: 98,
        name: "Artisanal Trail Mix",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd",
        category: "Snacks",
        tags: ["Snacks", "Healthy"]
    },
    {
        id: 99,
        name: "Premium Art Supply Set",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
        category: "Stationery",
        tags: ["Premium", "Stationery"],
        featured: true
    },
    {
        id: 100,
        name: "Kombucha Variety Pack",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8",
        category: "Beverages",
        tags: ["Refreshments", "Healthy"],
        featured: true
    }
];

// Merge additional products into main products array
const moreProducts = [
    // Beverages
    {
        id: 101,
        name: "Green Tea Pack (100 bags)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
        category: "Beverages"
    },
    {
        id: 102,
        name: "Fresh Orange Juice (1L)",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        category: "Beverages"
    },
    // Fruits
    {
        id: 103,
        name: "Fresh Strawberries (500g)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
        category: "Fruits"
    },
    {
        id: 104,
        name: "Ripe Mangoes (4 pcs)",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
        category: "Fruits"
    },
    // Vegetables
    {
        id: 105,
        name: "Fresh Spinach Bundle",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
        category: "Vegetables"
    },
    {
        id: 106,
        name: "Organic Tomatoes (1kg)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2",
        category: "Vegetables"
    },
    // Snacks
    {
        id: 107,
        name: "Potato Chips Family Pack",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        category: "Snacks"
    },
    {
        id: 108,
        name: "Trail Mix (400g)",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256",
        category: "Snacks"
    },
    // Bakery
    {
        id: 109,
        name: "Chocolate Croissants (4 pcs)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
        category: "Bakery"
    },
    {
        id: 110,
        name: "Whole Grain Bread",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1598373182133-52452b7a0c56",
        category: "Bakery"
    },
    // Dairy
    {
        id: 111,
        name: "Cheddar Cheese Block (500g)",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b",
        category: "Dairy"
    },
    {
        id: 112,
        name: "Butter (250g)",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
        category: "Dairy"
    },
    // Sweets
    {
        id: 113,
        name: "Assorted Cookies Tin",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
        category: "Sweets"
    },
    {
        id: 114,
        name: "Dark Chocolate Bar (100g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1548907040-4d2be3f515b2",
        category: "Sweets"
    },
    // Condiments
    {
        id: 115,
        name: "Hot Sauce Collection",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1589308454676-22c4bf30a63b",
        category: "Condiments"
    },
    {
        id: 116,
        name: "Mustard Sauce (250ml)",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9",
        category: "Condiments"
    }
];

// Merge the additional products into the main products array
products.push(...moreProducts);

// Additional Products - Snacks and Stationery
const additionalProducts = [
    // Snacks Section
    {
        id: 52,
        name: "Premium Cookies Assortment",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
        category: "Snacks"
    },
    {
        id: 53,
        name: "Spicy Nimko Mix (400g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087",
        category: "Snacks"
    },
    {
        id: 54,
        name: "Masala Papad Pack",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
        category: "Snacks"
    },
    {
        id: 55,
        name: "Cream Biscuits (Family Pack)",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1531685250784-7569952593d2",
        category: "Snacks"
    },
    {
        id: 56,
        name: "Salted Mathri (250g)",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f",
        category: "Snacks"
    },
    // Stationery Section
    {
        id: 57,
        name: "Premium Notebook Set",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
        category: "Stationery"
    },
    {
        id: 58,
        name: "Gel Pen Pack (12 Colors)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1581077968936-643e2b77945b",
        category: "Stationery"
    },
    {
        id: 59,
        name: "Mechanical Pencil Set",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1568205612837-017257d2310a",
        category: "Stationery"
    },
    {
        id: 60,
        name: "Highlighter Pack (6 Colors)",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1568205612837-017257d2310a",
        category: "Stationery"
    },
    {
        id: 61,
        name: "Sticky Notes Assortment",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
        category: "Stationery"
    },
    {
        id: 62,
        name: "Art Sketch Book",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
        category: "Stationery"
    },
    {
        id: 63,
        name: "Geometry Set",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1598619469929-c9a2a3f78585",
        category: "Stationery"
    },
    {
        id: 64,
        name: "Erasers & Sharpeners Set",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1595231712607-a5f68c461cfa",
        category: "Stationery"
    },
    {
        id: 65,
        name: "Colored Paper Pack",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
        category: "Stationery"
    },
    {
        id: 66,
        name: "School Backpack",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc",
        category: "Stationery"
    }
];

// Combine all products
const allProducts = [...products, ...additionalProducts];

// Featured Products (Updated with new items)
const featuredProducts = [
    {
        id: 1,
        name: "Premium Basmati Rice (5kg)",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        category: "Grains"
    },
    {
        id: 27,
        name: "Spicy Nimko Mix (400g)",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087",
        category: "Snacks"
    },
    {
        id: 31,
        name: "Premium Notebook Set",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
        category: "Stationery"
    },
    {
        id: 29,
        name: "Cream Biscuits (Family Pack)",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1531685250784-7569952593d2",
        category: "Snacks"
    },
    {
        id: 32,
        name: "Gel Pen Pack (12 Colors)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1581077968936-643e2b77945b",
        category: "Stationery"
    },
    {
        id: 28,
        name: "Masala Papad Pack",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
        category: "Snacks"
    },
    {
        id: 85,
        name: "Premium Wine Collection",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
        category: "Premium",
        tags: ["Premium", "Beverages"],
        featured: true
    },
    {
        id: 86,
        name: "Premium Cheese Board Set",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1543821711-42ed69f6c9af",
        category: "Premium",
        tags: ["Premium", "Dairy"],
        featured: true
    },
    {
        id: 87,
        name: "Fresh Dragon Fruit (2pcs)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1527325678964-54921661f888",
        category: "Fresh",
        featured: true
    },
    {
        id: 95,
        name: "Fresh Sushi Grade Salmon",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        category: "Fresh",
        tags: ["Fresh", "Seafood"],
        featured: true
    },
    {
        id: 96,
        name: "Premium Coffee Gift Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        category: "Premium",
        tags: ["Premium", "Beverages"],
        featured: true
    },
    {
        id: 97,
        name: "Fresh Herb Garden Kit",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        category: "Fresh",
        tags: ["Fresh", "Herbs"],
        featured: true
    },
    {
        id: 99,
        name: "Premium Art Supply Set",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
        category: "Stationery",
        tags: ["Premium", "Stationery"],
        featured: true
    },
    {
        id: 100,
        name: "Kombucha Variety Pack",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8",
        category: "Beverages",
        tags: ["Refreshments", "Healthy"],
        featured: true
    }
];

// Create arrays for special sections
const premiumProducts = allProducts.filter(product => product.category === "Premium");
const freshProducts = allProducts.filter(product => product.category === "Fresh");
const dealProducts = allProducts.filter(product => product.deal);

// Function to render premium products
function renderPremiumProducts() {
    const container = document.getElementById('premium-products');
    if (container) {
        container.innerHTML = '';
        premiumProducts.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    }
}

// Function to render fresh products
function renderFreshProducts() {
    const container = document.getElementById('fresh-products');
    if (container) {
        container.innerHTML = '';
        freshProducts.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    }
}

// Function to render deal products
function renderDealProducts() {
    const container = document.getElementById('deal-products');
    if (container) {
        container.innerHTML = '';
        dealProducts.forEach(product => {
            const productCard = createProductCard(product);
            if (product.deal) {
                const dealBadge = document.createElement('div');
                dealBadge.className = 'deal-badge';
                dealBadge.textContent = product.deal;
                productCard.appendChild(dealBadge);
            }
            container.appendChild(productCard);
        });
    }
}

// Shopping cart
let cart = [];
let cartCount = 0;

// DOM Elements
const productContainer = document.getElementById('product-container');
const cartCountElement = document.querySelector('.cart-count');
const contactForm = document.getElementById('contact-form');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Function to render featured products
function renderFeaturedProducts() {
    productContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-buttons">
                    <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to render all products (for full catalog page)
function renderAllProducts() {
    const container = document.getElementById('all-products');
    if (container) {
        renderProducts(allProducts,'all-products');
        container.innerHTML = allProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <div class="product-buttons">
                        <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Function to render category products
function renderCategoryProducts(categoryName, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const categoryProducts = allProducts.filter(product => product.category === categoryName);
        container.innerHTML = categoryProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <div class="product-buttons">
                        <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Add to cart functionality
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        cartCount++;
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    }
}

// Update cart count
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Here you would typically send the form data to a server
        showNotification('Message sent successfully!');
        contactForm.reset();
    });
}

// Event listeners
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.menu-toggle')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

// Function to calculate discount percentage
function calculateDiscount(originalPrice, currentPrice) {
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
}

// Function to format price
function formatPrice(price) {
    return price.toFixed(2);
}

// Function to render all products
function renderProducts(productsToRender, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    productsToRender.forEach(product => {
        const originalPrice = product.price * 1.2; // Simulating original price
        const discountPercentage = calculateDiscount(originalPrice, product.price);
        const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3 and 5
        const ratingCount = Math.floor(Math.random() * 1000) + 50; // Random number of ratings

        const productCard = `
            <div class="product-card">
                ${discountPercentage >= 10 ? `<div class="product-badge">-${discountPercentage}%</div>` : ''}
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-details">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <div class="rating-stars">
                            ${generateStarRating(parseFloat(rating))}
                        </div>
                        <span class="rating-count">(${ratingCount})</span>
                    </div>
                    <div class="product-price">
                        $${formatPrice(product.price)}
                        <span class="original-price">$${formatPrice(originalPrice)}</span>
                        <span class="discount-tag">${discountPercentage}% OFF</span>
                    </div>
                    <div class="product-features">
                        <div class="feature-item">
                            <i class="fas fa-check feature-icon"></i>
                            <span>Free Delivery</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-undo feature-icon"></i>
                            <span>7-Day Returns</span>
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Function to render all products in catalog
function renderAllProducts() {
    renderProducts(products, 'all-products');
}

// Function to render category products
function renderCategoryProducts(category, containerId) {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts, containerId);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts(); // Show featured products on main page
    renderAllProducts(); // Show all products on catalog page if it exists
    renderCategoryProducts('Snacks', 'snacks-container');
    renderCategoryProducts('Stationery', 'stationery-container');
    renderPremiumProducts();
    renderFreshProducts();
    renderDealProducts();
    
    // Category navigation
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
        });
    });

    // Smooth scroll for category links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize cart icon and modal
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', openCartModal);
    }

    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCartModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('cartModal');
        if (e.target === modal) {
            closeCartModal();
        }
    });
});
