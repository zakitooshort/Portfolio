import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Goals from './Goals.jsx'
import Ideas from './Ideas.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  errorElement: <h1> 404 not found my g</h1>,
  },
  {
    path:'/About',
    element:<About/>,
  },
  {
    path:'/Projects',
    element:<Projects/>,
  },
  {
    path:'/Ideas',
    element:<Ideas/>,
  },
  {
    path:'/Skills',
    element:<Skills/>,
  },
  {
    path:'/Goals',
    element:<Goals/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
