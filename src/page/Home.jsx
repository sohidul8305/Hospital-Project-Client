import React from 'react';
import HeroSection from '../components/HeroSection';
import Ourservice from '../components/Ourservice';
import EmergencyContact from '../components/EmergencyContact';
import FeaturedDoctors from '../components/FeaturedDoctors';
import DepartmentsSection from '../components/DepartmentsSection';
import StatisticsSection from '../components/StatisticsSection';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import AppDownload from '../components/AppDownload';
import HealthTipsSection from '../components/HealthTipsSection';
import LiveChat from '../components/LiveChat';
import UpcomingHealthCamp from '../components/UpcomingHealthCamp';
import MedicineReminder from '../components/MedicineReminder';
import LatestNews from '../components/LatestNews';
import QuickActions from '../components/QuickActions';
import HealthTracker from '../components/HealthTracker';

const Home = () => {
    return (
        <div>
         <HeroSection></HeroSection>
         <Ourservice></Ourservice>
         <EmergencyContact></EmergencyContact>
         <FeaturedDoctors></FeaturedDoctors>
         <DepartmentsSection></DepartmentsSection>
         <StatisticsSection></StatisticsSection>
         <HowItWorks></HowItWorks>
         <TestimonialsSection></TestimonialsSection>
         <CTASection></CTASection>
        <AppDownload></AppDownload>
        <HealthTipsSection></HealthTipsSection>
        <LiveChat></LiveChat>
        <UpcomingHealthCamp></UpcomingHealthCamp>
        <MedicineReminder></MedicineReminder>
        <LatestNews></LatestNews>
        <QuickActions></QuickActions>
        <HealthTracker></HealthTracker>
        </div>
    );
};

export default Home;