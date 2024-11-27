import {useState} from 'react';

const RangeSlider = ({onChange}) => {

    const [slider, setSlider] = useState({
        max: 2024, 
        min: 1900, 
        value: 0, 
        label: ''
    });

    const onSlide = () => {
        onChange(slider.value);
    } 

    return (
        <div className="range-slider">
            <p>{slider.label}</p>
            <input type="range" min={slider.min} max={slider.max} value={slider.value} 
             onChange={() => onSlide()} className="slider" id="myRange"></input>
        </div>
    );
}
export default RangeSlider;