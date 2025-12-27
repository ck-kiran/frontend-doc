import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Frontend Mastery',
    template: '%s – Frontend Mastery'
  },
  description: 'Learn, build, and master frontend engineering with structured documentation.',
  keywords: ['frontend', 'react', 'nextjs', 'javascript', 'typescript', 'documentation'],
  openGraph: {
    title: 'Frontend Mastery',
    description: 'Learn, build, and master frontend engineering with structured documentation.',
    siteName: 'Frontend Mastery',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mastery',
    description: 'Learn, build, and master frontend engineering with structured documentation.'
  }
}

const banner = <Banner storageKey="frontend-mastery-v1">🚀 Welcome to Frontend Mastery - Your complete guide to modern frontend development!</Banner>
const navbar = (
  <Navbar
    logo={<><strong>Frontend Mastery</strong> 📘</>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Frontend Mastery. Built with Nextra.</Footer>

export default async function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}