import Nav from "./Nav"
import style from "../styles/layout.module.scss"
const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main className={style.main}>
                {children}
            </main>
        </>
    )
}

export default Layout
