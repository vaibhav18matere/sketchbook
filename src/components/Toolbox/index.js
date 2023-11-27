import styles from './index.module.css';
import { COLORS, MENU_ITEMS } from './../../utility/constants.js';
import { useSelector, useDispatch } from 'react-redux';
import { changeBrushSize, changeColor } from '@/slice/toolBoxSlice';
import cx from 'classnames';


const Toolbox = () => {
     const dispatch = useDispatch();
     const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
     const showColorStrokes = activeMenuItem === MENU_ITEMS.PENCIL;
     const showBrush = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;
     const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

     const updateBrushSize = (e) => {
          dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }))
     };

     const updateColor = (newColor) => {
          dispatch(changeColor({ item: activeMenuItem, color: newColor }))
     }

     return (
          <>
               <div className={styles.toolboxContainer}>
                    {
                         showColorStrokes &&
                         <div className={styles.toolItem}>
                              <h4 className={styles.toolText}>Stroke Color</h4>
                              <div className={styles.itemContainer}>
                                   <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.BLACK })} style={{ backgroundColor: COLORS.BLACK }} onClick={() => updateColor(COLORS.BLACK)} />
                                   <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.RED })} style={{ backgroundColor: COLORS.RED }} onClick={() => updateColor(COLORS.RED)} />
                                   <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.GREEN })} style={{ backgroundColor: COLORS.GREEN }} onClick={() => updateColor(COLORS.GREEN)} />
                                   <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.BLUE })} style={{ backgroundColor: COLORS.BLUE }} onClick={() => updateColor(COLORS.BLUE)} />
                                   <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.ORANGE })} style={{ backgroundColor: COLORS.ORANGE }} onClick={() => updateColor(COLORS.ORANGE)} />
                                   <div className={cx(styles.colorBox, { [styles.active]: color === COLORS.YELLOW })} style={{ backgroundColor: COLORS.YELLOW }} onClick={() => updateColor(COLORS.YELLOW)} />
                              </div>
                         </div>
                    }
                    {
                         showBrush &&
                         <div className={styles.toolItem}>
                              <h4 className={styles.toolText}>Brush Size</h4>
                              {/* <h2>{activeMenuItem}</h2> */}
                              <div className={styles.itemContainer}>
                                   <input type='range' min={1} max={10} step={1} value={size} onChange={updateBrushSize} />
                              </div>
                         </div>
                    }
               </div>
          </>
     )
}

export default Toolbox;