// Database for Trina's Food Truck

// Menu items will be loaded from menu.json
let menuItems = [];

const specialItem = {
    id: 101,
    name: "Lobster Roll Fish Sandwich",
    price: 14.99,
    description: "Limited time offering! Crispy fried fish topped with lobster salad, lettuce, and our special sauce on a toasted roll.",
    image: "img/fish-sandwich.jpg"
};

const weeklySchedule = [
    {
        day: "Monday",
        location: "Downtown Food Park",
        hours: "11:00 AM - 3:00 PM",
        address: "123 Main Street"
    },
    {
        day: "Tuesday",
        location: "Tech District",
        hours: "11:00 AM - 3:00 PM",
        address: "456 Innovation Ave"
    },
    {
        day: "Wednesday",
        location: "Waterfront Park",
        hours: "11:00 AM - 3:00 PM",
        address: "789 Harbor Blvd"
    },
    {
        day: "Thursday",
        location: "University Campus",
        hours: "11:00 AM - 7:00 PM",
        address: "101 College Drive"
    },
    {
        day: "Friday",
        location: "Food Truck Friday Event",
        hours: "11:00 AM - 8:00 PM",
        address: "202 Festival Square"
    },
    {
        day: "Saturday",
        location: "Farmers Market",
        hours: "9:00 AM - 2:00 PM",
        address: "303 Market Street"
    },
    {
        day: "Sunday",
        location: "Beach Boardwalk",
        hours: "12:00 PM - 6:00 PM",
        address: "404 Shoreline Drive"
    }
];