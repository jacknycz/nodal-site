import Hero from '../components/Hero'
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
      <FeatureTabsSection />
      {/* <MeetTheNodes isDark={isDark} /> */}
      <MeetNobot />
      <ProLanding />
      <FinalCTASection isDark={isDark} />
    </>
  )
}


