import NodalWhiteLogo from '../assets/nodal-white.svg'
import { useNavigate } from 'react-router-dom'

export default function Terms() {
  const navigate = useNavigate()
  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-200 px-4 md:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <img src={NodalWhiteLogo} alt="Nodal" className="h-9" />
          <button
            onClick={() => (window.history.length > 1 ? navigate(-1) : (window.location.href = '/'))}
            className="text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-full px-3 py-1.5"
          >
            ← Back to Nodal
          </button>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h1 className="font-heading text-2xl text-white">Terms of Service – Nodal</h1>
          <div className="text-zinc-400 text-sm mt-1">Effective Date: October 14, 2025</div>

          <p className="mt-4">Welcome to Nodal! By using our app, website, or services (“Services”), you agree to these Terms of Service. If you don’t agree, don’t use the app. Simple as that.</p>

          <h2 className="font-heading text-xl text-white mt-6">1. Using Nodal</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>You must be 13+ to use Nodal.</li>
            <li>You’re responsible for your account info, password, and any activity that happens on your account.</li>
            <li>Don’t be a jerk: no illegal stuff, no spamming, no breaking the app.</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">2. Account & Content</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>You own the content you create (boards, nodes, notes).</li>
            <li>You grant Nodal a license to operate the app, store, and display your content while you use the service.</li>
            <li>Don’t post anything illegal, harmful, or infringing someone else’s rights.</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">3. Privacy & Data</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>We collect information as described in our Privacy Policy.</li>
            <li>We may send you emails about your account, updates, or service announcements.</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">4. Termination</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>We can suspend or delete accounts for violations of these Terms.</li>
            <li>You can close your account anytime, but we may retain some data for legal or operational reasons.</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">5. Disclaimer & Limitation of Liability</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Nodal is provided “as is.” We try our best, but we don’t guarantee the app will always work perfectly.</li>
            <li>We are not liable for lost data, downtime, or any indirect damages.</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">6. Changes to Terms</h2>
          <p className="mt-2">We may update these Terms from time to time. We’ll post the changes here and update the effective date.</p>

          <p className="mt-6">Thanks for using Nodal! Play nice, make cool boards, and enjoy your nodes.</p>
        </div>
      </div>
    </section>
  )
}


