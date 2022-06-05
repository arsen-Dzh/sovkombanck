// import { useState } from "react";
// import RS from "react-select";

// const Select = ({ options }) => {
//   // const [current, setCurrent] = useState();
//
//   return <RS options={options} />;
// };

// export default Select;

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
