import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
const Menu = () => {
     return (
          <>
               <div className={styles.menuContainer}>
                    <div className={styles.iconWrapper}>
                         <FontAwesomeIcon icon={faPencil} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper}>
                         <FontAwesomeIcon icon={faEraser} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper}>
                         <FontAwesomeIcon icon={faRotateLeft} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper}>
                         <FontAwesomeIcon icon={faRotateRight} className={styles.actionIcon} />
                    </div>
                    <div className={styles.iconWrapper}>
                         <FontAwesomeIcon icon={faFileArrowDown} className={styles.actionIcon} />
                    </div>
               </div>
          </>
     )
}
export default Menu;