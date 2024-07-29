'use client'

import DiceAd from "@/components/DiceAd";
import Ads from "@/components/Ads";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Classes from "@/components/Classes";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, { withCredentials: true });
        console.log(response);
        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    checkUserLoggedIn();
    fetchEvents();
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/kelas');
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Hero user={user}/>
      <div className="bg-basicBlack-10 px-[min(10%,512px)]">
        <Classes events={events} />
      </div>
      <Information />
      <Ads />
      <DiceAd />
    </>
  );
}
