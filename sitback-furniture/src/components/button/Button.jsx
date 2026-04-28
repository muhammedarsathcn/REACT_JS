
import styles from './Button.module.css';
const Button = ({children,variant = "primary",handleOnclick, ...rest}) => {
  return (
      <button className={`${styles.btn} ${styles[variant]} `} onClick={handleOnclick}{...rest}>
          {children }
    </button>
  )
}

export default Button