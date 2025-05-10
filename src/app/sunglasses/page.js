"use client";
import Banner from "@/components/Banner";

import ProductFilter from "@/components/sunglass/ProductFilter";

import React from "react";

export default function Sunglasses() {

  return (
    <>
      <Banner
        title="Sunglasses"
        subtitle="Explore our stylish and protective sunglasses collection."
      />
      <h1>Sunglasses</h1>
      <p>This is the sunglasses page.</p>
      <ProductFilter category="Sunglasses"/>
    </>
  );
}
