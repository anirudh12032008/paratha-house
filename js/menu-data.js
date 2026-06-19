/* ============================================================
   Paratha House — Menu Data
   Edit prices, names, descriptions and images here.
   Images use Unsplash (royalty-free). Swap with your own
   restaurant photos any time by replacing the `img` URL.
   ============================================================ */

const MENU = [
  {
    category: "Signature Parathas",
    note: "Hand-rolled, slow-cooked on the tawa with pure ghee",
    items: [
      {
        name: "Aloo Paratha",
        price: 90,
        veg: true,
        spicy: 1,
        tags: ["Bestseller"],
        desc: "Soft whole-wheat flatbread stuffed with spiced mashed potatoes, fresh coriander and a hint of ajwain. Served with white butter, dahi and tangy pickle.",
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
        tags: ["Chef's Pick"],
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
    category: "From the Tandoor",
    note: "Charred in our clay oven, brushed with ghee",
    items: [
      {
        name: "Butter Naan",
        price: 60,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Pillowy leavened bread baked in the tandoor and finished with a glossy brush of white butter.",
        img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Garlic Naan",
        price: 80,
        veg: true,
        spicy: 0,
        tags: ["Bestseller"],
        desc: "Fresh naan studded with roasted garlic and coriander — fragrant, fluffy and impossible to resist.",
        img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Tandoori Roti",
        price: 35,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Rustic whole-wheat roti baked against the walls of the tandoor for that signature smoky char.",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Paneer Tikka",
        price: 240,
        veg: true,
        spicy: 2,
        tags: ["Chef's Pick"],
        desc: "Thick cubes of cottage cheese marinated in spiced yoghurt, skewered with peppers and onions, and flame-grilled.",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Curries & Sabzi",
    note: "Slow-simmered gravies to scoop up with every bite",
    items: [
      {
        name: "Dal Makhani",
        price: 220,
        veg: true,
        spicy: 1,
        tags: ["Bestseller"],
        desc: "Black urad dal simmered overnight with tomato, butter and cream until velvety and rich. The soul of any paratha meal.",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Paneer Butter Masala",
        price: 260,
        veg: true,
        spicy: 2,
        tags: ["Chef's Pick"],
        desc: "Cottage cheese in a luscious tomato-cashew gravy kissed with fenugreek and butter. Mildly sweet, gloriously creamy.",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Chana Masala",
        price: 180,
        veg: true,
        spicy: 2,
        tags: [],
        desc: "Chickpeas slow-cooked in a robust onion-tomato masala with whole spices. Hearty, tangy and full of punch.",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Mix Veg Curry",
        price: 200,
        veg: true,
        spicy: 1,
        tags: [],
        desc: "Garden vegetables in a lightly spiced, home-style gravy — the kind of sabzi you grew up on.",
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Sides & Accompaniments",
    note: "The little things that make the meal",
    items: [
      {
        name: "Dahi (Curd)",
        price: 50,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Thick, freshly set curd — cool, creamy and the perfect foil to a hot paratha.",
        img: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Boondi Raita",
        price: 80,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Whisked yoghurt with soft boondi, roasted cumin and a sprinkle of chaat masala.",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Green Salad",
        price: 70,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Crisp cucumber, onion, tomato and carrot with a squeeze of lemon and a dash of black salt.",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    category: "Sweets & Drinks",
    note: "A sweet finish, the Punjabi way",
    items: [
      {
        name: "Sweet Lassi",
        price: 90,
        veg: true,
        spicy: 0,
        tags: ["Bestseller"],
        desc: "Thick, hand-churned yoghurt blended with sugar and topped with a dollop of malai. Served chilled in a tall glass.",
        img: "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Masala Chai",
        price: 40,
        veg: true,
        spicy: 0,
        tags: [],
        desc: "Strong, milky tea brewed with cardamom, ginger and clove. The perfect end to your meal.",
        img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=900&q=80"
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
