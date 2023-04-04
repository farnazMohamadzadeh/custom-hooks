import React, { Children, useState } from 'react'
import ToggleHoc from './HOCs/ToggleHoc'

function Question({ id, info, title, showInfo, toggleShowInfoHandler }) {
  return (
    <article className='question' onClick={toggleShowInfoHandler}>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo ? "-" : "+"}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default ToggleHoc(Question)