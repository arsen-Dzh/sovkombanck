import RS from "react-select";
import { Controller } from "react-hook-form";

const MultiSelect = ({ name, control, values }) => {
  const options = values;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => {
        return (
          <RS
            options={options}
            isMulti
            placeholder={"...."}
            onChange={(options) =>
              onChange(options?.map((option) => option.value))
            }
            onBlur={onBlur}
            value={options.filter((option) => value?.includes(option.value))}
            defaultValue={options.filter((option) =>
              value?.includes(option.value)
            )}
          />
        );
      }}
      rules={{
        required: true,
      }}
    />
  );
};

export default MultiSelect;
