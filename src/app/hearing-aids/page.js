import Banner from "@/components/Banner";
import CardSection from "@/components/hearing_aids/CardSection";
import HearingForm from "@/components/hearing_aids/HearingForm";
import HearingProduct from "@/components/hearing_aids/HearingProduct";
import HearingSlider from "@/components/hearing_aids/HearingSlider";
import StoreLocation from "@/components/hearing_aids/StoreLocation";
import React from "react";

export default function HearingAids() {
  return (
    <div>
      <Banner
        title="Computer Glasses"
        subtitle="Find the perfect pair of computer glasses for your style and vision needs."
      />
      hearing aids here...
      <div>
        <CardSection />
        <HearingSlider />
        <HearingProduct />
        <StoreLocation />
        <HearingForm />
      </div>
    </div>
  );
}
