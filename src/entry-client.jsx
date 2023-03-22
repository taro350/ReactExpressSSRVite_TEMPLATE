import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

// mounts the APP module to DOM
ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
console.log('hydrated')
