"use client";

// $ Remember "so fun, so good!"

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/user-profile";
import { useState } from "react";
// import { ExampleContext } from "@/contexts/example-provider";
// import { getCurrentUser, signOut, type User } from "@/lib/auth";
// import { use, useEffect, useState } from "react";

export default function Home() {
  // TODO: use is a hook that allows you to access the context value
  // const message = use(ExampleContext) 

  // TODO: We move the fc, usestate & useeffect inside our Context
  //const [user, setUser] = useState<User | null>(null);
  //const [userLoading, setUserLoading] = useState(true);


  // async function handleSignOut() {
  //   await signOut();
  //   setUser(null);
  // }

  // useEffect(() => {
  //   async function fetchUser() {
  //     const userData = await getCurrentUser();
  //     setUser(userData);
  //     setUserLoading(false);
  //   }

  //   fetchUser();
  // }, []);

  const [isProfileDisabled, setIsProfileDisabled] = useState(false);

  return (
    <div>
      {/* Without Context */}
      {/* <Navbar user={user} isLoading={userLoading} onSignOut={handleSignOut} /> */}
      <Navbar />

      <main className="container mx-auto p-6">
        {/* With Context */}
        {/* <p className="mb-6 text-center text-lg font-medium">{message}</p> */}

        {/* Without Context */}
        {/* <UserProfile user={user} isLoading={userLoading} /> */}
        <div className="mb-6 flex justify-center">
          <Button onClick={() => setIsProfileDisabled(!isProfileDisabled)} variant='outline'>
            {isProfileDisabled ? "Enable User Profile" : "Disable User Profile"}
          </Button>
        </div>
        <UserProfile disabled={isProfileDisabled} />
      </main>
      <Footer />
    </div>
  );
}
