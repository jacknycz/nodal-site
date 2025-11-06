import Hero from '../components/Hero'
import MeetTheNodes from '../components/MeetTheNodes'
import FeatureTabsSection from '../components/FeatureTabsSection'
import ProLanding from '../components/ProLanding'
import FinalCTASection from '../components/FinalCTASection'
import MeetNobot from '../components/MeetNobot'

interface HomeProps {
  isDark: boolean
}

export default function Home({ isDark }: HomeProps) {
  return (
    <>
      <Hero isDark={isDark} />
      {/* <WelcomeToTheBoard isDark={isDark} /> */}
      <MeetTheNodes isDark={isDark} />
      <FeatureTabsSection />
      <MeetNobot />
      <ProLanding />
      <FinalCTASection isDark={isDark} />
    </>
  )
}


