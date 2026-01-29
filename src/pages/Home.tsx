import HeroV2 from '../components/HeroV2'
import FeatureTabsSection from '../components/FeatureTabsSection'
import StoryMode from '../components/StoryMode'
import ProLanding from '../components/ProLanding'
import FinalCTASection from '../components/FinalCTASection'
import MeetNobot from '../components/MeetNobot'

interface HomeProps {
  isDark: boolean
}

export default function Home({ isDark }: HomeProps) {
  return (
    <>
      <HeroV2 isDark={isDark} />
      <FeatureTabsSection />
      {/* <MeetTheNodes isDark={isDark} /> */}
      <StoryMode />
      <MeetNobot />
      <ProLanding />
      <FinalCTASection isDark={isDark} />
    </>
  )
}


