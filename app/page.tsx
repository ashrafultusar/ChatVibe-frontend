"use client";
import React, { useEffect, useMemo } from "react";
import Communication from "@/components/landingPage/Section/Communication";

import Banner from "@/components/landingPage/Section/Banner";

import { useUser } from "@clerk/clerk-react";
import saveUserApi from "@/utilities/api-call/saveUserApi";
import Ready from "@/components/landingPage/Section/Ready";

import useGetAllUsers from "@/hooks/apiHooks/userHooks/useGetAllUser";
import TestimonialSection from "@/components/landingPage/Section/TestimonialSection";

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
      <Communication />
<TestimonialSection/>
      <Ready />
    </div>
  );
};

export default LandingPage;
