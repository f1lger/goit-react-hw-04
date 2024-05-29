import style from "./ErrorMessage.module.css"
const ErorMessage = ({children}) => {
  return (
    <div className={style.erorMsgCont}>
      <p className={style.erorMsg}>{children}</p>
    </div>
  );
}
export default ErorMessage