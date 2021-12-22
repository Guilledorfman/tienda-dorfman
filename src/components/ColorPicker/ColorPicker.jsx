import React from 'react'

const ColorPicker = ({colors, onSelect, defaultOption='original'}) => {

    return colors.map((c) => (
        <div className="colorOption" key={c.id} >
            <input className="color"
                onChange= {(event)=>{
                    onSelect(c.img)
                }}
                type='radio'
                name='color'
                checked={defaultOption===c.img}
                id={c.value}

            />
            <p>{c.text}</p>
                <img className="foto" src={c.img}/>             
    </div>
    ))
}

export default ColorPicker
