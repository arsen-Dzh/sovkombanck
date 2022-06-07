import styles from "./CheckBox.module.css";

const CheckBox = ({ register }) => {
  return (
    <div className={styles.checkBox}>
      <label>не отправлять смс</label>
      <input type="checkbox" {...register("sms")} />
    </div>
  );
};

export default CheckBox;
