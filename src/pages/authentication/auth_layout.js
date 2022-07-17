import styles from '../../styles/auth_layout.module.scss'

export default function Auth_Layout({ children }) {
    return <div className={styles.container}>
        <div className={styles.container_form}>
            {children}
        </div>
    </div>;
  }
  