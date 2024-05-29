import style from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ loadMore, currentPage }) => {
  return (
    <div className={style.loadMoreCont}>
      <button onClick={() => loadMore(currentPage + 1)}>Load more</button>
    </div>
  );
};
export default LoadMoreBtn;
