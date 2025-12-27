import { FC } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Frontend Mastery - Learn Modern Frontend Development',
  description: 'Master frontend engineering with comprehensive guides on React, Next.js, TypeScript, and more.'
}

const Feature: FC<{ title: string; description: string; href?: string }> = ({ title, description, href }) => {
  const content = (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}

const HomePage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Frontend Mastery
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Learn, build, and master frontend engineering with comprehensive documentation and practical guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/docs"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            📚 Start Learning
          </Link>
          <Link
            href="/docs/getting-started"
            className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            🚀 Quick Start
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          What You&apos;ll Master
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            title="🌟 JavaScript Fundamentals"
            description="Master ES6+, async programming, and modern JavaScript patterns essential for frontend development."
            href="/docs/javascript"
          />
          <Feature
            title="⚛️ React & Hooks"
            description="Build interactive UIs with React, master hooks, state management, and component patterns."
            href="/docs/react"
          />
          <Feature
            title="🚀 Next.js & App Router"
            description="Create full-stack applications with Next.js 13+ App Router, SSR, and modern routing."
            href="/docs/nextjs"
          />
          <Feature
            title="🎨 Modern CSS & Styling"
            description="Learn CSS-in-JS, Tailwind CSS, responsive design, and modern styling techniques."
            href="/docs/css"
          />
          <Feature
            title="📱 TypeScript Integration"
            description="Add type safety to your applications with TypeScript best practices and patterns."
            href="/docs/typescript"
          />
          <Feature
            title="⚡ Performance & Optimization"
            description="Optimize bundle size, implement lazy loading, and master web performance metrics."
            href="/docs/performance"
          />
          <Feature
            title="🧪 Testing Strategies"
            description="Write reliable tests with Jest, React Testing Library, and end-to-end testing."
            href="/docs/testing"
          />
          <Feature
            title="🏗️ System Design"
            description="Architect scalable frontend systems, state management, and application structure."
            href="/docs/architecture"
          />
          <Feature
            title="🔧 DevOps & Deployment"
            description="Deploy applications with CI/CD, Docker, and modern hosting platforms."
            href="/docs/deployment"
          />
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          📈 Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Foundations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">JavaScript, HTML, CSS basics</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">React Mastery</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Components, hooks, state management</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Full-Stack</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, APIs, databases</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Production</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Testing, optimization, deployment</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of developers who have mastered frontend engineering with our structured approach.
        </p>
        <Link
          href="/docs/getting-started"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-all transform hover:scale-105 text-lg"
        >
          🎯 Begin Your Journey
        </Link>
      </div>
    </div>
  )
}

export default HomePage