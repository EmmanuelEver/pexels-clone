import style from "../../styles/pageWrappers.module.scss"
const pageWrapper = ({children}) => {
    return (
        <div className={style.defaultWrapper}>
            {children}
        </div>
    )
}

export default pageWrapper
