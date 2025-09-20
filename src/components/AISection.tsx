import { Brain, Users, FileText, Target, Cloud, Share } from '@phosphor-icons/react'
import nobotLeft from '../assets/nobot-left.svg'

export default function AISection() {
  return (
    <section className="py-48 px-4 md:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex items-start justify-between space-x-16">
        <div className="mb-16 flex flex-col items-start justify-start">
          <h2 className="text-3xl md:text-4xl font-medium font-heading text-zinc-900 dark:text-white mb-4">
            meet nobot! and look how well we hid this AI stuff
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            of course nodal does do cool AI stuff but everybody's doing that so we didn't wanna talk about it but our investor said we should so here it is. also this is "seriously" here's your assistant he's a robot named Nobot.
          </p>
        </div>

        <img src={nobotLeft} alt="Nobot" className="h-full object-cover w-24" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI-Powered Ideation */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium font-heading text-zinc-900 dark:text-white mb-2">ai-powered brainstorming</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Generate ideas, expand thoughts, and get context-aware suggestions. Your AI creative partner that understands your thinking process.
            </p>
          </div>

          {/* Real-time Collaboration */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium font-heading text-zinc-900 dark:text-white mb-2">real-time collaboration</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Work together seamlessly with live cursors, presence indicators, and smart conflict prevention. See who's thinking what, when.
            </p>
          </div>

          {/* Rich Content */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="w-12 h-12 bg-tertiary-500 rounded-lg flex items-center justify-center mb-4">
              <FileText className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium font-heading text-zinc-900 dark:text-white mb-2">rich text & media</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Full WYSIWYG editing with document uploads, PDF previews, and rich formatting. Every node can hold detailed content.
            </p>
          </div>

          {/* Focus & Organization */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium font-heading text-zinc-900 dark:text-white mb-2">focus tree & navigation</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Hierarchical organization with focus modes. Zoom into specific areas or see the big picture with intelligent navigation.
            </p>
          </div>

          {/* Cloud-First */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium font-heading text-zinc-900 dark:text-white mb-2">cloud-first storage</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Automatic saves, thumbnail previews, and seamless sync across devices. Your boards are always available, everywhere.
            </p>
          </div>

          {/* Board Sharing */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="w-12 h-12 bg-tertiary-500 rounded-lg flex items-center justify-center mb-4">
              <Share className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium font-heading text-zinc-900 dark:text-white mb-2">easy board sharing</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Invite collaborators via email, manage permissions, and track who's active. Share ideas as easily as sending a link.
            </p>
          </div>
        </div>

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


