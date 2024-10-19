import {Loader, Welcome, Navbar, Services, Transactions, Footer} from './components/Index';
const App = () => {
  return (
    <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
  )
}

export default App
