import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import ProudlySA from '../components/proudlysa';
import storyStyles from './story.module.scss';

const Story = () => {
	return (
		<Layout>
			<SEO title='Story page' />
			<h1 className='all-caps'>Our Story</h1>
			<div className={storyStyles.container}>
				<div className={storyStyles.storyHead}>
					<h2 className='all-caps'>We have crafted an exclusive gin that encapsulates the essence of Africa</h2>
				</div>
				<div className={storyStyles.storyIntro}>
					<p>My name is Les Ansley and, together with my wife Paula, have jumped into the world of gin.</p>
					<p>We recently moved the family back to South Africa after spending 15 years in the UK.
					We felt <strong>South Africa offered opportunities</strong> both in terms of enterprise and also being able to contribute
					to society.</p>
				</div>
				<div className={`${storyStyles.image} ${storyStyles.storyBioPic}`}>
					<Image filename='les-and-paula.jpg' alt='Les and Paula' />
				</div>
				<div className={`${storyStyles.image} ${storyStyles.storyElliePic}`}>
					<Image filename='elephant-foraging.jpg' alt='Foraging elephant'/>
				</div>
				<div className={storyStyles.storyStory}>
					<p>Shortly after we arrived Paula had an opportunity to go to Kenya on safari and it was while she was 
					<strong> sipping a G&T</strong> while watching a herd of elephants listening to the guide explain how particular elephants
					are in their browsing habits and yet how little of the plant material they actually digest that she had
					this crazy idea …</p>
				</div>
				<div className={storyStyles.storyQuestion}>
					… would it be possible to make <strong>elephant dung gin</strong>?
				</div>
				<div className={`${storyStyles.image} ${storyStyles.storyGinPic}`}>
					<Image filename='indlovu-with-glass.jpg' alt='Indlovu gin presentation box and bottle' />
				</div>
				<div className={storyStyles.storySummary}>
					<h2 className='all-caps'>So we did.</h2>
					<p>That is how Indlovu gin was born – a gin <strong>made in Africa … designed by elephants</strong>. ‘Indlovu’ is the word
					for elephant in several African languages and we use the foraging habits of the world’s largest land
					animals to select the botanicals used in the ginning process.</p>
				</div>
				<div className={storyStyles.storyProudlysa}>
					<ProudlySA />
				</div>
			</div>
		</Layout>
	)
}

export default Story
