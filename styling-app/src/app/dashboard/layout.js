import styles from './dashboard.module.css'

export default function DashboardLayout(props) {
    return <div className={styles.dashboard}>
        {props.children}
    </div>
}