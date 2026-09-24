import ListingCard from "@/component/listings/ListingCard";
import Container from "@/layouts/Container";
import { title } from "process";

const listings = [
  {
    id: 1,
    title: "Traditional Raid in the Medina",
    location: "Marrakesh, Morocco",
    image: "/images/image1.jpeg",
    price: 95,
  },
  {
    id: 2,
    title: "Luxury Ocean View Apartment",
    location: "Cape Town, South Africa",
    image: "/images/image2.jpeg",
    price: 180,
  },
  {
    id: 3,
    title: "Cozy Studio Near City Center",
    location: "Lisbon, Portugal",
    image: "/images/image3.jpeg",
    price: 110,
  },
  {
    id: 4,
    title: "Desert Retreat with Mountain Views",
    location: "Quarzazate, Morocco",
    image: "/images/image4.jpeg",
    price: 85,
  },
  {
    id: 5,
    title: "Modern Apartment in the CBD",
    location: "Johannesburg, South Africa",
    image: "/images/image5.jpeg",
    price: 140,
  },
  {
    id: 6,
    title: "Charming Loft in Historic District",
    location: "Paris, France",
    image: "/images/image6.jpeg",
    price: 240,
  },
];

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </Container>
  );
}
