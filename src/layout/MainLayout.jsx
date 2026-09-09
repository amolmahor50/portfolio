import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingScreen from '../components/LoadingScreen';

const MainLayout = () => {
    return (
        <div className="min-h-screen overflow-hidden flex flex-col relative bg-background text-foreground">

            {/* QuirGO Style Signature Ambient Radial Background Glow */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[150px]" />
                <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[140px]" />
            </div>

            <Navbar />

            {/* Wrapped in max-w-6xl mx-auto */}
            <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-12">
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
