import style from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={style.loadMoreCont}>
      <button onClick={(prev) => loadMore(prev + 1)}>Load more</button>
    </div>
  );
};
export default LoadMoreBtn;
