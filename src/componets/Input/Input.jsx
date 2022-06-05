import { useDispatch, useSelector } from "react-redux";
import styles from "../Form/Form.module.css";
import { ToolTip } from "../ToolTip/ToolTip";
import { fetchTooltip } from "../../redux/slices/search/searchSlice";

export const Input = ({}) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchSlice.search);

  const onChange = (e) => {
    dispatch(fetchTooltip(e.target.value));
  };

  return (
    <div className={styles.inputContainer}>
      <label>ФИО</label>
      <input
        onChange={onChange}
        className={styles.input}
        required
        value={search}
      />
      <ToolTip search={search} />
    </div>
  );
};

export default Input;
