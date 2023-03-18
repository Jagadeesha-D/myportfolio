import "./SkillRotate.css";
import React, { useState, useRef, useEffect } from "react";

const Icons = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      top: "20%",
      left: "50%",
      src: "D:/workplace/portfolio/portfolio/src/Pages/iPhone 14 Pro Max.svg"
    },{ id: 3, top: "80%", left: "50%" },
    { id: 4, top: "50%", left: "20%" },
    { id: 5, top: "50%", left: "50%" },
    { id: 6, top: "20%", left: "20%" },
    { id: 7, top: "80%", left: "80%" },
    { id: 8, top: "20%", left: "80%" },
    { id: 9, top: "80%", left: "20%" },
    { id: 10, top: "35%", left: "40%" },
    { id: 11, top: "45%", left: "70%" },
    { id: 12, top: "95%", left: "60%" },
  ]);

  const iconRefs = useRef([]);

  useEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, icons.length);
  }, [icons]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (event, index) => {
    const dragIndex = event.dataTransfer.getData("text");
    const dragIcon = icons[dragIndex];
    const dropIcon = icons[index];
    setIcons((prevIcons) => {
      const newIcons = [...prevIcons];
      newIcons[dragIndex] = { ...dropIcon };
      newIcons[index] = { ...dragIcon };
      return newIcons;
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-skillrotate">
      {icons.map((icon, index) => (
        <div
          key={icon.id}
          className="icon"
          style={{ top: icon.top, left: icon.left ,backgroundImage: `url(${icon.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",}}
          ref={(element) => (iconRefs.current[index] = element)}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDrop={(event) => handleDrop(event, index)}
          onDragOver={handleDragOver}
        />
      ))}
    </div>
  );
};

export default Icons;
