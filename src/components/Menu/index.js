import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_ITEMS } from '@/utility/constants';
import { menuItemClick, actionItemClick } from './../../slice/menuSlice';
import cx from 'classnames';
const Menu = () => {
     const dispatch = useDispatch();
     const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

     const handleMenuClick = (itemName) => {
          dispatch(menuItemClick(itemName));
     }

     return (
          <>
               <div className={styles.menuContainer}>
                    {/* visual states */}
                    <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL })} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
                         <FontAwesomeIcon icon={faPencil} className={styles.actionIcon} />
                    </div>
                    <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.ERASER })} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)} >
                         <FontAwesomeIcon icon={faEraser} className={styles.actionIcon} />
                    </div>
                    {/* actionable states */}
                    <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.UNDO })} onClick={() => handleMenuClick(MENU_ITEMS.UNDO)}>
                         <FontAwesomeIcon icon={faRotateLeft} className={styles.actionIcon} />
                    </div>
                    <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.REDO })} onClick={() => handleMenuClick(MENU_ITEMS.REDO)}>
                         <FontAwesomeIcon icon={faRotateRight} className={styles.actionIcon} />
                    </div>
                    <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.DOWNLOAD })} onClick={() => handleMenuClick(MENU_ITEMS.DOWNLOAD)}>
                         <FontAwesomeIcon icon={faFileArrowDown} className={styles.actionIcon} />
                    </div>
               </div>
          </>
     )
}
export default Menu;