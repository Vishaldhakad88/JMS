import React from "react";
import Header from "../../components/Header/Header";
import CategoryList from "../../components/Category/CategoryList";
import Carousel from "../../components/Carousel/Carousel";
import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import MobileNavBar from "./MobileNavBar";
import PopularProducts from "../../components/Products/Products";
import SellAdSection from "../../components/SellAdSection/SellAdSection";
import Stories from "../../components/Stories/Stories";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-6">
        <CategoryList />

        <section className="mt-4">
          <Carousel />
        </section>

        <section className="mt-4">
          <Stories  />
        </section>

        <section className="mt-6">
          <CardsGrid />
        </section>

     <section className="mt-6">
          <PopularProducts />
        </section>
        
        <section className="mt-6">
          <SellAdSection />
        </section>
        <section className="mt-6">
          <PhotoGallery />
        </section>


      </main>

      <Footer />
      <MobileNavBar />
    </div>
  );
}
