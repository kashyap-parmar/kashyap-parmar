import {
	AboutMeSection,
	HeroSection,
	RecentProjectSection,
	TechnicalExpertiseSection,
	WorkExpSection,
	WorkTogetherSection
} from '@/components';


// ------------------------------------

const Home = () => {
	return (
		<div className='w-full flex flex-col gap-28' >
			<HeroSection />
			<AboutMeSection />
			<TechnicalExpertiseSection />
			<RecentProjectSection />
			<WorkExpSection />
			<WorkTogetherSection />
		</div>
	)
}

export default Home
