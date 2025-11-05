import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          // NAVBAR
          home: "Accueil",
          flight: "Réservation de vol",
          accommodation: "Hébergement",
          car: "Location de voiture",
          tourism: "Tourisme",
          circuit: "Circuits touristiques",
          contactUs: "Contact",

          // HERO SECTION
          hero1: "Akwaba Africa, la première Plateforme Africaine tout-en-un de réservation en ligne, d’hébergements, de voyage de location de véhicules et de services touristiques",
          hero2: "Séjournez, savourez, profitez. Hôtels, appartements, villas, maisons et restaurants à portée de clic. Akwaba Africa, votre clé du confort et de l’élégance",
          hero3: "Prenez votre envol avec Akwaba Africa ! Trouvez le bon vol, au bon moment, au meilleur prix. Voyagez sereinement, l’Afrique vous attend",
          hero4: "Explorez l’Afrique en toute liberté ! De la citadine au 4x4, trouvez le véhicule idéal pour vos aventures. Akwaba Africa, votre partenaire de route",
          hero5: "Découvrez l’Afrique autrement ! Circuits, excursions et expériences uniques avec Akwaba Africa — votre passeport pour l’aventure. ",
          hero6: "Voyagez au cœur de l’Afrique authentique. Des destinations de rêve, des expériences inoubliables, une organisation sur mesure. Akwaba Africa, l’art de voyager autrement ",
          bookNow: "Réserver maintenant",

          // carroussel 
          "carouselText": [
  {
    "title": "Les plages paradisiaques",
    "desc": "Détendez-vous sur les plages de sable blanc de Zanzibar ou des Seychelles. Profitez du soleil, des eaux turquoise et des couchers de soleil inoubliables."
  },
  {
    "title": "Les montagnes majestueuses",
    "desc": "Découvrez les sommets de l’Atlas ou du Kilimandjaro, idéaux pour les amateurs de randonnées et d’expériences en pleine nature."
  },
  {
    "title": "Les villes culturelles",
    "desc": "Plongez dans l’ambiance vibrante de Marrakech, Dakar ou Accra. Des marchés colorés, une gastronomie raffinée et des traditions riches."
  },
  {
    "title": "Les déserts et savanes",
    "desc": "Partez en safari à la découverte des animaux emblématiques ou vivez la magie d’une nuit dans le désert sous un ciel étoilé."
  }
],
          // DISCOVER SECTION
          discover: "Découvrez",

          // SERVICES SECTION
          accommodationTitle: "Hébergements",
          accommodationTitleS: "AKWABA / HÉBERGEMENTS",
          accommodationText:
            "Séjournez dans les meilleurs hôtels, maisons, villas ou appartements. Confort et hospitalité garantis !",
          flightTitle: "Réservation de vol",
          flightText:
            "Réservez vos billets d’avion facilement et au meilleur prix avec Akwaba Africa.",
          carTitle: "Location de voiture",
          carText:
            "Voyagez librement à votre rythme avec nos véhicules fiables et abordables.",
          restaurantTitle: "Restaurants",
          restaurantText:
            "Savourez la gastronomie africaine : réservez dans les meilleurs restaurants.",
          circuitTitle: "Circuits touristiques",
          circuitText:
            "Découvrez des circuits uniques et authentiques à travers la beauté de l’Afrique.",
          tourismTitle: "Tourisme & Découverte",
          tourismText:
            "Vivez des expériences inoubliables à travers les paysages et cultures africaines.",

          //SECTION DESTINATION 

          destinationTitle: "Nos Destinations Incontournables",
          destinationText:
            "Découvrez nos plus belles destinations à travers le monde. Que vous soyez amateur de plages exotiques, d’aventures en montagne,  de cultures urbaines ou d’explorations dans le désert, nous avons le voyage parfait pour vous.",

          // FOOTER
          aboutUs: "À propos de nous",
          aboutText:
            "Akwaba Africa, plateforme 100 % africaine du GROUPE ISD AFRIK, met à votre portée le meilleur du tourisme africain. Réservez hôtels, vols et circuits en toute confiance ,simple, rapide et sécurisé.",
          quickLinks: "Liens rapides",
          terms: "Conditions d'utilisation",
          privacy: "Politique de confidentialité",
          help: "Aide et support",
          newsletter: "Abonnez-vous à notre newsletter",
          newsletterText:
            "Recevez nos meilleures offres et nouveautés directement dans votre boîte mail.",
          subscribe: "S'abonner",
          rights: "© 2025 Akwaba Africa. Tous droits réservés.",
          followUs: "Suivez-nous",
          offices: "Nos bureaux",

          // page flight search

          heroTitle: "Réservation de vol",
          heroTitleS: "AKWABA / RÉSERVATION DE VOL",
    heroText: "Découvrez les merveilles naturelles, culturelles et historiques du Togo, du Bénin et du Niger.",
    unesco: "Sites UNESCO",
    parks: "Parcs naturels",
    beaches: "Plages & Détente",
    searchTitle: "Rechercher un vol",
    oneWay: "Aller simple",
    roundTrip: "Aller-retour",
    depart: "Départ",
    destination: "Destination",
    departDate: "Date départ",
    returnDate: "Date retour",
    class: "Classe",
    adults: "Adultes",
    children: "Enfants",
    babies: "Bébés",
    searchFlights: "Rechercher des vols",
    filters: "Filtres",
    direct: "Vol direct uniquement",
    wifi: "Wi-Fi à bord",
    meal: "Repas inclus",
    popular: "Destinations populaires",
    from: "À partir de",
    results: "Résultats de recherche",
    book: "Réserver",
    previous: "Précédent",
    next: "Suivant",

    // accomodation page

    "accommodationTitle": "Hébergements",
    "accommodationTitleS": "AKWABA / HÉBERGEMENTS",
  "accommodationSubtitle": "Explorez les merveilles du Togo, Bénin, Niger, Burkina Faso et Côte d’Ivoire.",
  "unescoSites": "Sites UNESCO",
  "nationalParks": "Parcs Nationaux",
  "paradiseBeaches": "Plages Paradisiaques",
  "searchTitle": "Rechercher",
  "destination": "Destination",
  "arrival": "Arrivée",
  "departure": "Départ",
  "travelers": "Voyageurs",
  "oneTraveler": "1 Voyageur",
  "twoTravelers": "2 Voyageurs",
  "threeTravelers": "3 Voyageurs",
  "fourTravelers": "4 Voyageurs",
  "searchBtn": "Rechercher",
  "accommodationTypes": "Types d'hébergement",
  "hotels": "Hôtels",
  "villas": "Villas",
  "houses": "Maisons",
  "resorts": "Resorts",
  "guestHouses": "Maisons d'hôtes",
  "filters": "Filtres",
  "pricePerNight": "Prix par nuit (€)",
  "amenities": "Équipements",
  "foundAccommodations": "hébergements trouvés",
  "reviews": "avis",
  "perNight": "par nuit",
  "bookBtn": "Réserver",

  // car rental page

  
  "carTitle": "Location de voitures",
  "carTitleS": " AKWABA / Location de voitures",
  "carSubtitle": "Voyagez librement à travers le Togo, le Bénin, la Côte d’Ivoire et plus encore.",
  "luxuryCars": "Voitures de luxe",
  "suvCars": "4x4 et SUV",
  "economyCars": "Économiques",
  "searchTitle": "Rechercher",
  "pickupLocation": "Lieu de retrait",
  "startDate": "Date de départ",
  "endDate": "Date de retour",
  "drivers": "Conducteurs",
  "oneDriver": "1 conducteur",
  "twoDrivers": "2 conducteurs",
  "threeDrivers": "3 conducteurs",
  "searchBtn": "Rechercher",
  "vehicleTypes": "Types de véhicules",
  "sedans": "Berlines",
  "cityCars": "Citadines",
  "utility": "Utilitaires",
  "filters": "Filtres",
  "pricePerDay": "Prix par jour (€)",
  "carsAvailable": "voitures disponibles",
  "seats": "sièges",
  "perDay": "jour",
  "rentNow": "Louer maintenant",

  // tourisme page
    "heroTitle": "AKWABA AFRICA / TOURISME",
    "heroSubtitle": "Découvrez les merveilles naturelles, culturelles et historiques du Togo, du Bénin et du Niger.",
    "unescoSites": "Sites UNESCO",
    "nationalParks": "Parcs naturels",
    "beachesRelax": "Plages & Détente",
    "mustSeeDestinations": "Les destinations à ne pas manquer",
    "detailsBtn": "Détails",
    "locateBtn": "Localiser",
    "travelTips": "Conseils aux voyageurs",
    "healthSafetyTitle": "Santé & Sécurité",
    "healthSafetyText": "Prévoyez une trousse médicale et suivez les recommandations locales pour un séjour serein.",
    "climateTitle": "Climat",
    "climateText": "Le climat est tropical : privilégiez des vêtements légers et protégez-vous du soleil.",
    "currencyTitle": "Monnaie",
    "currencyText": "La monnaie locale est le franc CFA. Les cartes bancaires sont rarement acceptées en zone rurale.",

    // circuits touristiques 
    "circuits": {
    "heroTitle": "AKWABA AFRICA / CIRCUITS TOURISTIQUES",
    "heroSubtitle": "Explorez les merveilles du Togo, Bénin, Niger, Burkina Faso et Côte d’Ivoire.",
    "unescoSites": "Sites UNESCO",
    "nationalParks": "Parcs Nationaux",
    "beaches": "Plages Paradisiaques",

    "findCircuit": "Trouvez Votre Circuit Idéal",
    "available": "Circuits Disponibles",
    "satisfied": "Voyageurs Satisfaits",
    "averageRating": "Note Moyenne",
    "support": "Support Client",
    "availableCircuits": "circuits disponibles",
    "reviews": "avis",

    "details": "Détails",
    "book": "Réserver",

    "whyChooseUs": "Pourquoi Choisir Nos Circuits ?",
    "expertGuides": "Guides Experts",
    "expertGuidesText": "Guides locaux expérimentés et passionnés pour une expérience authentique.",
    "safetyTitle": "Sécurité Garantie",
    "safetyText": "Assurance voyage incluse et protocoles stricts.",
    "supportTitle": "Support 24/7",
    "supportText": "Assistance disponible à tout moment pendant votre voyage.",

    "readyForAdventure": "Prêt pour l'Aventure ?",
    "contactText": "Contactez-nous pour personnaliser votre circuit ou obtenir plus d'informations",
    "callUs": "Nous Appeler",
    "getQuote": "Demander un Devis",

    "days": "jours",
    "easy": "Facile",
    "moderate": "Modérée",
    "hard": "Difficile",

    "westAfricaTitle": "Grand Tour de l'Afrique de l'Ouest",
    "westAfricaCountries": "Togo, Bénin, Burkina Faso, Côte d'Ivoire",
    "abomeyPalace": "Palais Royal d'Abomey",
    "yamoussoukroBasilica": "Basilique de Yamoussoukro",
    "lomeMarkets": "Marchés traditionnels de Lomé",
    "lobiVillages": "Villages Lobi",

    "safariTitle": "Safari & Nature Niger-Burkina",
    "safariCountries": "Niger, Burkina Faso",
    "parcW": "Parc National du W",
    "nazingaReserve": "Réserve de Nazinga",
    "elephantsObservation": "Observation des éléphants",
    "fabedougouDomes": "Dômes de Fabédougou",

    "ghanaDiscovery": "Découverte du Ghana",
    "accra": "Accra",
    "capCoast": "Cap Coast",
    "elmina": "Elmina Castle",
    "kakum": "Kakum Park",

    "mountCameroon": "Randonnée au Mont Cameroun",
    "buea": "Buea",
    "ascentMountCameroon": "Ascension du Mont Cameroun",
    "bimbiaVillage": "Bimbia Village",
    },
    // contact page
    "contact": {
    "heroTitle": "AKWABA AFRICA / CONTACTS",
    "heroSubtitle": "Explorez les merveilles du Togo, Bénin, Niger, Burkina Faso et Côte d’Ivoire.",
    "unescoSites": "Sites UNESCO",
    "nationalParks": "Parcs Nationaux",
    "paradiseBeaches": "Plages Paradisiaques",
    "agenciesTitle": "Nos Agences en Afrique de l’Ouest",
    "agenciesSubtitle": "Retrouvez-nous dans plusieurs pays pour une assistance rapide et personnalisée 🌍",
    "address": "Adresse",
    "phone": "Téléphone",
    "email": "Email",
    "togo": "Togo",
    "benin": "Bénin",
    "cotedivoire": "Côte d’Ivoire",
    "burkinafaso": "Burkina Faso",
    "niger": "Niger",
  },
 "profil": {
    "title": "Mon Profil",
    "subtitle": "Gérez vos informations personnelles et préférences",
    "personalInfo": "Informations personnelles",
    "security": "Sécurité",
    "preferences": "Préférences",
    "edit": "Modifier",
    "save": "Enregistrer",
    "firstname": "Prénom",
    "lastname": "Nom",
    "email": "Email",
    "phone": "Téléphone",
    "birthdate": "Date de naissance",
    "nationality": "Nationalité",
    "address": "Adresse",
    "emergencyContact": "Contact d'urgence",
    "securityText": "Changez votre mot de passe et gérez vos paramètres de sécurité ici.",
    "preferencesText": "Définissez vos préférences d'affichage et de notifications ici."
  },

  // mes reservations
  "reservations": {
  "title": "Mes Réservations",
  "subtitle": "Gérez et suivez toutes vos réservations",
  "filters": {
    "all": "Toutes",
    "confirmed": "Confirmée",
    "pending": "En attente",
    "cancelled": "Annulée"
  },
  "labels": {
    "reference": "Référence",
    "totalPrice": "Prix total",
    "startDate": "Date de début",
    "endDate": "Date de fin"
  },
  "buttons": {
    "details": "Voir détails",
    "cancel": "Annuler",
    "download": "Télécharger",
    "support": "Support"
  },
  "types": {
    "vol": "Vol",
    "hebergement": "Hébergement",
    "circuit": "Circuit",
    "location": "Location"
  }
}, 

 "login": {
    "welcomeBack": "Bon retour !",
    "connectToAccount": "Connectez-vous pour accéder à votre compte",
    "email": "Adresse email",
    "emailPlaceholder": "votre@email.com",
    "password": "Mot de passe",
    "passwordPlaceholder": "********",
    "rememberMe": "Se souvenir de moi",
    "forgotPassword": "Mot de passe oublié ?",
    "signIn": "Se connecter",
    "noAccount": "Vous n’avez pas de compte ?",
    "createAccount": "Créer un compte",
    "exploreAfricaTitle": "Explorez l’Afrique avec nous",
    "exploreAfricaText": "Découvrez des destinations extraordinaires et vivez des expériences inoubliables."
  },
  "signup": {
    "heroTitle": "Commencez votre aventure",
    "heroSubtitle": "Découvrez des offres uniques et réservez en quelques clics.",
    "title": "Créer un compte",
    "subtitle": "Inscrivez-vous pour commencer votre aventure",
    "firstName": "Prénom",
    "lastName": "Nom",
    "email": "Adresse email",
    "phone": "Téléphone",
    "country": "Pays",
    "password": "Mot de passe",
    "confirmPassword": "Confirmer le mot de passe",
    "acceptTerms": "J’accepte les conditions d’utilisation",
    "submit": "Créer mon compte",
    "alreadyAccount": "Déjà un compte ?",
    "signIn": "Se connecter"
  },
        },
      },

      en: {
        translation: {
          home: "Home",
          flight: "Flight booking",
          accommodation: "Accommodation",
          car: "Car rental",
          tourism: "Tourism",
          circuit: "Tourist circuits",
          contactUs: "Contact",

          hero1: "Akwaba Africa: The African online booking platform",
          hero2: "Book your next trip to Africa",
          hero3: "Your adventure begins here",
          hero4: "Travel, explore, and enjoy",
          hero5: "Akwaba Africa: Your journey, our passion!",
          hero6: "Book your next trip to Africa",
          bookNow: "Book Now",

          // carroussel
          "carouselText": [
    {
      title: "Paradise Beaches",
      desc: "Relax on the white sand beaches of Zanzibar or the Seychelles. Enjoy the sun, turquoise waters, and unforgettable sunsets.",
    },
    {
      title: "Majestic Mountains",
      desc: "Discover the peaks of the Atlas or Kilimanjaro, perfect for hiking enthusiasts and lovers of outdoor adventures.",
    },
    {
      title: "Cultural Cities",
      desc: "Immerse yourself in the vibrant atmosphere of Marrakech, Dakar, or Accra. Colorful markets, refined cuisine, and rich traditions await you.",
    },
    {
      title: "Deserts and Savannas",
      desc: "Go on a safari to discover iconic animals or experience the magic of a night in the desert under a starry sky.",
    },
  ],

          discover: "Discover",

          accommodationTitle: "Accommodations",
          accommodationText:
            "Stay in the best hotels, homes, villas, or apartments. Comfort and hospitality guaranteed!",
          flightTitle: "Flight Booking",
          flightText:
            "Book your plane tickets easily and at the best prices with Akwaba Africa.",
          carTitle: "Car Rental",
          carText:
            "Travel freely at your own pace with our reliable and affordable vehicles.",
          restaurantTitle: "Restaurants",
          restaurantText:
            "Taste African gastronomy: reserve a table in the best restaurants.",
          circuitTitle: "Tourist Circuits",
          circuitText:
            "Discover unique and authentic tours to explore Africa’s beauty.",
          tourismTitle: "Tourism & Discovery",
          tourismText:
            "Live unforgettable experiences through Africa’s landscapes, cultures, and people.",

          
          destinationTitle: "Our Must-See Destinations",
          destinationText:
            "Discover our most beautiful destinations around the world. Whether you're a fan of exotic beaches, mountain adventures, urban cultures, or desert explorations, we have the perfect trip for you.",

          aboutUs: "About us",
          "aboutText": "Akwaba Africa, a 100% African platform of the ISD AFRIK GROUP, brings you the best of African tourism. Book hotels, flights, and tours with confidence, simple, fast, and secure.",
          quickLinks: "Quick Links",
          terms: "Terms of Use",
          privacy: "Privacy Policy",
          help: "Help & Support",
          newsletter: "Subscribe to our newsletter",
          newsletterText:
            "Get our best deals and updates straight to your inbox.",
          subscribe: "Subscribe",
          rights: "© 2025 Akwaba Africa. All rights reserved.",
          followUs: "Follow us",
          offices: "Our offices",

          // page flight search
           "heroTitle": "Flight Booking",
    "heroTitleS": "AKWABA / FLIGHT BOOKING",
    heroText: "Discover the natural, cultural, and historical wonders of Togo, Benin, and Niger.",
    unesco: "UNESCO Sites",
    parks: "Nature Parks",
    beaches: "Beaches & Relaxation",
    searchTitle: "Search a Flight",
    oneWay: "One-way",
    roundTrip: "Round trip",
    depart: "Departure",
    destination: "Destination",
    departDate: "Departure date",
    returnDate: "Return date",
    class: "Class",
    adults: "Adults",
    children: "Children",
    babies: "Babies",
    searchFlights: "Search Flights",
    filters: "Filters",
    direct: "Direct flights only",
    wifi: "Wi-Fi on board",
    meal: "Meal included",
    popular: "Popular Destinations",
    from: "From",
    results: "Search Results",
    book: "Book",
    previous: "Previous",
    next: "Next",

    // accomodation page

   "accommodationTitle": "Accommodations",
    "accommodationTitleS": "AKWABA / ACCOMMODATIONS",
  "accommodationSubtitle": "Explore the wonders of Togo, Benin, Niger, Burkina Faso and Côte d’Ivoire.",
  "unescoSites": "UNESCO Sites",
  "nationalParks": "National Parks",
  "paradiseBeaches": "Paradise Beaches",
  "searchTitle": "Search",
  "destination": "Destination",
  "arrival": "Arrival",
  "departure": "Departure",
  "travelers": "Travelers",
  "oneTraveler": "1 Traveler",
  "twoTravelers": "2 Travelers",
  "threeTravelers": "3 Travelers",
  "fourTravelers": "4 Travelers",
  "searchBtn": "Search",
  "accommodationTypes": "Accommodation Types",
  "hotels": "Hotels",
  "villas": "Villas",
  "houses": "Houses",
  "resorts": "Resorts",
  "guestHouses": "Guest Houses",
  "filters": "Filters",
  "pricePerNight": "Price per night (€)",
  "amenities": "Amenities",
  "foundAccommodations": "accommodations found",
  "reviews": "reviews",
  "perNight": "per night",
  "bookBtn": "Book",

  // car rental page
  "carTitle": "Car Rental",
    "carTitleS": "AKWABA / CAR RENTAL",
  "carSubtitle": "Travel freely across Togo, Benin, Côte d’Ivoire and beyond.",
  "luxuryCars": "Luxury Cars",
  "suvCars": "4x4 & SUV",
  "economyCars": "Economy",
  "searchTitle": "Search",
  "pickupLocation": "Pickup Location",
  "startDate": "Start Date",
  "endDate": "End Date",
  "drivers": "Drivers",
  "oneDriver": "1 driver",
  "twoDrivers": "2 drivers",
  "threeDrivers": "3 drivers",
  "searchBtn": "Search",
  "vehicleTypes": "Vehicle Types",
  "sedans": "Sedans",
  "cityCars": "City Cars",
  "utility": "Utility Vehicles",
  "filters": "Filters",
  "pricePerDay": "Price per day (€)",
  "carsAvailable": "cars available",
  "seats": "seats",
  "perDay": "day",
  "rentNow": "Rent Now",

  // tourisme page

  "heroTitle": "AKWABA AFRICA / TOURISM",
    "heroSubtitle": "Discover the natural, cultural and historical wonders of Togo, Benin and Niger.",
    "unescoSites": "UNESCO Sites",
    "nationalParks": "Natural Parks",
    "beachesRelax": "Beaches & Relaxation",
    "mustSeeDestinations": "Must-See Destinations",
    "detailsBtn": "Details",
    "locateBtn": "Locate",
    "travelTips": "Traveler Tips",
    "healthSafetyTitle": "Health & Safety",
    "healthSafetyText": "Pack a medical kit and follow local health recommendations for a safe trip.",
    "climateTitle": "Climate",
    "climateText": "The climate is tropical — wear light clothes and protect yourself from the sun.",
    "currencyTitle": "Currency",
    "currencyText": "The local currency is the CFA franc. Bank cards are rarely accepted in rural areas.",

    // circuits touristiques
    "circuits": {
    "heroTitle": "AKWABA AFRICA / TOURISTIC CIRCUITS",
    "heroSubtitle": "Explore the wonders of Togo, Benin, Niger, Burkina Faso and Ivory Coast.",
    "unescoSites": "UNESCO Sites",
    "nationalParks": "National Parks",
    "beaches": "Paradise Beaches",

    "findCircuit": "Find Your Ideal Tour",
    "available": "Available Circuits",
    "satisfied": "Satisfied Travelers",
    "averageRating": "Average Rating",
    "support": "Customer Support",
    "availableCircuits": "available circuits",
    "reviews": "reviews",

    "details": "Details",
    "book": "Book Now",

    "whyChooseUs": "Why Choose Our Circuits?",
    "expertGuides": "Expert Guides",
    "expertGuidesText": "Experienced and passionate local guides for an authentic experience.",
    "safetyTitle": "Guaranteed Safety",
    "safetyText": "Travel insurance included and strict safety protocols.",
    "supportTitle": "24/7 Support",
    "supportText": "Assistance available at any time during your trip.",

    "readyForAdventure": "Ready for Adventure?",
    "contactText": "Contact us to customize your circuit or get more information",
    "callUs": "Call Us",
    "getQuote": "Get a Quote",

    "days": "days",
    "easy": "Easy",
    "moderate": "Moderate",
    "hard": "Hard",

    "westAfricaTitle": "Grand Tour of West Africa",
    "westAfricaCountries": "Togo, Benin, Burkina Faso, Ivory Coast",
    "abomeyPalace": "Royal Palace of Abomey",
    "yamoussoukroBasilica": "Basilica of Yamoussoukro",
    "lomeMarkets": "Traditional Markets of Lomé",
    "lobiVillages": "Lobi Villages",

    "safariTitle": "Safari & Nature Niger-Burkina",
    "safariCountries": "Niger, Burkina Faso",
    "parcW": "W National Park",
    "nazingaReserve": "Nazinga Reserve",
    "elephantsObservation": "Elephant Observation",
    "fabedougouDomes": "Domes of Fabédougou",

    "ghanaDiscovery": "Discover Ghana",
    "accra": "Accra",
    "capCoast": "Cape Coast",
    "elmina": "Elmina Castle",
    "kakum": "Kakum Park",

    "mountCameroon": "Hiking Mount Cameroon",
    "buea": "Buea",
    "ascentMountCameroon": "Ascent of Mount Cameroon",
    "bimbiaVillage": "Bimbia Village"
    },

    // contact page
    "contact": {
    "heroTitle": "AKWABA AFRICA / CONTACTS",
    "heroSubtitle": "Explore the wonders of Togo, Benin, Niger, Burkina Faso and Côte d’Ivoire.",
    "unescoSites": "UNESCO Sites",
    "nationalParks": "National Parks",
    "paradiseBeaches": "Paradise Beaches",
    "agenciesTitle": "Our Agencies in West Africa",
    "agenciesSubtitle": "Find us in several countries for quick and personalized assistance 🌍",
    "address": "Address",
    "phone": "Phone",
    "email": "Email",
    "togo": "Togo",
    "benin": "Benin",
    "cotedivoire": "Ivory Coast",
    "burkinafaso": "Burkina Faso",
    "niger": "Niger",
    
  },
 "profil": {
    "title": "My Profile",
    "subtitle": "Manage your personal information and preferences",
    "personalInfo": "Personal Information",
    "security": "Security",
    "preferences": "Preferences",
    "edit": "Edit",
    "save": "Save",
    "firstname": "First Name",
    "lastname": "Last Name",
    "email": "Email",
    "phone": "Phone",
    "birthdate": "Date of Birth",
    "nationality": "Nationality",
    "address": "Address",
    "emergencyContact": "Emergency Contact",
    "securityText": "Change your password and manage security settings here.",
    "preferencesText": "Set your display and notification preferences here."
  },
"reservations": {
  "title": "My Reservations",
  "subtitle": "Manage and track all your bookings",
  "filters": {
    "all": "All",
    "confirmed": "Confirmed",
    "pending": "Pending",
    "cancelled": "Cancelled"
  },
  "labels": {
    "reference": "Reference",
    "totalPrice": "Total Price",
    "startDate": "Start Date",
    "endDate": "End Date"
  },
  "buttons": {
    "details": "View Details",
    "cancel": "Cancel",
    "download": "Download",
    "support": "Support"
  },
  "types": {
    "vol": "Flight",
    "hebergement": "Accommodation",
    "circuit": "Tour",
    "location": "Rental"
  }
},

"login": {
    "welcomeBack": "Welcome back!",
    "connectToAccount": "Sign in to access your account",
    "email": "Email address",
    "emailPlaceholder": "your@email.com",
    "password": "Password",
    "passwordPlaceholder": "********",
    "rememberMe": "Remember me",
    "forgotPassword": "Forgot password?",
    "signIn": "Sign In",
    "noAccount": "Don't have an account?",
    "createAccount": "Create an account",
    "exploreAfricaTitle": "Explore Africa with us",
    "exploreAfricaText": "Discover amazing destinations and unforgettable experiences."
  },

  "signup": {
    "heroTitle": "Start your adventure",
    "heroSubtitle": "Discover unique offers and book in just a few clicks.",
    "title": "Create an account",
    "subtitle": "Sign up to start your adventure",
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "Email",
    "phone": "Phone",
    "country": "Country",
    "password": "Password",
    "confirmPassword": "Confirm Password",
    "acceptTerms": "I accept the terms and conditions",
    "submit": "Create Account",
    "alreadyAccount": "Already have an account?",
    "signIn": "Sign In"
  },
        },
      },

      zh: {
        translation: {
          home: "首页",
          flight: "航班预订",
          accommodation: "住宿",
          car: "租车",
          tourism: "旅游",
          circuit: "旅游线路",
          contactUs: "联系我们",

          hero1: "Akwaba Africa：非洲在线预订平台",
          hero2: "预订您下一次的非洲之旅",
          hero3: "您的冒险从这里开始",
          hero4: "旅行、探索、享受",
          hero5: "Akwaba Africa：您的旅程，我们的热情！",
          hero6: "立即预订您的非洲之旅",
          bookNow: "立即预订",
          // carroussel
          "carouselText":  [
    {
      title: "天堂般的海滩",
      desc: "在桑给巴尔或塞舌尔的白色沙滩上放松身心。享受阳光、碧蓝的海水和难忘的日落。",
    },
    {
      title: "雄伟的山脉",
      desc: "探索阿特拉斯山或乞力马扎罗山的山峰，非常适合徒步旅行者和热爱大自然的人。",
    },
    {
      title: "文化名城",
      desc: "沉浸在马拉喀什、达喀尔或阿克拉的活力氛围中。多彩的集市、精致的美食和丰富的传统等着你。",
    },
    {
      title: "沙漠与草原",
      desc: "踏上狩猎之旅，探索标志性的动物，或在星空下体验沙漠之夜的神奇魅力。",
    },
  ],
          discover: "探索",

          "accommodationTitle": "住宿",
    "accommodationTitleS": "AKWABA / 住宿",
          accommodationText: "入住最好的酒店、公寓或别墅。舒适与热情保证！",
          flightTitle: "航班预订",
          flightText: "通过 Akwaba Africa 轻松预订航班，享受最佳价格。",
          carTitle: "租车",
          carText: "以自己的节奏自由出行，享受可靠且实惠的车辆。",
          restaurantTitle: "餐厅",
          restaurantText: "品尝非洲美食：预订最佳餐厅座位。",
          circuitTitle: "旅游线路",
          circuitText: "探索独特而真实的路线，欣赏非洲之美。",
          tourismTitle: "旅游与发现",
          tourismText: "通过非洲的风景、文化和人民体验难忘的旅程。",

          destinationTitle: "我们的必去目的地",
          destinationText:
            "探索我们在世界各地最美丽的目的地。 无论您喜欢异国海滩、山地探险、 城市文化还是沙漠探索， 我们都为您准备了完美的旅程。",


          aboutUs: "关于我们",
          "aboutText": "Akwaba Africa 是 ISD AFRIK 集团旗下的 100% 非洲平台，为您呈现非洲旅游的最佳体验。放心预订酒店、航班和旅行线路 简单、快捷且安全。",
          quickLinks: "快速链接",
          terms: "使用条款",
          privacy: "隐私政策",
          help: "帮助与支持",
          newsletter: "订阅我们的新闻通讯",
          newsletterText: "获取我们的最佳优惠和最新消息，直接发送到您的邮箱。",
          subscribe: "订阅",
          rights: "© 2025 Akwaba Africa. 保留所有权利。",
          followUs: "关注我们",
          offices: "我们的办事处",

          // page flight search
          
    "heroTitle": "航班预订",
    "heroTitleS": "AKWABA / 航班预订",
    heroText: "探索多哥、贝宁和尼日尔的自然、文化和历史奇观。",
    unesco: "联合国教科文组织遗址",
    parks: "自然公园",
    beaches: "海滩与休闲",
    searchTitle: "搜索航班",
    oneWay: "单程",
    roundTrip: "往返",
    depart: "出发地",
    destination: "目的地",
    departDate: "出发日期",
    returnDate: "返回日期",
    class: "舱位",
    adults: "成人",
    children: "儿童",
    babies: "婴儿",
    searchFlights: "搜索航班",
    filters: "筛选条件",
    direct: "仅限直飞航班",
    wifi: "机上 Wi-Fi",
    meal: "包含餐食",
    popular: "热门目的地",
    from: "起价",
    results: "搜索结果",
    book: "预订",
    previous: "上一页",
    next: "下一页",

    // accomodation page
     "accommodationTitle": "AKWABA AFRICA / 住宿",
    "accommodationTitleS": "AKWABA / 住宿",
  "accommodationSubtitle": "探索多哥、贝宁、尼日尔、布基纳法索和科特迪瓦的奇观。",
  "unescoSites": "联合国教科文组织遗址",
  "nationalParks": "国家公园",
  "paradiseBeaches": "天堂海滩",
  "searchTitle": "搜索",
  "destination": "目的地",
  "arrival": "到达",
  "departure": "离开",
  "travelers": "旅客",
  "oneTraveler": "1 位旅客",
  "twoTravelers": "2 位旅客",
  "threeTravelers": "3 位旅客",
  "fourTravelers": "4 位旅客",
  "searchBtn": "搜索",
  "accommodationTypes": "住宿类型",
  "hotels": "酒店",
  "villas": "别墅",
  "houses": "房屋",
  "resorts": "度假村",
  "guestHouses": "民宿",
  "filters": "筛选条件",
  "pricePerNight": "每晚价格 (€)",
  "amenities": "设施",
  "foundAccommodations": "找到的住宿",
  "reviews": "评论",
  "perNight": "每晚",
  "bookBtn": "预订",

  // car rental page

  "carTitle": "汽车租赁",
    "carTitleS": "AKWABA / 汽车租赁",
  "carSubtitle": "自由畅游多哥、贝宁、科特迪瓦及更多目的地。",
  "luxuryCars": "豪华车",
  "suvCars": "4x4 和 SUV",
  "economyCars": "经济型",
  "searchTitle": "搜索",
  "pickupLocation": "取车地点",
  "startDate": "出发日期",
  "endDate": "归还日期",
  "drivers": "驾驶员",
  "oneDriver": "1 名驾驶员",
  "twoDrivers": "2 名驾驶员",
  "threeDrivers": "3 名驾驶员",
  "searchBtn": "搜索",
  "vehicleTypes": "车辆类型",
  "sedans": "轿车",
  "cityCars": "城市车",
  "utility": "商用车",
  "filters": "筛选条件",
  "pricePerDay": "每日价格 (€)",
  "carsAvailable": "可用车辆",
  "seats": "座位",
  "perDay": "天",
  "rentNow": "立即租车",

  // tourisme page
   "heroTitle": "AKWABA AFRICA / 旅游",
    "heroSubtitle": "探索多哥、贝宁和尼日尔的自然、文化与历史奇观。",
    "unescoSites": "联合国教科文组织遗产地",
    "nationalParks": "自然公园",
    "beachesRelax": "海滩与休闲",
    "mustSeeDestinations": "必游目的地",
    "detailsBtn": "详情",
    "locateBtn": "定位",
    "travelTips": "旅行建议",
    "healthSafetyTitle": "健康与安全",
    "healthSafetyText": "准备好医药箱，并遵循当地健康建议以确保安全旅行。",
    "climateTitle": "气候",
    "climateText": "属热带气候，建议穿轻便衣物并注意防晒。",
    "currencyTitle": "货币",
    "currencyText": "当地货币为非洲法郎（CFA），农村地区很少接受银行卡。",

    // circuits touristiques

    "circuits": {
    "heroTitle": "AKWABA AFRICA / 旅游路线",
    "heroSubtitle": "探索多哥、贝宁、尼日尔、布基纳法索和科特迪瓦的奇观。",
    "unescoSites": "联合国教科文组织遗产",
    "nationalParks": "国家公园",
    "beaches": "天堂海滩",

    "findCircuit": "寻找理想行程",
    "available": "可选路线",
    "satisfied": "满意旅客",
    "averageRating": "平均评分",
    "support": "客户支持",
    "availableCircuits": "条可选路线",
    "reviews": "评论",

    "details": "详情",
    "book": "立即预订",

    "whyChooseUs": "为什么选择我们的路线？",
    "expertGuides": "专业导游",
    "expertGuidesText": "经验丰富且充满热情的本地导游，为您带来真实体验。",
    "safetyTitle": "安全保障",
    "safetyText": "包含旅行保险并执行严格安全措施。",
    "supportTitle": "全天候支持",
    "supportText": "旅途中随时提供帮助。",

    "readyForAdventure": "准备好冒险了吗？",
    "contactText": "联系我们定制您的路线或获取更多信息",
    "callUs": "联系我们",
    "getQuote": "获取报价",

    "days": "天",
    "easy": "简单",
    "moderate": "中等",
    "hard": "困难",

    "westAfricaTitle": "西非大环游",
    "westAfricaCountries": "多哥、贝宁、布基纳法索、科特迪瓦",
    "abomeyPalace": "阿博美王宫",
    "yamoussoukroBasilica": "亚穆苏克罗大教堂",
    "lomeMarkets": "洛美传统市场",
    "lobiVillages": "洛比村庄",

    "safariTitle": "尼日尔与布基纳法索自然探险",
    "safariCountries": "尼日尔、布基纳法索",
    "parcW": "W国家公园",
    "nazingaReserve": "纳辛加保护区",
    "elephantsObservation": "大象观赏",
    "fabedougouDomes": "法贝杜古穹顶",

    "ghanaDiscovery": "加纳探索之旅",
    "accra": "阿克拉",
    "capCoast": "海角海岸",
    "elmina": "埃尔米纳城堡",
    "kakum": "卡库姆公园",

    "mountCameroon": "喀麦隆山徒步",
    "buea": "布埃亚",
    "ascentMountCameroon": "攀登喀麦隆山",
    "bimbiaVillage": "宾比亚村"
  }, 
   "contact": {
    "heroTitle": "AKWABA AFRICA / 联系方式",
    "heroSubtitle": "探索多哥、贝宁、尼日尔、布基纳法索和科特迪瓦的奇观。",
    "unescoSites": "联合国教科文组织遗址",
    "nationalParks": "国家公园",
    "paradiseBeaches": "天堂海滩",
    "agenciesTitle": "我们在西非的办事处",
    "agenciesSubtitle": "在多个国家找到我们，获得快速且个性化的服务 🌍",
    "address": "地址",
    "phone": "电话",
    "email": "电子邮件",
    "togo": "多哥",
    "benin": "贝宁",
    "cotedivoire": "科特迪瓦",
    "burkinafaso": "布基纳法索",
    "niger": "尼日尔", 
    
  },
  "profil": {
    "title": "我的个人资料",
    "subtitle": "管理您的个人信息和偏好设置",
    "personalInfo": "个人信息",
    "security": "安全",
    "preferences": "偏好设置",
    "edit": "编辑",
    "save": "保存",
    "firstname": "名字",
    "lastname": "姓氏",
    "email": "电子邮件",
    "phone": "电话",
    "birthdate": "出生日期",
    "nationality": "国籍",
    "address": "地址",
    "emergencyContact": "紧急联系人",
    "securityText": "在此更改您的密码并管理安全设置。",
    "preferencesText": "在此设置您的显示和通知偏好。"
  },
  // mes reservations
  "reservations": {
  "title": "我的预订",
  "subtitle": "管理并跟踪您的所有预订",
  "filters": {
    "all": "全部",
    "confirmed": "已确认",
    "pending": "待处理",
    "cancelled": "已取消"
  },
  "labels": {
    "reference": "参考号",
    "totalPrice": "总价",
    "startDate": "开始日期",
    "endDate": "结束日期"
  },
  "buttons": {
    "details": "查看详情",
    "cancel": "取消",
    "download": "下载",
    "support": "支持"
  },
  "types": {
    "vol": "航班",
    "hebergement": "住宿",
    "circuit": "旅游路线",
    "location": "租赁"
  }
},

"login": {
    "welcomeBack": "欢迎回来！",
    "connectToAccount": "登录以访问您的账户",
    "email": "电子邮箱",
    "emailPlaceholder": "your@email.com",
    "password": "密码",
    "passwordPlaceholder": "********",
    "rememberMe": "记住我",
    "forgotPassword": "忘记密码？",
    "signIn": "登录",
    "noAccount": "还没有账户？",
    "createAccount": "创建账户",
    "exploreAfricaTitle": "与我们一起探索非洲",
    "exploreAfricaText": "发现惊艳的目的地，体验难忘的旅行。"
  },

  
  "signup": {
    "heroTitle": "开始您的冒险",
    "heroSubtitle": "发现独家优惠，只需几次点击即可预订。",
    "title": "创建账户",
    "subtitle": "注册以开始您的冒险",
    "firstName": "名字",
    "lastName": "姓氏",
    "email": "电子邮箱",
    "phone": "电话",
    "country": "国家",
    "password": "密码",
    "confirmPassword": "确认密码",
    "acceptTerms": "我接受使用条款",
    "submit": "创建账户",
    "alreadyAccount": "已有账户？",
    "signIn": "登录"
  }

        },
      },

      es: {
        translation: {
          home: "Inicio",
          flight: "Reserva de vuelo",
          accommodation: "Alojamiento",
          car: "Alquiler de coche",
          tourism: "Turismo",
          circuit: "Circuitos turísticos",
          contactUs: "Contacto",

          hero1: "Akwaba Africa: La plataforma africana de reservas en línea",
          hero2: "Reserva tu próximo viaje a África",
          hero3: "Tu aventura comienza aquí",
          hero4: "Viaja, explora y disfruta",
          hero5: "Akwaba Africa: ¡Tu viaje, nuestra pasión!",
          hero6: "Reserva tu próximo viaje a África",
          bookNow: "Reservar ahora",

          discover: "Descubrir",

          // carroussel
          carouselText:  [
    {
      title: "Playas paradisíacas",
      desc: "Relájate en las playas de arena blanca de Zanzíbar o Seychelles. Disfruta del sol, las aguas turquesas y las puestas de sol inolvidables.",
    },
    {
      title: "Montañas majestuosas",
      desc: "Descubre las cumbres del Atlas o del Kilimanjaro, ideales para los amantes del senderismo y las experiencias al aire libre.",
    },
    {
      title: "Ciudades culturales",
      desc: "Sumérgete en el ambiente vibrante de Marrakech, Dakar o Accra. Mercados coloridos, gastronomía refinada y ricas tradiciones te esperan.",
    },
    {
      title: "Desiertos y sabanas",
      desc: "Embárcate en un safari para descubrir animales emblemáticos o vive la magia de una noche en el desierto bajo un cielo estrellado.",
    },
  ],


         "accommodationTitle": "Alojamientos",
    "accommodationTitleS": "AKWABA / ALOJAMIENTOS",
          accommodationText:
            "Alójate en los mejores hoteles, casas, villas o apartamentos. ¡Comodidad y hospitalidad garantizadas!",
          flightTitle: "Reserva de vuelo",
          flightText:
            "Reserva tus billetes de avión fácilmente y al mejor precio con Akwaba Africa.",
          carTitle: "Alquiler de coches",
          carText:
            "Viaja libremente a tu propio ritmo con nuestros vehículos fiables y asequibles.",
          restaurantTitle: "Restaurantes",
          restaurantText:
            "Disfruta de la gastronomía africana: reserva en los mejores restaurantes.",
          circuitTitle: "Circuitos turísticos",
          circuitText:
            "Descubre recorridos únicos y auténticos por la belleza de África.",
          tourismTitle: "Turismo y descubrimiento",
          tourismText:
            "Vive experiencias inolvidables a través de los paisajes y culturas de África.",

          
          destinationTitle: "Nuestros Destinos Imperdibles",
          destinationText:
            "Descubre nuestros destinos más hermosos en todo el mundo.  Ya seas amante de las playas exóticas, las aventuras en la montaña,  las culturas urbanas o las exploraciones en el desierto,  tenemos el viaje perfecto para ti.",


          aboutUs: "Sobre nosotros",
         "aboutText": "Akwaba Africa, una plataforma 100 % africana del GRUPO ISD AFRIK, pone a tu alcance lo mejor del turismo africano. Reserva hoteles, vuelos y circuitos con total confianza: simple, rápido y seguro.",
          quickLinks: "Enlaces rápidos",
          terms: "Términos de uso",
          privacy: "Política de privacidad",
          help: "Ayuda y soporte",
          newsletter: "Suscríbete a nuestro boletín",
          newsletterText:
            "Recibe nuestras mejores ofertas y novedades directamente en tu correo electrónico.",
          subscribe: "Suscribirse",
          rights: "© 2025 Akwaba Africa. Todos los derechos reservados.",
          followUs: "Síguenos",
          offices: "Nuestras oficinas",

    heroTitle: "Reserva de vuelo",
    heroTitleS: "AKWABA / RESERVA DE VUELO",
    heroText: "Descubre las maravillas naturales, culturales e históricas de Togo, Benín y Níger.",
    unesco: "Sitios UNESCO",
    parks: "Parques naturales",
    beaches: "Playas y Relax",
    searchTitle: "Buscar un vuelo",
    oneWay: "Solo ida",
    roundTrip: "Ida y vuelta",
    depart: "Salida",
    destination: "Destino",
    departDate: "Fecha de salida",
    returnDate: "Fecha de regreso",
    class: "Clase",
    adults: "Adultos",
    children: "Niños",
    babies: "Bebés",
    searchFlights: "Buscar vuelos",
    filters: "Filtros",
    direct: "Solo vuelos directos",
    wifi: "Wi-Fi a bordo",
    meal: "Comida incluida",
    popular: "Destinos populares",
    from: "Desde",
    results: "Resultados de búsqueda",
    book: "Reservar",
    previous: "Anterior",
    next: "Siguiente",

    //accomodation page
    "accommodationTitle": "ALOJAMIENTOS",
    "accommodationTitles": "AKWABA AFRICA / ALOJAMIENTOS",
  "accommodationSubtitle": "Explora las maravillas de Togo, Benín, Níger, Burkina Faso y Costa de Marfil.",
  "unescoSites": "Sitios UNESCO",
  "nationalParks": "Parques Nacionales",
  "paradiseBeaches": "Playas Paradisíacas",
  "searchTitle": "Buscar",
  "destination": "Destino",
  "arrival": "Llegada",
  "departure": "Salida",
  "travelers": "Viajeros",
  "oneTraveler": "1 Viajero",
  "twoTravelers": "2 Viajeros",
  "threeTravelers": "3 Viajeros",
  "fourTravelers": "4 Viajeros",
  "searchBtn": "Buscar",
  "accommodationTypes": "Tipos de alojamiento",
  "hotels": "Hoteles",
  "villas": "Villas",
  "houses": "Casas",
  "resorts": "Resorts",
  "guestHouses": "Casas de huéspedes",
  "filters": "Filtros",
  "pricePerNight": "Precio por noche (€)",
  "amenities": "Servicios",
  "foundAccommodations": "alojamientos encontrados",
  "reviews": "reseñas",
  "perNight": "por noche",
  "bookBtn": "Reservar",

  // car rental page
  "carTitle": "Alquiler de coches",
  "carTitleS": "AKWABA / ALQUILER DE COCHES",
  "carSubtitle": "Viaja libremente por Togo, Benín, Costa de Marfil y más.",
  "luxuryCars": "Coches de lujo",
  "suvCars": "4x4 y SUV",
  "economyCars": "Económicos",
  "searchTitle": "Buscar",
  "pickupLocation": "Lugar de recogida",
  "startDate": "Fecha de salida",
  "endDate": "Fecha de regreso",
  "drivers": "Conductores",
  "oneDriver": "1 conductor",
  "twoDrivers": "2 conductores",
  "threeDrivers": "3 conductores",
  "searchBtn": "Buscar",
  "vehicleTypes": "Tipos de vehículos",
  "sedans": "Berlina",
  "cityCars": "Coches urbanos",
  "utility": "Vehículos utilitarios",
  "filters": "Filtros",
  "pricePerDay": "Precio por día (€)",
  "carsAvailable": "coches disponibles",
  "seats": "asientos",
  "perDay": "día",
  "rentNow": "Alquilar ahora",

  //tourisme page
  "heroTitle": "AKWABA AFRICA / TURISMO",
    "heroSubtitle": "Descubre las maravillas naturales, culturales e históricas de Togo, Benín y Níger.",
    "unescoSites": "Sitios UNESCO",
    "nationalParks": "Parques Naturales",
    "beachesRelax": "Playas y Relax",
    "mustSeeDestinations": "Destinos Imperdibles",
    "detailsBtn": "Detalles",
    "locateBtn": "Localizar",
    "travelTips": "Consejos para Viajeros",
    "healthSafetyTitle": "Salud y Seguridad",
    "healthSafetyText": "Lleva un botiquín y sigue las recomendaciones locales para un viaje seguro.",
    "climateTitle": "Clima",
    "climateText": "El clima es tropical; usa ropa ligera y protégete del sol.",
    "currencyTitle": "Moneda",
    "currencyText": "La moneda local es el franco CFA. Las tarjetas bancarias rara vez se aceptan en zonas rurales.",

    "circuits": {
    "heroTitle": "AKWABA AFRICA / CIRCUITOS TURÍSTICOS",
    "heroSubtitle": "Explora las maravillas de Togo, Benín, Níger, Burkina Faso y Costa de Marfil.",
    "unescoSites": "Sitios UNESCO",
    "nationalParks": "Parques Nacionales",
    "beaches": "Playas Paradisíacas",

    "findCircuit": "Encuentra Tu Circuito Ideal",
    "available": "Circuitos Disponibles",
    "satisfied": "Viajeros Satisfechos",
    "averageRating": "Calificación Promedio",
    "support": "Atención al Cliente",
    "availableCircuits": "circuitos disponibles",
    "reviews": "opiniones",

    "details": "Detalles",
    "book": "Reservar",

    "whyChooseUs": "¿Por Qué Elegir Nuestros Circuitos?",
    "expertGuides": "Guías Expertos",
    "expertGuidesText": "Guías locales experimentados y apasionados para una experiencia auténtica.",
    "safetyTitle": "Seguridad Garantizada",
    "safetyText": "Seguro de viaje incluido y protocolos estrictos.",
    "supportTitle": "Soporte 24/7",
    "supportText": "Asistencia disponible en cualquier momento durante tu viaje.",

    "readyForAdventure": "¿Listo para la Aventura?",
    "contactText": "Contáctanos para personalizar tu circuito o recibir más información",
    "callUs": "Llámanos",
    "getQuote": "Solicitar Presupuesto",

    "days": "días",
    "easy": "Fácil",
    "moderate": "Moderado",
    "hard": "Difícil",

    "westAfricaTitle": "Gran Tour de África Occidental",
    "westAfricaCountries": "Togo, Benín, Burkina Faso, Costa de Marfil",
    "abomeyPalace": "Palacio Real de Abomey",
    "yamoussoukroBasilica": "Basílica de Yamoussoukro",
    "lomeMarkets": "Mercados Tradicionales de Lomé",
    "lobiVillages": "Pueblos Lobi",

    "safariTitle": "Safari y Naturaleza Níger-Burkina",
    "safariCountries": "Níger, Burkina Faso",
    "parcW": "Parque Nacional W",
    "nazingaReserve": "Reserva de Nazinga",
    "elephantsObservation": "Observación de Elefantes",
    "fabedougouDomes": "Cúpulas de Fabédougou",

    "ghanaDiscovery": "Descubre Ghana",
    "accra": "Accra",
    "capCoast": "Cape Coast",
    "elmina": "Castillo de Elmina",
    "kakum": "Parque Kakum",

    "mountCameroon": "Excursión al Monte Camerún",
    "buea": "Buea",
    "ascentMountCameroon": "Ascenso al Monte Camerún",
    "bimbiaVillage": "Pueblo de Bimbia"
  },
  "contact": {
    "heroTitle": "AKWABA AFRICA / CONTACTOS",
    "heroSubtitle": "Explora las maravillas de Togo, Benín, Níger, Burkina Faso y Costa de Marfil.",
    "unescoSites": "Sitios UNESCO",
    "nationalParks": "Parques Nacionales",
    "paradiseBeaches": "Playas Paradisíacas",
    "agenciesTitle": "Nuestras Agencias en África Occidental",
    "agenciesSubtitle": "Encuéntranos en varios países para una asistencia rápida y personalizada 🌍",
    "address": "Dirección",
    "phone": "Teléfono",
    "email": "Correo electrónico",
    "togo": "Togo",
    "benin": "Benín",
    "cotedivoire": "Costa de Marfil",
    "burkinafaso": "Burkina Faso",
    "niger": "Níger",
  },

  "profil": {
    "title": "Mi Perfil",
    "subtitle": "Gestiona tu información personal y preferencias",
    "personalInfo": "Información personal",
    "security": "Seguridad",
    "preferences": "Preferencias",
    "edit": "Editar",
    "save": "Guardar",
    "firstname": "Nombre",
    "lastname": "Apellido",
    "email": "Correo electrónico",
    "phone": "Teléfono",
    "birthdate": "Fecha de nacimiento",
    "nationality": "Nacionalidad",
    "address": "Dirección",
    "emergencyContact": "Contacto de emergencia",
    "securityText": "Cambia tu contraseña y gestiona tus ajustes de seguridad aquí.",
    "preferencesText": "Configura tus preferencias de visualización y notificaciones aquí."
  },

  // mes reservations
  "reservations": {
  "title": "Mis Reservas",
  "subtitle": "Gestiona y sigue todas tus reservas",
  "filters": {
    "all": "Todas",
    "confirmed": "Confirmada",
    "pending": "Pendiente",
    "cancelled": "Cancelada"
  },
  "labels": {
    "reference": "Referencia",
    "totalPrice": "Precio total",
    "startDate": "Fecha de inicio",
    "endDate": "Fecha de fin"
  },
  "buttons": {
    "details": "Ver detalles",
    "cancel": "Cancelar",
    "download": "Descargar",
    "support": "Soporte"
  },
  "types": {
    "vol": "Vuelo",
    "hebergement": "Alojamiento",
    "circuit": "Circuito",
    "location": "Alquiler"
  }
},

"login": {
    "welcomeBack": "¡Bienvenido de nuevo!",
    "connectToAccount": "Inicia sesión para acceder a tu cuenta",
    "email": "Correo electrónico",
    "emailPlaceholder": "tu@email.com",
    "password": "Contraseña",
    "passwordPlaceholder": "********",
    "rememberMe": "Recuérdame",
    "forgotPassword": "¿Olvidaste tu contraseña?",
    "signIn": "Iniciar sesión",
    "noAccount": "¿No tienes una cuenta?",
    "createAccount": "Crear una cuenta",
    "exploreAfricaTitle": "Explora África con nosotros",
    "exploreAfricaText": "Descubre destinos increíbles y vive experiencias inolvidables."
  },

  "signup": {
    "heroTitle": "Comienza tu aventura",
    "heroSubtitle": "Descubre ofertas únicas y reserva en pocos clics.",
    "title": "Crear cuenta",
    "subtitle": "Regístrate para comenzar tu aventura",
    "firstName": "Nombre",
    "lastName": "Apellido",
    "email": "Correo electrónico",
    "phone": "Teléfono",
    "country": "País",
    "password": "Contraseña",
    "confirmPassword": "Confirmar Contraseña",
    "acceptTerms": "Acepto los términos y condiciones",
    "submit": "Crear Cuenta",
    "alreadyAccount": "¿Ya tienes una cuenta?",
    "signIn": "Iniciar sesión"
  }

        },
      },
    },
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });

export default i18n;
