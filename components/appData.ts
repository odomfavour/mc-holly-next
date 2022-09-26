import monty from "../public/hotels/monty.png"
import ibom from "../public/hotels/ibom.png"
import davok from "../public/hotels/davok.png"
import eemjm from "../public/hotels/eemjm.png"
import fresh from "../public/hotels/fresh.png"
import deCastle from "../public/hotels/de-castle.png"

//gallery
import pic1 from "../public/gallery/2021/pic-1.png"
import pic2 from "../public/gallery/2021/pic-2.png"
import pic3 from "../public/gallery/2021/pic-3.png"
import pic4 from "../public/gallery/2021/pic-4.png"

// tickets

import regularTicket from "../public/regular-ticket.jpg"
import premiumTicket from "../public/premium-ticket.jpg"
import vipTicket from "../public/vip-ticket.jpg"
import executiveTicket from "../public/executive-ticket.jpg"


export const hotels = [
  {
    id: 1,
    link: "https://hotels.ng/hotel/24317-monty-suites-akwa-ibom",
    name: "Monty Suites",
    address: "37 General Edet Akpan Avenue, 520231 Uyo",
    price: "68,000",
    image: monty,
  },
  {
    id: 2,
    link: "https://hotels.ng/hotel/63946-le-meridien-ibom-hotel-golf-resort-akwa-ibom",
    name: "Ibom Icon Hotel & Golf Resort",
    address: "Nwaniba Road, Uyo, Akwa Ibom",
    price: "76,500",
    image: ibom,
  },
  {
    id: 3,
    link: "https://hotels.ng/hotel/58913-eemjm-hotel-and-suites-limited-akwa-ibom",
    name: "Eemjm Hotel",
    address: "47 Dominic Otuk Avenue Formerly Brook Street",
    price: "20,500",
    image: eemjm,
  },
  {
    id: 4,
    link: "https://hotels.ng/hotel/73238-davok-suites-akwa-ibom",
    name: "Davok Suites",
    address: "Plot S.9 Unit G Ewet Housing Estate",
    price: "21,000",
    image: davok,
  },
  {
    id: 5,
    link: "https://hotels.ng/hotel/99249-de-castle-luxury-home-hotel-and-catering-service-akwa-ibom",
    name: "De-Castle Luxury Home",
    address: "Plot 25 Unit F Ewet Housing, Uyo, Akwa Ibom",
    price: "12,000",
    image: deCastle,
  },
  {
    id: 6,
    link: "https://hotels.ng/hotel/1007470-fresh-spring-hotels-and-towers-akwa-ibom",
    name: "Fresh Spring Hotels And Towers",
    address: "49 Akpa Ube Street, Aka Offot, Uyo",
    price: "16,000",
    image: fresh,
  },
]

export const gallery = [
  {
    id: 1,
    image: pic1,
    title: "",
  },
  {
    id: 2,
    image: pic2,
    title: "",
  },
  {
    id: 3,
    image: pic3,
    title: "",
  },
  {
    id: 4,
    image: pic4,
    title: "",
  },
]

export const tickets = [
  {
      id: 1,
      image: regularTicket,
      link: 'https://paystack.com/buy/hollys-era-regular-telopi',
      price: '3,000'
  },
  {
      id: 2,
      image: vipTicket,
      link: 'https://paystack.com/buy/hollys-era-vip-axmjdz',
      price: '10,000'
  },
  {
      id: 3,
      image: executiveTicket,
      link: 'https://paystack.com/buy/hollys-era-exclusive-pfwjwd',
      price: '300,000'
  },
  {
      id: 4,
      image: premiumTicket,
      link: 'https://paystack.com/buy/hollys-era-premium-dymuaj',
      price: '600,000'
  }    
]

export const headerLinks = [
  {
      id: 1,
      name: 'Home',
      url: '/',
  },
  {
      id: 2,
      name: 'Sponsor',
      url: '/#sponsor',
  },
  {
      id: 3,
      name: 'Tickets',
      url: '/ticket',
  },
  {
      id: 4,
      name: 'About event',
      url: '/#aboutEvent',
  },
  {
      id: 5,
      name: 'About McHolly',
      url: '/#aboutMC',
  },
  {
      id: 6,
      name: 'Accomodation',
      url: '/#accomodation',
  },
  {
      id: 7,
      name: 'Gallery',
      url: '/gallery',
  },
  
]
