import React, {useState} from 'react'
import "../App.css"
import data from "../data"
import Question from './Question'

export const LoginQuestion = () => {
  const [infos, setInfos] = useState(data)
  return (
    <div>
         <main>
      <div className='containerQuestion'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {
            infos.map(info => (
              <Question key={info.id} {...info} />
            ))
          }
        </section>
      </div>
    </main>
    </div>
  )
}
