import styles from './button.module.scss'
import PropTypes from 'prop-types'


export default function Button({children, className, onClick}) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired, 
    className: PropTypes.string, 
    onClick: PropTypes.func
}
