import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { SearchProvider } from './Contexts/SearchContext/SearchContext.jsx'
import ThemeProvider from './Contexts/ThemeContext/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <ThemeProvider>
        <div className='bg-white dark:bg-[#0b1221]'>
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </SearchProvider>
  </React.StrictMode>,
)
