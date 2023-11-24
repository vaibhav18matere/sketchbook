import { useRef, useEffect } from "react";
const Board = () => {
     const canvasRef = useRef(null);

     useEffect(() => {
          
          if (!canvasRef.current) return
          const canvas = canvasRef.current
          const context = canvas.getContext('2d');
          
          // when mounting
          canvas.width = window.innerWidth;
          canvas.height = window.innerheight;
     }, []);
     

     return (
          <>
               <canvas ref={canvasRef}></canvas>
          </>
     )
}

export default Board;