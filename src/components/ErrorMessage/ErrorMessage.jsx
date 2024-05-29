import style from "./ErrorMessage.module.css"
const ErorMessage = ({ message }) => {
  return <p className={style.erorMsg}>{message}</p>;
};
export default ErorMessage