import React from 'react'

export default function Filter(props) {

    const onTypeChange = (type) => {
        console.log(type.target.innerHTML);
        props.filterTypeSelected(type.target.innerHTML)
        
    }

  return (
    <div className='filters'>
        <button onClick={onTypeChange}>Plante</button>
        <button onClick={onTypeChange}>Feu</button>
        <button onClick={onTypeChange}>Eau</button>
    </div>
  )
}
