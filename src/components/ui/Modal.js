import { forwardRef, useEffect } from "react"
import style from "../../styles/modal.module.scss"

const pressESC = (e) => {
    console.log(e)
}

const Modal = forwardRef((props, ref) => {
    useEffect(() => {
        window.addEventListener("keydown", pressESC)
        return () => {
            window.removeEventListener("keydown", pressESC)
        }
    }, []);

    return (
        <>
        <div className={style.overlay}>
            <div ref={ref} className={style.modalWrapper}>
                <div onClick={props.closeHandler} className={style.modalClose}>
                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></i>
                </div>
                <div className={style.modal}>
                    {props.children}
                </div>
            </div>
        </div>
        </>
    )
})

export default Modal;