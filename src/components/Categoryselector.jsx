import React, { useState } from 'react'

const Quizselector = () => {
  const [category, setCategory] = useState('')

  return (
    <div>
      <select
        value={category}
        onChange={(select) => {
          const selectedCategory = select.target.value
          setCategory(selectedCategory)
        }}
      >
        <option value="">--please choose a category--</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="art">Art</option>
        <option value="computers">Computers</option>
        <option value="nature">Nature</option>
      </select>
    </div>
  )
}

export default Quizselector