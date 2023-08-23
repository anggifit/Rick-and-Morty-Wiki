import React from 'react'

const InputGroup = ({name, changeID, total}) => {
  return (
    <div className='input-group mb-3'>
        <select
            id={name}
            className='form-select'
            onChange={event => changeID(event.target.value)}
        >
            <option value="1">Choose...</option>
            {[...Array(total).keys()].map((item, index) => {
                return (
                    <option value={item + 1}>
                        {name} - {item + 1}
                    </option>
                )
            })}
        </select>
    </div>
  )
}

export default InputGroup
