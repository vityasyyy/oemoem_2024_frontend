'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Mentor from './Mentor';
import ProgressBar from "@/components/ProgressBar";
import KelasButton from "@/components/KelasButton";
import ChallengesButton from "@/components/ChallengesButton";
import axios from 'axios'; // Import axios for making API requests
import { useRouter } from 'next/navigation';

const ClassDetail = ({ event, user }) => {
    const [activeView, setActiveView] = useState('kelas');
    const [submissionLink, setSubmissionLink] = useState('');
    const [submissionComment, setSubmissionComment] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [enrollmentError, setEnrollmentError] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [assignmentId, setAssignmentId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const router = useRouter();

    // Memoized checkExistingSubmission to avoid unnecessary re-renders
    const checkExistingSubmission = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}/submission`, { withCredentials: true, headers: {'Content-Type': 'application/json'} });
            if (response.data.assignment) {
                setHasSubmitted(true);
                setAssignmentId(response.data.assignment._id);
                setSubmissionLink(response.data.assignment.assignmentLink);
                setSubmissionComment(response.data.assignment.assignmentComment);
            }
        } catch (error) {
            console.error('Error checking existing submission:', error);
        }
    }, [event._id]);

    useEffect(() => {
        if (user && event) {
            const enrolled = event.enrolledBy.some(enrolledUser =>
                enrolledUser._id.toString() === user._id.toString()
            );
            setIsEnrolled(enrolled);
            checkExistingSubmission();
        }
    }, [user, event, checkExistingSubmission]);

    const handleEnroll = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}/enroll`, {}, {
                withCredentials: true, headers: {'Content-Type': 'application/json'}
            });
            if (response.status === 200) {
                setIsEnrolled(true);
                setEnrollmentError(null);
            }
        } catch (error) {
            setEnrollmentError(error.response?.data?.error || 'An error occurred during enrollment');
            router.push('/auth/masuk');
        }
    };

    const handleSubmission = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (hasSubmitted) {
                response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/event/${assignmentId}/update`, {
                    assignmentLink: submissionLink,
                    assignmentComment: submissionComment
                }, { withCredentials: true, headers: {'Content-Type': 'application/json'} });
            } else {
                response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/event/${event._id}/submit`, {
                    assignmentLink: submissionLink,
                    assignmentComment: submissionComment
                }, { withCredentials: true, headers: {'Content-Type': 'application/json'}});
            }

            if (response.status === 200) {
                setSubmissionMessage(hasSubmitted ? 'Assignment updated successfully!' : 'Assignment submitted successfully!');
                setHasSubmitted(true);
                if (!hasSubmitted) {
                    setAssignmentId(response.data.assignment._id);
                }
            } else {
                setSubmissionMessage(hasSubmitted ? 'Update failed. Please try again.' : 'Submission failed. Please try again.');
            }
        } catch (error) {
            setSubmissionMessage(error.response?.data?.error || 'An error occurred. Please try again.');
        }
    };

    const isChallengeOpen = () => {
        if (!event.openAssignment) return false;
        const challengeOpenDate = new Date(event.openAssignment);
        const currentDate = new Date();
        return currentDate >= challengeOpenDate;
    };

    const handleEnrollClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmEnroll = () => {
        handleEnroll();
        setShowConfirmation(false);
    };

    const handleCancelEnroll = () => {
        setShowConfirmation(false);
    };
    return (
        <section className="bg-basicLightGreen-10 pt-24 pb-6 relative">
            {/* 4 Cards Background Image */}
            <Image
                src="4cards.svg"
                width={300}
                height={300}
                className='absolute top-[5rem] w-64 right-0 sm:w-fit sm:right-[min(10%,512px)]'
            />
            {/* Bagian Hijau Atas */}
            <div className="px-[min(10%,512px)]">
                <div className="bg-basicBlack-10 max-w-xs flex p-3 rounded-lg z-10 relative">
                    <Image
                        src={event.image ? event.image.url : "/default-image.svg"}
                        alt={event.title}
                        width={54}
                        height={32}
                        className="mr-3"
                    />
                    <div className="text-white flex-grow">
                        <h1 className="font-semibold text-xl mb-2">
                            {event.title}
                        </h1>
                        <ProgressBar enrolledBy={event.enrolledBy} slots={event.slots} />
                    </div>
                </div>

                {/* Button Kelas dan Challenges */}
                <div className="flex gap-2 mt-6 z-10 relative">
                    <KelasButton 
                        onClick={() => setActiveView('kelas')} 
                        isActive={activeView === 'kelas'}
                    />
                    <ChallengesButton 
                        onClick={() => setActiveView('challenges')} 
                        isActive={activeView === 'challenges'}
                    />
                </div>
            </div>
            
            {/* Main */}
            <div className="h-fit bg-basicBlack-10 mt-5 pt-8 pb-24 z-50 px-[min(10%,512px)] text-lg relative flex flex-col gap-10">
                {activeView === 'kelas' ? (
                    <>
                        {/* Kelas */}
                        {/* Overview */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 text-lg rounded-md">
                                Overview
                            </div>
                            <p>{event.description}</p>
                        </div>

                        {/* Tanggal dan Lokasi */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 text-lg rounded-md">
                                Tanggal dan lokasi
                            </div>
                            <p>{new Date(event.displayDate).toLocaleDateString()}</p>
                            <Link href="https://maps.app.goo.gl/dAQo2nnGwqP2vTaa9">
                                <p className="text-[#EDB465]">Departemen Ilmu Komputer dan Elektronika UGM</p>
                            </Link>
                        </div>

                        {/* Kebutuhan */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Kebutuhan
                            </div>
                            <p>{event.prerequisite}</p>
                        </div>
                        
                        {/* Kurikulum */}
                        <div className="flex flex-col gap-2 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Kurikulum
                            </div>
                            <p>{event.curriculum}</p>
                        </div>

                        {/* Mentor */}
                        <div className="flex flex-col gap-5 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Mentor
                            </div>
                            {/* Belom fetching nama component nya */}
                            <Mentor event={event}/>
                        </div>

                        {/* Contact Person */}
                        <div className="flex flex-col gap-2 z-30 text-white">
                            <div className="bg-basicBlue-10 w-fit min-w-44 px-4 py-2 rounded-md">
                                Contact Person & Group Chat
                            </div>
                            <Link href={event.contactPerson.linkCP}>
                                <p className='text-[#EDB465]'>{event.contactPerson.namaCP}</p>
                            </Link>
                            <Link href={event.groupChat}>
                                <p className='text-[#EDB465]'>Group Chat Kelas</p>
                            </Link>
                        </div>
                        {/* ENROLL BUTTON */}
                        {!user ? (
                            <div className='flex justify-center items-center z-30'>
                                <Link href="/auth/masuk" className="text-xl w-full max-w-screen-sm z-10 flex justify-center">
                                    <button 
                                        className="text-xl w-full max-w-screen-sm py-2 bg-basicRed-10 text-white border-2 border-basicDarkBrown-10 rounded-xl sm:text-2xl cursor-pointer hover:bg-red-900 transition-all"
                                    >
                                        Masuk/Daftar
                                    </button>
                                </Link>
                            </div>
                        ) : !isEnrolled ? (
                            <div className='flex justify-center items-center z-30'>
                                {new Date() < new Date(event.date) ? (
                                    <div className='text-xl sm:text-2xl text-white font-medium'>
                                        Enrollment opens on {new Date(event.date).toLocaleDateString()}
                                    </div>
                                ) : new Date() > new Date(event.dateClose) ? (
                                    <div className='text-xl sm:text-2xl text-white font-medium'>
                                        Enrollment for this class has closed
                                    </div>
                                ) : event.slots > 0 ? (
                                    <button 
                                        onClick={handleEnrollClick}
                                        className="text-xl w-full max-w-screen-sm py-2 bg-basicRed-10 text-white border-2 border-basicDarkBrown-10 rounded-xl sm:text-2xl cursor-pointer hover:bg-red-900 transition-all"
                                    >
                                        Enroll
                                    </button>
                                ) : (
                                    <h1 className='text-xl sm:text-2xl text-white font-medium'>Yah, kelas telah penuh</h1>
                                )}
                            </div>
                        ) : (
                            <div className="text-white bg-green-500 py-2 px-4 z-30 relative rounded-md">
                                Anda sudah terdaftar dalam kelas ini
                            </div>
                        )}


                {/* Confirmation Popup */}
                {showConfirmation && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 max-w-[90%] rounded-lg shadow-xl">
                            <h2 className="text-xl font-bold mb-4">Confirm Enrollment</h2>
                            <p className="mb-6">Apakah anda yakin akan enroll ke dalam kelas ini? Kami mohon komitmen dan tanggung jawab anda</p>
                            <div className="flex justify-end space-x-4">
                                <button 
                                    onClick={handleCancelEnroll}
                                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleConfirmEnroll}
                                    className="px-4 py-2 bg-basicRed-10 text-white rounded hover:bg-red-700"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                        {/* Gradient Black to White */}
                        <div className='w-full bg-gradient-to-t from-white to-basicBlack-10 absolute h-64 bottom-0 left-0 right-0 z-0 opacity-50'></div>
                    </>

                ) : (
                    <>
                        {isChallengeOpen() && isEnrolled ? (
                            <>
                                {/* Challenges Section */}
                
                                {/* Overview */}
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md">
                                        Overview
                                    </div>
                                    <p className='text-wrap'>{event.assignmentDetail}</p>
                                </div>
                
                                {/* Tenggat Pengumpulan */}
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md">
                                        Tenggat Pengumpulan
                                    </div>
                                    <p>{new Date(event.deadline).toLocaleDateString()}</p>
                                </div>
                
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md">
                                        Detail tugas
                                    </div>
                                    <Link href={event.assets}>
                                        <p className='text-[#EDB465]'>Klik di sini untuk melihat detail penugasan</p>
                                    </Link>
                                </div>
                
                                {/* Pengumpulan */}
                                <div className="flex flex-col gap-4 text-black">
                                    <div className="bg-basicBlue-10 text-lg w-fit min-w-44 px-4 py-2 rounded-md text-white">
                                        Pengumpulan
                                    </div>
                                    {new Date() > new Date(event.deadline) ? (
                                        <p className="text-white mt-2 text-xs sm:text-sm">
                                            Tugas sudah melewati deadline
                                        </p>
                                    ) : (
                                        <form onSubmit={handleSubmission} className="flex flex-col gap-2">
                                            <input 
                                                type="text"
                                                value={submissionLink}
                                                onChange={(e) => setSubmissionLink(e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 text-sm sm:text-base rounded-lg focus:text-basicBlack-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="cth: link github, link web, dll"
                                            />
                                            <textarea
                                                value={submissionComment}
                                                onChange={(e) => setSubmissionComment(e.target.value)}
                                                className="w-full px-3 py-2 border text-sm sm:text-base border-gray-300 rounded-lg focus:text-basicBlack-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Add a comment"
                                            />
                                            <p className="text-white mt-2 text-xs sm:text-sm">
                                                Tugas dikumpulkan dalam bentuk link sesuai dengan arahan mentor pada hari pembelajaran
                                            </p>
                                            <button 
                                                type="submit"
                                                className="w-full px-4 py-2 mt-2 bg-basicRed-10 text-white border-2 border-basicDarkBrown-10 rounded-md sm:text-lg focus:outline-none focus:ring-2 focus:ring-white cursor-pointer hover:bg-red-900 transition-all"
                                            >
                                                {hasSubmitted ? 'Update' : 'Submit'}
                                            </button>
                                        </form>
                                    )}
                                    {submissionMessage && <p className="text-white mt-2">{submissionMessage}</p>}
                                </div>

                            </>
                        ) : (
                            // Display message when challenge is not open
                            <div className="flex flex-col items-center justify-center text-white h-full">
                                <p className="text-2xl font-bold mb-4">{isEnrolled ? 'Penugasan belum dibuka' : 'Enroll untuk melihat penugasan'}</p>
                                {!isEnrolled && <p className='text-lg'>Silakan enroll untuk mengakses penugasan</p>}
                                {isChallengeOpen() && !isEnrolled && <p className='text-lg'>Penugasan akan dibuka pada: {new Date(event.openAssignment).toLocaleString}</p>}
                            </div>
                        )}
                    </>
                )}

            </div>
        </section>
    );
};

export default ClassDetail;
