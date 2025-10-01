import { Brain, Users, FileText, Target, Cloud, Share } from '@phosphor-icons/react'
import nobotLeft from '../assets/nobot-left.svg'

export default function AISection() {
  return (
    <section className="py-24 md:py-48 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex items-start justify-between space-x-16">
        <div className="mb-16 flex flex-col items-start justify-start space-y-4">
          <div className="flex w-full space-x-6 md:space-x-8 justify-between items-end">
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-zinc-900 dark:text-white">
              meet nobot! and look how well we hid this AI stuff
            </h2>

            <img src={nobotLeft} alt="Nobot" className="h-full object-cover w-16 md:w-24" />
          </div>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
          yes, nodal does cool AI stuff, but everyone’s doing that. we weren’t even going to bring it up but our investor said we should.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-blue-600 text-white p-8 rounded-2xl flex flex-col items-center justify-center">
            <h3 className="text-2xl font-medium font-heading mb-4">you're too smart for a catchy CTA!</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl">
              just give it a try, it's free - and hit that feedback button if you do try it. it's beta - seriously looking for thoughts and where it's screwing up. thanks!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-primary-600 font-medium font-heading px-8 py-3 rounded-lg hover:bg-zinc-50 transition-colors duration-200"
              >
                Start Free Today
              </a>
              <a
                href="#"
                className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                See Pro Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


