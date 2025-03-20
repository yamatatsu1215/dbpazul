"use client"

import type React from "react"
import {
  Box,
} from "@mui/material"
import CTA from "./components/landing/CTA"
import FAQ from "./components/landing/FAQ"
import Features from "./components/landing/Features"
import Footer from "./components/landing/Footer"
import Header from "./components/landing/Header"
import Hero from "./components/landing/Hero"
import HowItWorks from "./components/landing/HowItWorks"
import Pricing from "./components/landing/Pricing"

export default function TopPage() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </Box>
  )
}

