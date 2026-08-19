function App() {
  const path = window.location.pathname
  if (path.includes('/diagnostico')) {
    return <Diagnostico />
  }
  return <Index />
}

import Index from './pages/Index'
import Diagnostico from './pages/Diagnostico'

export default App
