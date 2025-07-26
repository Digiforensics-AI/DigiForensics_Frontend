import React from 'react'

function TitleDescription({title, description}) {
  return (
    <section id="title-description">
        <h1 className='text-center'>{title}</h1>
<p className='text-center'>{description}</p>

    
    </section>
  )
}

export default TitleDescription