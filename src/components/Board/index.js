import styles from './index.module.css';
import { useRef, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { MENU_ITEMS } from "@/utility/constants";
import { actionItemClick } from '@/slice/menuSlice';

const Board = () => {
     const dispatch = useDispatch();
     const canvasRef = useRef(null);
     const shouldDraw = useRef(false);
     const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu);
     const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
     // console.log(color, size);
     // before browser mounting on page
     useLayoutEffect(() => {

          if (!canvasRef.current) return
          const canvas = canvasRef.current
          const context = canvas.getContext('2d');
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const beginPath = (x, y) => {
               context.beginPath();
               context.moveTo(x, y);
          }

          const drawLine = (x, y) => {
               context.lineTo(x, y);
               context.stroke();
          }

          const handleMouseDown = (e) => {
               shouldDraw.current = true;
               beginPath(e.clientX, e.clientY);
          };
          const handleMouseMove = (e) => {
               if (!shouldDraw.current) return
               drawLine(e.clientX, e.clientY);
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

     // to download image
     useEffect(() => {
          if (!canvasRef.current) return
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');

          if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
               const urlGenerated = canvas.toDataURL();
               const anchorTag = document.createElement('a');
               anchorTag.href = urlGenerated;
               anchorTag.download = 'paint.jpg';
               anchorTag.click();
          }
          dispatch(actionItemClick(null))
     }, [actionMenuItem, dispatch])

     return (
          <>
               <div className={styles.canvasContainer}>
                    <canvas ref={canvasRef}></canvas>
               </div>
          </>
     )
}

export default Board;