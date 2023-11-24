import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { MENU_ITEMS } from '@/utility/constants';
import { menuItemClick, actionItemClick } from './../../slice/menuSlice';
const Menu = () => {
     
     const dispatch = useDispatch();

     const handleMenuClick = (itemName) => {
          dispatch(menuItemClick(itemName));
     }

     return (
          <>
               <div className={styles.menuContainer}>
                    {/* visual states */}
                    <div className={styles.iconWrapper} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
                         <FontAwesomeIcon icon={faPencil} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)} >
                         <FontAwesomeIcon icon={faEraser} className={styles.actionIcon} />
                    </div>
                    {/* actionable states */}
                    <div className={styles.iconWrapper} onClick={() => handleMenuClick(MENU_ITEMS.UNDO)}>
                         <FontAwesomeIcon icon={faRotateLeft} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper} onClick={() => handleMenuClick(MENU_ITEMS.REDO)}>
                         <FontAwesomeIcon icon={faRotateRight} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper} onClick={() => handleMenuClick(MENU_ITEMS.DOWNLOAD)}>
                         <FontAwesomeIcon icon={faFileArrowDown} className={styles.actionIcon} />
                    </div>
               </div>
          </>
     )
}
export default Menu;