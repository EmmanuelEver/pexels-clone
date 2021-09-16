import style from "../../styles/searchTitle.module.scss";

const searchTitle = ({title}) => {
    return (
        <div className={style.title}>
            <h1>{title}</h1>
        </div>
    )
}

export default searchTitle
