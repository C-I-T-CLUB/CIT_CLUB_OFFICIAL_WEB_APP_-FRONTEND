import '../assets/css/Range.css'
export const Range = ({ min = 0, max = 10 ,name , value , onChange, onBlur ,label}) => {
  return (
    <div className="length range__slider" data-min={min} data-max={max}>
      <div className="length__title field-title" data-length="0">
        {label}: {value}
      </div>
      <input id="slider" type="range" min={min} max={max} value={value}  name={name} onChange={onChange} onBlur={onBlur}/>
    </div>
  );
};
