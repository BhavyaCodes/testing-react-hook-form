import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

type FormFields = {
  name: string;
  age: number;
};

const MuiExample = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    // defaultValues: {
    //   name: "",
    //   age: 10,
    // },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <h2>Mui example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue="default"
          rules={{
            required: "Name is required",
            minLength: { value: 3, message: "minumim 3 chars" },
          }}
          render={(data) => {
            console.log(data);
            const error = data.formState.errors.name;
            return (
              <TextField
                {...data.field}
                error={!!error}
                helperText={error?.message}
              />
            );
          }}
        />
        {/* <div>
          <p>name</p>
          <input
            {...register("name", {
              required: "name is required",
              minLength: { value: 10, message: "minimum 10 chars" },
            })}
            type="text"
          />
          {errors.name && <p color="red">{errors.name.message}</p>}
        </div> */}

        <div>
          <p>age</p>
          <input {...register("age")} type="number" />
        </div>
      </form>
    </div>
  );
};

export default MuiExample;
