import RS from "react-select";
import { Controller } from "react-hook-form";

const Select = ({ name, control, values }) => {
  const options = values;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => {
        return (
          <RS
            placeholder={"...."}
            options={options}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            defaultValue={value}
          />
        );
      }}
      rules={{
        required: true,
      }}
    />
  );
};

export default Select;
