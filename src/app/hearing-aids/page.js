import CardSection from "@/components/hearing_aids/CardSection";
import HearingForm from "@/components/hearing_aids/HearingForm";
import HearingProduct from "@/components/hearing_aids/HearingProduct";
import HearingSlider from "@/components/hearing_aids/HearingSlider";
import StoreLocation from "@/components/hearing_aids/StoreLocation";
import React from "react";

export default function HearingAids() {
  return (
  <div>
    <CardSection/>
    <HearingSlider/>
    <HearingProduct/>
    <StoreLocation/>
    <HearingForm/>
  </div>
  );
}
