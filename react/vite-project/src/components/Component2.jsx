import { sharingInformationServices } from '../services/sharing-information.service'

function Component2() {
  const handleClick = () => {
    sharingInformationServices.setSubject(true)
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar Info</button>
    </div>
  )
}

export default Component2
