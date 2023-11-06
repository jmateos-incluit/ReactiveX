import { useState } from 'react'
import { useEffect } from 'react'
import { sharingInformationServices } from '../services/sharing-information.service'

function Component1() {
  const [count, setCount] = useState(0)
  const subscription$ = sharingInformationServices.getSubject()

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data) setCount(count + 1)
    })
  })

  return (
    <>
      <div> {count} </div>
    </>
  )
}

export default Component1
