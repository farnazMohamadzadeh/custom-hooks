import React, {useState} from 'react'

export default function ToggleHoc(OriginalComponent) {
 const NewComponent = (props) =>{
    const [showInfo, setShowInfo] = useState(false)

    const toggleShowInfoHandler = () => {
      setShowInfo(prevShowInfo => !prevShowInfo)
    }
return <OriginalComponent showInfo={showInfo} toggleShowInfoHandler={toggleShowInfoHandler} {...props} />
 }
 return NewComponent
}

 