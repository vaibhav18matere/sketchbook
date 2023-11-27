import { useRef, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Board = () => {
     const canvasRef = useRef(null);
     const shouldDraw = useRef(false);
     const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
     const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
     // console.log(color, size);
     // before browser mounting on page
     useLayoutEffect(() => {

          if (!canvasRef.current) return
          const canvas = canvasRef.current
          const context = canvas.getContext('2d');
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const handleMouseDown = (e) => {
               shouldDraw.current = true;
               context.beginPath();
               context.moveTo(e.clientX, e.clientY);
          };
          const handleMouseMove = (e) => {
               if (!shouldDraw.current) return
               context.lineTo(e.clientX, e.clientY);
               context.stroke();
          };
          const handleMouseUp = () => {
               shouldDraw.current = false;

          };

          canvas.addEventListener('mousedown', handleMouseDown);
          canvas.addEventListener('mousemove', handleMouseMove);
          canvas.addEventListener('mouseup', handleMouseUp);

          // cleanup
          return () => {
               canvas.removeEventListener('mousedown', handleMouseDown);
               canvas.removeEventListener('mousemove', handleMouseMove);
               canvas.removeEventListener('mouseup', handleMouseUp);
          }

     }, []);


     // when painting on screen
     useEffect(() => {
          if (!canvasRef.current) return
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');

          const changeConfig = () => {
               context.strokeStyle = color;
               context.lineWidth = size;
          }
          changeConfig();

     }, [color, size])

     return (
          <>
               <canvas ref={canvasRef}></canvas>
          </>
     )
}

export default Board;