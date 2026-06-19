/* ============================================================
   Paratha House — Menu Data
   Dishes & prices sourced from the restaurant's live Google
   listing. Prices marked "est." below are sensible estimates —
   confirm and tweak with the restaurant.
   Images use Unsplash (royalty-free); swap with your own
   photos any time by replacing the `img` URL.
   ============================================================ */

const MENU = [
  {
    category: "Signature Parathas",
    note: "Hand-rolled, slow-cooked on the tawa with pure ghee",
    items: [
      {
        name: "Aloo Onion Paratha",
        price: 100,
        veg: true,
        spicy: 1,
        tags: ["Bestseller"],
        desc: "The house favourite — whole-wheat flatbread stuffed with spiced potato and onion, griddled golden. Served with white butter, dahi and pickle.",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Paneer Paratha",
        price: 130,
        veg: true,
        spicy: 1,
        tags: ["Bestseller"],
        desc: "Generously filled with hand-grated cottage cheese, green chilli and garam masala. Rich, melt-in-the-mouth and deeply satisfying.",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Onion Paratha",
        price: 90,
        veg: true,
        spicy: 1,
        tags: [],
        desc: "Crisp layers packed with finely chopped onions, coriander and a whisper of chaat masala. A crunchy, savoury classic.",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Gobi Paratha",
        price: 100,
        veg: true,
        spicy: 1,
        tags: [],
        desc: "Grated cauliflower spiced with ginger and green chilli, folded into flaky whole-wheat dough and griddled golden.",
        img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Mix Veg Paratha",
        price: 120,
        veg: true,
        spicy: 2,
        tags: [],
        desc: "A wholesome medley of seasonal vegetables and paneer, seasoned with house masala. Comfort food at its finest.",
        img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Cheese Corn Paratha",
        price: 140,
        veg: true,
        spicy: 0,
        tags: ["New"],
        desc: "Sweet corn and molten cheese stuffed inside a buttery paratha — a modern favourite the kids can't get enough of.",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Breads & Tandoor",
    note: "Charred in our clay oven, brushed with ghee",
    items: [
      {
        name: "Garlic Naan with Butter",
        price: 70,
        veg: true,
        spicy: 0,
        tags: ["Bestseller"],
        desc: "Fresh naan studded with roasted garlic and coriander, finished with a glossy brush of white butter. Fragrant and fluffy.",
        img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Butter Naan",
        price: 60,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Pillowy leavened bread baked in the tandoor and finished with a glossy brush of butter.",
        img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Tandoori Roti",
        price: 35,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Rustic whole-wheat roti baked against the walls of the tandoor for that signature smoky char.",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Veg Mains & Rice",
    note: "Slow-simmered gravies and comforting rice",
    items: [
      {
        name: "Paneer Lababdar",
        price: 150,
        veg: true,
        spicy: 2,
        tags: ["Chef's Pick"],
        desc: "Cottage cheese in a luscious, mildly sweet tomato-onion gravy enriched with cream and crushed kasuri methi.",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Bhindi Fry",
        price: 100,
        veg: true,
        spicy: 2,
        tags: [],
        desc: "Crisp okra tossed with onions and dry spices — light, tangy and addictive alongside any paratha.",
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Veg Biryani",
        price: 180,
        veg: true,
        spicy: 2,
        tags: ["Bestseller"],
        desc: "Fragrant basmati layered with vegetables and whole spices, dum-cooked and served with raita.",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Dal Makhani",
        price: 220,
        veg: true,
        spicy: 1,
        tags: [],
        desc: "Black urad dal simmered overnight with tomato, butter and cream until velvety and rich.",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Curd Rice",
        price: 125,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Soft rice folded into cool, creamy curd with a tempering of mustard, curry leaves and ginger. The perfect cooling finish.",
        img: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Non-Veg Specials",
    note: "From the tandoor and the kadhai",
    items: [
      {
        name: "Chicken Tikka Kebab",
        price: 240,
        veg: false,
        spicy: 2,
        tags: ["Chef's Pick"],
        desc: "Boneless chicken marinated in spiced yoghurt and ginger-garlic, skewered and flame-grilled until smoky and tender.",
        img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Seekh Kabab",
        price: 240,
        veg: false,
        spicy: 2,
        tags: [],
        desc: "Minced meat kneaded with herbs and spices, hand-pressed onto skewers and char-grilled. Juicy and full of flavour.",
        img: "https://images.unsplash.com/photo-1602273660127-a0000560a4c1?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Drums of Heaven",
        price: 220,
        veg: false,
        spicy: 3,
        tags: [],
        desc: "Chicken lollipops tossed in a fiery, glossy Indo-Chinese sauce. A crowd-pleasing starter with a kick.",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Bathinda Chicken",
        price: 260,
        veg: false,
        spicy: 3,
        tags: ["House Special"],
        desc: "A robust Punjabi-style chicken curry simmered with onions, tomatoes and freshly ground spices. Bold and hearty.",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Starters & Salads",
    note: "Crunchy, fresh and light to begin",
    items: [
      {
        name: "Masala Papad",
        price: 50,
        veg: true,
        spicy: 1,
        tags: [],
        desc: "Crisp roasted papad topped with chopped onion, tomato, coriander and a sprinkle of chaat masala.",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Pani Puri",
        price: 70,
        veg: true,
        spicy: 2,
        tags: [],
        desc: "Crisp hollow puris filled with spiced potato and tangy, minty pani. A burst of flavour in every bite.",
        img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Cobb Salad",
        price: 180,
        veg: false,
        spicy: 0,
        tags: [],
        desc: "A hearty bowl of greens, grilled chicken, egg and crisp veg — a wholesome, protein-packed option.",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Vital Green Salad",
        price: 160,
        veg: true,
        spicy: 0,
        tags: ["Healthy"],
        desc: "A crisp, refreshing mix of seasonal greens and vegetables with a light citrus dressing.",
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Lassi & Desserts",
    note: "A sweet, cooling finish",
    items: [
      {
        name: "Sweet Lassi (220 ml)",
        price: 60,
        veg: true,
        spicy: 0,
        tags: ["Bestseller"],
        desc: "Thick, hand-churned yoghurt blended with sugar and topped with malai. Served chilled in a tall glass.",
        img: "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Mint Lassi",
        price: 119,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "A refreshing twist on the classic — creamy lassi whirled with fresh mint for a cool, herby lift.",
        img: "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Pista Ice Cream",
        price: 90,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Creamy pistachio ice cream — a nutty, fragrant way to end the meal.",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Gulab Jamun",
        price: 90,
        veg: true,
        spicy: 0,
        tags: ["Chef's Pick"],
        desc: "Two warm, golden dumplings soaked in rose-scented sugar syrup. Soft, fragrant and indulgent.",
        img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
];
