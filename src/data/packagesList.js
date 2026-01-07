// data/packages.js
export const allPackages = [
  {
    id: 1,
    theme: "honeymoon",
    title: "Maldives Private Water Villa & Spa",
    price: "85,000",
    duration: "5D/4N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    location: "South Malé Atoll, Maldives",
    bestTime: "Nov to April",
    highlights: ["Private Infinity Pool", "Underwater Dining", "Couple Spa"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Speedboat Transfer",
        desc: "Arrive at Male and take a scenic 45-min speedboat ride to the resort.",
      },
      {
        day: 2,
        title: "Water Sports & Snorkeling",
        desc: "Explore the house reef and enjoy guided snorkeling.",
      },
      {
        day: 3,
        title: "Private Island Picnic",
        desc: "A boat takes you to a remote sandbank for a private lunch.",
      },
    ],
  },
  {
    id: 11,
    theme: "adventure",
    title: "Leh Ladakh Bike Expedition",
    price: "34,999",
    duration: "9D/8N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877",
    location: "Ladakh, India",
    bestTime: "June to Sept",
    highlights: [
      "Khardung La Pass",
      "Pangong Lake Camping",
      "Bullet Bike Hire",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        desc: "Acclimatize to the high altitude and explore local markets.",
      },
      {
        day: 2,
        title: "Leh to Nubra Valley",
        desc: "Ride through the highest motorable road in the world.",
      },
    ],
  },
  {
    id: 21,
    theme: "solo",
    title: "Backpacking Spiti Valley",
    price: "22,000",
    duration: "7D/6N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    location: "Himachal, India",
    bestTime: "May to Oct",
    highlights: ["Key Monastery", "Chandra Taal Lake", "Homestay Experience"],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla",
        desc: "Overnight journey to the gateway of Spiti.",
      },
      {
        day: 2,
        title: "Shimla to Kalpa",
        desc: "Witness the majestic Kinnaur Kailash peaks.",
      },
    ],
  },
  // You can keep adding more objects here (up to 40)
];
