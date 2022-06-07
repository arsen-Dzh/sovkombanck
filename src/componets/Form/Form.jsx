import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Select from "../Select/Select";
import MultiSelect from "../MultiSelect/MultiSelect";
import {
  doctorsOptions,
  genderOptions,
  statusOptions,
} from "../../utils/options";
import CheckBox from "../CheckBox/CheckBox";

export const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>ФОРМА ЗАПИСИ</h1>
      <div className={styles.gridWrapper}>
        <div className={styles.inputContainer}>
          <label>ФИО</label>
          <Input register={register} />
          {errors.name && <span>введите ФИО</span>}
        </div>
        <div className={styles.inputContainer}>
          <label>Дата рождения</label>
          <input
            type="date"
            {...register("birthday", {
              required: true,
            })}
            className={styles.input}
          />
          {errors.birthday && <span>наберите дату рождения</span>}
        </div>
        <div className={styles.inputContainer}>
          <label> Номер</label>
          <input
            className={styles.input}
            {...register("phone", {
              pattern: /^7\d[0-9]{9}$/gm,
              required: true,
            })}
          />
          {errors.phone ? (
            <span>некоректно введён номер телефона</span>
          ) : (
            <span style={{ color: "white" }}>в формате: 7xxxxxxxxxx</span>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label>Группа клиентов:</label>
          <MultiSelect
            values={statusOptions}
            name={"status"}
            control={control}
          />
          {errors.status && <span>выберите хотя бы, один вариант</span>}
        </div>
        <div className={styles.inputContainer}>
          <label>пол:</label>
          <Select values={genderOptions} control={control} name={"gender"} />
          {errors.gender && <span>выберите пол</span>}
        </div>
        <div className={styles.inputContainer}>
          <label>Лечащий врач</label>
          <Select values={doctorsOptions} control={control} name={"doctor"} />
          {errors.doctor && <span>выберите врача</span>}
        </div>
        <CheckBox register={register} />
      </div>
      <button className={styles.button} type="submit">
        отправить
      </button>
    </form>
  );
};
