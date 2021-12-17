import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  name: string;
  password: string;
  age: number;
}

function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>({
    defaultValues: {
      name: "hello",
      password: "",
    },
  });

  // console.log(watch());
  console.log("errors", errors);

  const onSubmit: SubmitHandler<IFormInputs> = ({ name, password, age }) => {
    // alert("submit");
    console.log("name", name);
    console.log("password", password);
    console.log("age", age);
    // console.log(typeof age);
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("name", { minLength: 3, required: "this is required" })}
          type="text"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register("password", { required: "this is required" })}
          type="password"
        />
      </div>
      {errors.password && <p>{errors.password.message}</p>}

      <div>
        <input
          {...register("age", {
            valueAsNumber: true,
            max: { value: 100, message: `age can't be more than 100` },
          })}
        />
      </div>
      {errors.age && <p>{errors.age.message}</p>}

      {/* <TextField
        inputRef={register}
        name="name"
        error
        id="standard-error-helper-text"
        label="name"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="standard"
      /> */}
      {/* <TextField
        inputRef={register}
        name="password"
        error
        type="password"
        id="pwd"
        label="password"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="standard"
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
