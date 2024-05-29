import style from "./ErrorMessage.module.css"
const ErorMessage = () => {
  return (
    <div className={style.erorMsgCont}>
      <p className={style.erorMsg}>Please refresh youre page</p>
    </div>
  )
}
export default ErorMessage