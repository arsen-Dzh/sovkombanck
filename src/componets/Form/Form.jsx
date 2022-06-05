import { useForm, Controller } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Select from "../Select/Select";
import MultiSelect from "../MultiSelect/MultiSelect";

const statusOptions = [
  {
    value: "vip",
    label: "VIP",
  },
  {
    value: "проблемные",
    label: "Проблемные",
  },
  {
    value: "омс",
    label: "ОМС",
  },
  {
    value: "дмс",
    label: "ДМС",
  },
];

const genderOptions = [
  {
    value: "female",
    label: "ЖЕН",
  },
  {
    value: "man",
    label: "МУЖ",
  },
];

const doctorsOptions = [
  {
    value: "Петров",
    label: "Петров",
  },
  {
    value: "Захаров",
    label: "Захаров",
  },
  {
    value: "Черниговская",
    label: "Черниговская",
  },
];

export const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const values = watch();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input />
      <div className={styles.inputContainer}>
        <label>Дата рождения</label>
        <input
          type="date"
          {...register("birthday", {
            required: true,
          })}
          className={styles.input}
        />
        {errors.birthday && <span>Наберите дату рождения</span>}
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
        {errors.phone && <span>Некоректно введён номер телефона</span>}
      </div>
      {/*<label>пол:</label>*/}
      {/*<select*/}
      {/*  multiple*/}
      {/*  {...register("status", {*/}
      {/*    required: true,*/}
      {/*  })}*/}
      {/*>*/}
      {/*  <option value="vip">VIP</option>*/}
      {/*  <option value="проблемные">Проблемные</option>*/}
      {/*  <option value="омс">ОМС</option>*/}
      {/*  <option value="дмс">ДМС</option>*/}
      {/*</select>*/}
      {/*<label>Группа клиентов:</label>*/}
      {/*<select*/}
      {/*  {...register("gender", {*/}
      {/*    required: true,*/}
      {/*  })}*/}
      {/*>*/}
      {/*  <option value="женский">ЖЕН</option>*/}
      {/*  <option value="мужской">МУЖ</option>*/}
      {/*</select>*/}
      {/*<label>лечащий врач</label>*/}
      {/*<select {...register("doctor")}>*/}
      {/*  <option value="Петров">Петров</option>*/}
      {/*  <option value="Захаров">Захаров</option>*/}
      {/*  <option value="Черниговская">Черниговская</option>*/}
      {/*</select>*/}
      <div className={styles.inputContainer}>
        <label>Группа клиентов:</label>
        <MultiSelect values={statusOptions} name={"status"} control={control} />
        {errors.status && <span>Выберите хотя бы, один вариант</span>}
      </div>
      <div className={styles.inputContainer}>
        <label>пол:</label>
        <Select values={genderOptions} control={control} name={"gender"} />
        {errors.gender && <span>Выберите пол</span>}
      </div>
      <div className={styles.inputContainer}>
        <label>лечащий врач</label>
        <Select values={doctorsOptions} control={control} name={"doctor"} />
        {errors.doctor && <span>Выберите врача</span>}
      </div>
      <label>Не отправлять смс</label>
      <input type="checkbox" {...register("sms")} />
      <button type="submit">отправить</button>
    </form>
  );
};
