import AddHotelForm from './components/AddHotelForm'
import Hotels from './components/Hotels'
import HotelByName from './components/HotelByName'

export default function App() {
  return (
    <>
      <AddHotelForm />
      <Hotels />
      <HotelByName name="Sunset Resort" />
    </>
  )
}