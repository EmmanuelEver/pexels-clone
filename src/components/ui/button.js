import Link from "next/link";
import style from "../../styles/button.module.scss";

const Button = ({Icon, clickHandler, children, primary, href, rounded, className}) => {
    return (
        <>
            {
                href ? 
                <Link href={href}>
                    <a className={` ${className}  ${style.button} ${rounded && style.rounded} ${ primary && style.primary}`} onClick={clickHandler}>
                    {Icon}
                    {children}
                    </a>
                </Link>
                :
                <button className={` ${className} ${style.button} ${rounded && style.rounded} ${ primary && style.primary}`} onClick={clickHandler}>
                {Icon}
                {children}
                </button>
            }
        </>
    )
}

export default Button
