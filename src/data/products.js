import MGMaximus800W from "../asset/product/mixture grinder/MG- maximus 800w 4 jar.png";
import MGTurboX1200W from "../asset/product/mixture grinder/MG- turbo x 4 jar 1200w.png";
import MGGoldPrime from "../asset/product/mixture grinder/MG-cold prime.png";
import MGSmashDeluxe from "../asset/product/mixture grinder/MG-smash delax.png";
import MGSpeedMaster from "../asset/product/mixture grinder/MG-speed master .png";
import MGTrienjoya from "../asset/product/mixture grinder/MG- trienergiya.png";
import MG3750Jar from "../asset/product/mixture grinder/MG-3750 2jar or 3jar.png";
import JMG3345 from "../asset/product/mixture grinder/JMG-3345.png";
import JMGNutrimatic3Jar from "../asset/product/mixture grinder/JMG- nutrimatic 3jar.png";
import FreshProJuicer350W from "../asset/product/mixture grinder/juicer fresh pro  juicer 350w.png";

import Induction1360 from "../asset/product/induction cooker/1360.png";
import Induction3616D from "../asset/product/induction cooker/3616D.png";
import Induction2000NonTouch from "../asset/product/induction cooker/2000 non touch.png";
import Induction2000Touch from "../asset/product/induction cooker/2000 touch.png";
import InfraredBlack from "../asset/product/induction cooker/infrared balck.png";
import InfraredWhite from "../asset/product/induction cooker/infrared white.png";

import PopUpToaster from "../asset/product/otg airfryer/pop up toester.png";
import SandwichToaster from "../asset/product/otg airfryer/sandwitch toester.png";
import OTG16L from "../asset/product/otg airfryer/otg 16L.png";
import OTG20L from "../asset/product/otg airfryer/otg 20L.png";
import AirFryerAutomatic from "../asset/product/otg airfryer/Airfryer oto- matic.png";
import AirFryerManual from "../asset/product/otg airfryer/airfryer manual.png";
import HandBlender125 from "../asset/product/otg airfryer/hand blander 125.png";
import IChef from "../asset/product/otg airfryer/i chef.png";

import Iron4175M from "../asset/product/iron/4175m.png";
import Iron4175P from "../asset/product/iron/4175p.png";
import IronAurora from "../asset/product/iron/Aurora.png";
import IronArmour from "../asset/product/iron/Armor.png";
import Iron1602 from "../asset/product/iron/1602.png";
import Iron3710White from "../asset/product/iron/3710 white .png";
import Iron3710Primora from "../asset/product/iron/3710 primora.png";
import IronAverage from "../asset/product/iron/average.png";
import Iron3813C from "../asset/product/iron/3813 c.png";
import Iron2102 from "../asset/product/iron/2102.png";

// Product catalog for UMA Enterprises
// Images are curated Unsplash photos of actual kitchen appliances.

const IMG = {
  mixer: "https://images.unsplash.com/photo-1723738533602-29830f1fb198?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  juicer: "https://images.unsplash.com/photo-1610847499832-918a1c3c6811?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  induction: "https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  infrared: "https://images.unsplash.com/photo-1631467387522-1c08eba9c123?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  airfryer: "https://images.unsplash.com/photo-1695089028114-ce28248f0ab9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  otg: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  toaster: "https://images.unsplash.com/photo-1583729250536-d5fb10401671?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  sandwich: "https://images.unsplash.com/photo-1528736235302-52922df5c122?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  handBlender: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  iron: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  ironPremium: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
};

export const categories = [
  {
    slug: "mixer-grinders",
    name: "Mixer Grinders",
    tagline: "Powerful motors for everyday grinding",
    image: IMG.mixer,
  },
  {
    slug: "induction-cookers",
    name: "Induction Cookers",
    tagline: "Smart, fast & energy efficient cooking",
    image: IMG.induction,
  },
  {
    slug: "otg-air-fryers",
    name: "OTG & Air Fryers",
    tagline: "Bake, roast & fry with less oil",
    image: IMG.airfryer,
  },
  {
    slug: "toasters",
    name: "Toasters",
    tagline: "Crisp, golden mornings every day",
    image: IMG.toaster,
  },
  {
    slug: "irons",
    name: "Irons",
    tagline: "Crease-free clothes, ready to wear",
    image: IMG.iron,
  },
];

export const products = [
  // ---------- Mixer Grinders ----------
  { id: "mg-maximus-800w", category: "mixer-grinders", name: "MG Maximus 800W 4 Jar", price: 5300, image: MGMaximus800W,
    description: "Heavy-duty 800W copper-winding motor with 4 stainless steel jars for chutney, wet grinding, dry grinding and juicing. Built tough for daily Indian kitchens." },
  { id: "mg-turbox-1200w", category: "mixer-grinders", name: "MG Turbox 4 Jar 1200W", price: 6600, image: MGTurboX1200W,
    description: "Flagship 1200W high-torque mixer grinder with overload protection, anti-skid feet and four jars. Built for tough ingredients and large family use." },
  { id: "mg-gold-prime", category: "mixer-grinders", name: "MG Gold Prime", price: 2900, image: MGGoldPrime,
    description: "Classic 3-jar mixer grinder with reliable 550W motor and ergonomic design. Perfect everyday choice for Indian homes." },
  { id: "mg-smash-deluxe", category: "mixer-grinders", name: "MG Smash Deluxe", price: 4850, image: MGSmashDeluxe,
    description: "Premium deluxe mixer with 750W motor, 3-speed control and sharp stainless blades. Crafted for serious home chefs." },
  { id: "mg-speed-master", category: "mixer-grinders", name: "MG Speed Master", price: 2750, image: MGSpeedMaster,
    description: "Compact, value-for-money mixer grinder with 500W power and durable jars. Smooth grinding without the heavy price tag." },
  { id: "mg-trienjoya", category: "mixer-grinders", name: "MG Trienjoya", price: 4900, image: MGTrienjoya,
    description: "Designer 3-jar mixer with whisper-quiet motor, hard-wearing jars and elegant body. Joy in every spin." },
  { id: "mg-3750-2jar", category: "mixer-grinders", name: "MG 3750 (2 Jar)", price: 2400, image: MG3750Jar,
    description: "Lightweight 2-jar workhorse for small kitchens. Reliable performance, easy storage." },
  { id: "mg-3750-3jar", category: "mixer-grinders", name: "MG 3750 (3 Jar)", price: 2600, image: MG3750Jar,
    description: "Three-jar variant of the popular 3750 series with extra capacity for chutney, wet & dry grinding." },
  { id: "jmg-3345", category: "mixer-grinders", name: "JMG 3345", price: 3200, image: JMG3345,
    description: "Smart mid-range mixer with shock-proof body and dual-locking lids. Balanced power and price." },
  { id: "jmg-nutrimatic-3jar", category: "mixer-grinders", name: "JMG Nutrimatic 3 Jar", price: 3900, image: JMGNutrimatic3Jar,
    description: "Nutrient-locking blades preserve flavour and freshness. Three jars for every kitchen task." },
  { id: "fresh-pro-juicer-350w", category: "mixer-grinders", name: "Fresh Pro Juicer 350W", price: 3850, image: FreshProJuicer350W,
    description: "Dedicated centrifugal juicer with 350W motor. Extract pure, pulp-free juice from fruits and vegetables in seconds." },

  // ---------- Induction Cookers ----------
  { id: "induction-1360", category: "induction-cookers", name: "Induction 1360", price: 2300, image: Induction1360,
    description: "Energy-efficient 1300W induction cooker with auto shut-off and child-lock. Cook faster with less power." },
  { id: "induction-3616d", category: "induction-cookers", name: "Induction 3616D", price: 2900, image: Induction3616D,
    description: "Digital induction cooker with 7 preset menus, timer and crystal glass top. Modern cooking, simplified." },
  { id: "induction-2000-non-touch", category: "induction-cookers", name: "Induction 2000 Non-Touch", price: 3200, image: Induction2000NonTouch,
    description: "Robust 2000W induction cooker with push-button controls. Built for daily heavy use." },
  { id: "induction-2000-touch", category: "induction-cookers", name: "Induction 2000 Touch", price: 3400, image: Induction2000Touch,
    description: "Sleek 2000W induction cooker with sensitive touch controls, LED display and auto modes." },
  { id: "infrared-black", category: "induction-cookers", name: "Infrared Cooker Black", price: 3550, image: InfraredBlack,
    description: "Versatile infrared cooktop that works with any cookware – steel, aluminium, glass or earthen. Premium black finish." },
  { id: "infrared-white", category: "induction-cookers", name: "Infrared Cooker White", price: 3500, image: InfraredWhite,
    description: "Universal infrared cooktop in elegant white. Cook with any vessel, no induction-only pans required." },

  // ---------- OTG & Air Fryers ----------
  { id: "pop-up-toaster", category: "otg-air-fryers", name: "Pop Up Toaster", price: 2800, image: PopUpToaster,
    description: "2-slice pop-up toaster with adjustable browning, defrost and reheat functions. Crisp toast every morning." },
  { id: "sandwich-toaster", category: "otg-air-fryers", name: "Sandwich Toaster", price: 1600, image: SandwichToaster,
    description: "Non-stick sandwich maker with deep-fill plates. Hot, golden grilled sandwiches in minutes." },
  { id: "otg-16l", category: "otg-air-fryers", name: "OTG 16L", price: 4000, image: OTG16L,
    description: "Compact 16-litre Oven-Toaster-Grill ideal for small families. Bake, toast and grill with ease." },
  { id: "otg-20l", category: "otg-air-fryers", name: "OTG 20L", price: 5400, image: OTG20L,
    description: "Family-size 20L OTG with rotisserie, convection and adjustable thermostat. Bake cakes, roast chicken, toast bread." },
  { id: "air-fryer-automatic", category: "otg-air-fryers", name: "Air Fryer Automatic", price: 4800, image: AirFryerAutomatic,
    description: "Automatic digital air fryer with 8 preset modes. 90% less oil, all the crunch you love." },
  { id: "air-fryer-manual", category: "otg-air-fryers", name: "Air Fryer Manual", price: 4600, image: AirFryerManual,
    description: "Manual-knob air fryer with adjustable temperature and timer. Healthy frying made simple and affordable." },
  { id: "hand-blender-125", category: "otg-air-fryers", name: "Hand Blender 125", price: 2000, image: HandBlender125,
    description: "125W hand blender with detachable stainless-steel shaft. Purees, smoothies and soups in seconds." },
  { id: "ichef", category: "otg-air-fryers", name: "iChef", price: 2900, image: IChef,
    description: "All-in-one iChef food processor with chopper, whisker and blender attachments. Your smart kitchen helper." },

  // ---------- Toasters (Pop-Up & Sandwich variants for category page) ----------
  // (Reuse already-listed toasters under their own category for browsing)

  // ---------- Irons ----------
  { id: "iron-4175m", category: "irons", name: "Iron 4175M", price: 500, image: Iron4175M,
    description: "Lightweight dry iron with non-stick soleplate and adjustable thermostat. Reliable everyday ironing." },
  { id: "iron-4175p", category: "irons", name: "Iron 4175P", price: 600, image: Iron4175P,
    description: "Upgraded 4175P dry iron with premium soleplate, fast heat-up and durable cord protection." },
  { id: "iron-aurora", category: "irons", name: "Iron Aurora", price: 750, image: IronAurora,
    description: "Aurora dry iron with smooth-glide non-stick soleplate. Stylish, sturdy and built to last." },
  { id: "iron-armour", category: "irons", name: "Iron Armour", price: 600, image: IronArmour,
    description: "Armour dry iron with shock-proof body and adjustable temperature. Built tough for daily use." },
  { id: "iron-1602", category: "irons", name: "Iron 1602", price: 700, image: Iron1602,
    description: "Classic 1602 dry iron with weighted base for crisp creases. Time-tested, trusted design." },
  { id: "iron-3710-white", category: "irons", name: "Iron 3710 White", price: 1300, image: Iron3710White,
    description: "Premium 3710 white dry iron with high-grade ceramic soleplate. Glides effortlessly on every fabric." },
  { id: "iron-3710-primora", category: "irons", name: "Iron 3710 Primora", price: 1300, image: Iron3710Primora,
    description: "Primora edition of the 3710 series with luxe finish and superior heat distribution." },
  { id: "iron-average", category: "irons", name: "Iron Average", price: 1400, image: IronAverage,
    description: "Heavy-duty iron with extra-wide soleplate. Ideal for large garments and bedsheets." },
  { id: "iron-3813c", category: "irons", name: "Iron 3813C", price: 1200, image: Iron3813C,
    description: "3813C premium dry iron with ergonomic handle, swivel cord and rapid heat-up." },
  { id: "iron-2102", category: "irons", name: "Iron 2102", price: 600, image: Iron2102,
    description: "Compact 2102 dry iron, perfect for hostels, travel and quick touch-ups." },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getProduct = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (slug) => products.filter((p) => p.category === slug);
