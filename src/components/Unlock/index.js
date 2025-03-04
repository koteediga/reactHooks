import {useState} from 'react'
import {Paragraph} from './styledComponents'

const Unlock = () => {
  const [imageUrl, setterImage] = useState(
    'https://assets.ccbp.in/frontend/hooks/lock-img.png',
  )
  const [active, setterlock] = useState(false)

  const [text, setterButton] = useState('Unlock')

  const [imageAlt, setterAlt] = useState('lock')

  const [para,setterPara]=useState("Locked");

  const onChange = () => {
    if (!active) {
      setterImage('https://assets.ccbp.in/frontend/hooks/unlock-img.png')
      setterButton('Lock')
      setterAlt('unlock')
      setterlock(true)
setterPara("Unlocked")  
    } else {
      setterImage('https://assets.ccbp.in/frontend/hooks/lock-img.png')
      setterButton('Unlock')
      setterAlt('lock')
      setterlock(false)
      setterPara("Locked")  
    }
  }
  return (
    <div>
      <img src={imageUrl} alt={imageAlt} />
      <Paragraph>Your Device is {para}</Paragraph>
      <button type="button" onClick={onChange}>
        {text}
      </button>
    </div>
  )
}

export default Unlock
