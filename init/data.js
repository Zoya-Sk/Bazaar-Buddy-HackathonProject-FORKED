const sampleListings = [
  {
    title: 'Apple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Mango',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Banana',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Orange',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'pineapple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Apple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Mango',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Banana',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Orange',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'pineapple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Apple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Mango',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Banana',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Orange',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'pineapple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Apple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Mango',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Banana',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'Orange',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
  {
    title: 'pineapple',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    quantity: 15,
    location: 'Malibu',
    country: 'United States',
    unit: 'kg',
    category: 'Fruits',
  },
];

module.exports = { data: sampleListings };
