import { useState, useEffect } from "react";
export default function Dice(props) {
  const [Image, setImage] = useState('../src/components/images/1.png');
  useEffect(() => { changeDice() }, [props.randomnumber]);
  function changeDice() {
    switch (props.randomnumber) {
      case 1:
        setImage("../src/components/images/1.png");
        break;
      case 2:
        setImage("../src/components/images/2.png");
        break;
      case 3:
        setImage("../src/components/images/3.png");
        break;
      case 4:
        setImage("../src/components/images/4.png");
        break;
      case 5:
        setImage("../src/components/images/5.png");
        break;
      case 6:
        setImage("../src/components/images/6.png");
        break;
    }
  };
  return (
    <div className="image">
      <img src={Image} alt="" />
    </div>
  );
};