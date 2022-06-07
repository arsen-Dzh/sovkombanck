import { useDispatch, useSelector } from "react-redux";
import styles from "../Form/Form.module.css";
import { ToolTip } from "../ToolTip/ToolTip";
import { fetchTooltip } from "../../redux/slices/search/searchSlice";

export const Input = ({ register }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchSlice.search);

  const changeHandler = (e) => {
    dispatch(fetchTooltip(e.target.value));
  };

  return (
    <>
      <input
        {...register("name", {
          required: true,
        })}
        onChange={changeHandler}
        className={styles.input}
        value={search}
      />
      <ToolTip search={search} />
    </>
  );
};

export default Input;
