import NodalWhiteLogo from '../assets/nodal-white.svg'
import { useNavigate } from 'react-router-dom'

export default function Privacy() {
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
          <h1 className="font-heading text-2xl text-white">Privacy Policy – Nodal</h1>
          <div className="text-zinc-400 text-sm mt-1">Effective Date: October 14, 2025</div>

          <p className="mt-4">At Nodal, your privacy is important to us. This Privacy Policy explains what we collect, why, and how we use it.</p>

          <h2 className="font-heading text-xl text-white mt-6">1. Information We Collect</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Account info: email, username, password (if you use email login)</li>
            <li>OAuth info: if you sign in via Google/GitHub, we collect the info they share with us</li>
            <li>Content: boards, nodes, notes</li>
            <li>Usage: how you interact with the app (pages visited, actions taken)</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">2. How We Use Your Info</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>To provide and improve Nodal</li>
            <li>To communicate with you about your account, updates, or support</li>
            <li>To personalize your experience</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">3. Sharing Your Info</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>We don’t sell your info. Ever.</li>
            <li>We may share data with service providers (like Postmark for emails, analytics providers) who help us run the app</li>
            <li>We may disclose info if required by law or to protect rights</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">4. Cookies & Tracking</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>We use cookies and similar tools to make the app work and understand usage</li>
            <li>You can manage cookies via your browser settings</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">5. Security</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>We take reasonable measures to protect your info, but no system is 100% secure</li>
            <li>You are responsible for keeping your password safe</li>
          </ul>

          <h2 className="font-heading text-xl text-white mt-6">6. Changes to This Policy</h2>
          <p className="mt-2">We may update this Privacy Policy. The “Effective Date” will show when it was last updated.</p>

          <p className="mt-6">Enjoy Nodal, and keep your nodes happy!</p>
        </div>
      </div>
    </section>
  )
}


