import React from 'react'

const ColorPicker = ({colors, onSelect, defaultOption='original'}) => {

    return colors.map((c) => (
        <div className="colorOption" key={c.id}>
            <input className="color"
                onChange= {(event)=>{
                    onSelect(c.value)
                }}
                type='radio'
                name='color'
                checked={defaultOption===c.value}
                id={c.value}
            />
            <p>{c.text}</p>
    </div>
    ))
}

export default ColorPicker
