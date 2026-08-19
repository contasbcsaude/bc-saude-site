import Index from './pages/Index'
import Diagnostico from './pages/Diagnostico'

function App() {
  const path = window.location.pathname
  if (path === '/diagnostico' || path === '/bc-saude-site/diagnostico') {
    return <Diagnostico />
  }
  return <Index />
}

export default App
