"use client";
import React, { useEffect, useMemo } from "react";

import Banner from "@/components/landingPage/Section/Banner";

import { useUser } from "@clerk/clerk-react";
import saveUserApi from "@/utilities/api-call/saveUserApi";
import Ready from "@/components/landingPage/Section/Ready";

import useGetAllUsers from "@/hooks/apiHooks/userHooks/useGetAllUser";

import Slider from "@/components/landingPage/Section/Slider";
import StatsBanner from "@/components/landingPage/Section/StatsBanner";
import FeaturesSection from "@/components/landingPage/Section/FeaturesSection";
import StepsSection from "@/components/landingPage/Section/StepsSection";
import PricingPlans from "@/components/landingPage/Section/PricingPlans";

const LandingPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { data: users, loading } = useGetAllUsers();

  const isUserExists = useMemo(
    () =>
      user?.emailAddresses
        ? !!users?.find(
            (u) => u?.emailAddresses === user.emailAddresses[0]?.emailAddress
          )
        : undefined,
    [user, users]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSignedIn && isLoaded && user && !isUserExists && !loading) {
        saveUserApi(user);
      }
    }, 1000);

    return () => clearTimeout(timer); // clear timeout on cleanup
  }, [isSignedIn, isLoaded, user, isUserExists, loading]);

  return (
    <div>
      <Banner />
      <Slider/>
      <StatsBanner/>
      <FeaturesSection/>
      <StepsSection/>
      <PricingPlans/>
   

      <Ready />
    </div>
  );
};

export default LandingPage;
