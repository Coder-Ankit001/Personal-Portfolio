import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Projects from './components/Projects'

// 1. Create a Layout component to wrap your pages
const RootLayout = () => {
  return (
    <div className='bg-indigo-950 min-h-screen flex flex-col'>
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This is where Content or Projects will render */}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  // 2. Nest your routes inside the RootLayout
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Content />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <div>About Section Coming Soon</div>,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App