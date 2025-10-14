"use client"
import React, { useEffect, useRef, useState } from 'react';
import {
	AboutMeSection,
	BlogSection,
	HeroSection,
	RecentProjectSection,
	TechnicalExpertiseSection,
	WorkExpSection,
	WorkTogetherSection
} from '@/components';


// ------------------------------------

const Home = () => {
	return (
		<div>
			<HeroSection />
			<AboutMeSection />
			<TechnicalExpertiseSection />
			<RecentProjectSection />
			<WorkExpSection />
			<BlogSection />
			<WorkTogetherSection />
		</div>
	)
}

export default Home
