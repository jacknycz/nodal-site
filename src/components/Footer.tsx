// src/components/Footer.tsx
"use client"

import { Envelope, XLogo, InstagramLogo } from "@phosphor-icons/react"
import NodalWhiteLogo from "../assets/nodal-white.svg"  

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between">
        {/* Brand blurb */}
        <div>
          <img src={NodalWhiteLogo} alt="Nodal Logo" className="w-16" />
          <p className="mt-2 text-sm text-zinc-500">
            go idea.
          </p>
          <div className="mt-5 flex space-x-4">
            <a href="mailto:hello@nodalapp.com" aria-label="Email" target="_blank" className="hover:text-white"><Envelope size={18} /></a>
            <a href="https://x.com/nodal_app" aria-label="X" target="_blank" className="hover:text-white"><XLogo size={18} /></a>
            <a href="https://www.instagram.com/nodal_app/" aria-label="Instagram" target="_blank" className="hover:text-white"><InstagramLogo size={18} /></a>
            {/* <a href="https://linkedin.com/company/nodalapp" aria-label="LinkedIn" className="hover:text-white"><LinkedinLogo size={18} /></a> */}
            {/* <a href="https://github.com/nodalapp" aria-label="GitHub" className="hover:text-white"><GithubLogo size={18} /></a> */}
          </div>
          <p className="mt-2 text-xs text-zinc-600">
            Made by <a href="https://jacknycz.me" target="_blank" className="hover:text-white">Jack</a>
          </p>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Legal + Support
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Nodal. All rights reserved. <br />
        <span className="text-zinc-700">
          “AI in service of ideas.” ✦ “Smarter tools, not louder ones.”
        </span>
      </div>
    </footer>
  )
}

