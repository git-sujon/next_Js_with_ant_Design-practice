import MainLayout from '@/layout/MainLayout';
import React from 'react';

const About = () => {
    return (
        <div>
            this is about page 
        </div>
    );
};

export default About;
About.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };