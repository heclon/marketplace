export const PoolImage = ({ poolImageUrl }) => {
  if (poolImageUrl) {
    return (
      <img
        className="
        border-round
        w-8rem
        sm:w-12rem
        xl:w-20rem
        block"
        src={`${poolImageUrl}`}
        alt=""
      />
    );
  }
  return "";
};
