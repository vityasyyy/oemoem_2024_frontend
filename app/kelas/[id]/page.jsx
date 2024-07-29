'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarKelas from "@/components/NavbarKelas";
import Loading from '@/components/Loading';
import ClassDetail from "@/components/ClassDetail";

export default function EventPage() {
    const params = useParams();
    const id = params.id;
    const [event, setEvent] = useState(null);
    const[user, setUser] = useState(null)
    useEffect(() => {
        if (id) {
            fetchEvent();
            fetchUser();
        }
    }, [id]);

    const fetchEvent = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);
            setEvent(response.data);
        } catch (error) {
            console.error('Error fetching event:', error);
        }
    };

    const fetchUser = async() => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
            if(response.data.user) setUser(response.data.user)
        } catch(error) {
            console.error('error fetching user', error)
        }
    }

    if (!event) return <Loading/>;

    return (
        <>
            <NavbarKelas />
            <ClassDetail event={event} user={user} />
        </>
    );
}
