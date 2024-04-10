import './App.css'
import Booking from './components/shared/Booking'
import Header from './components/shared/Header'
import Table from './components/ui/Table'
import { SnackbarProvider } from 'notistack'

function App() {

  return (
    <>
      <SnackbarProvider />
      <div className='bg-[url(../src/assets/dog.webp)] bg-cover bg-no-repeat bg-center'>
        <Header />
        <section className='md:h-[50rem]'>
          <Booking />
          <Table />
        </section>
      </div>
    </>
  )
}

export default App
