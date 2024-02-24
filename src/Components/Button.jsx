import './Button.css';

function Img({value,bgColor,clr}) {
  return (
    <button style={{background:bgColor, color: clr}}>{value}</button>
  );
}

export default Img;