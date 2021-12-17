// import { ReactEventHandler, useEffect, useState } from "react";
// import {
//   Control,
//   ControllerProps,
//   SubmitHandler,
//   useForm,
// } from "react-hook-form";

// const Controller = ({
//   control,
//   register,
//   name,
//   rules,
//   render,
// }: ControllerProps) => {
//   const props = register(name);
//   return render({
//     onChange: props.onChange,
//     onBlur: props.onBlur,
//     name: props.name,
//   });
// };

// type FormFields = {
//   firstName: string;
//   lastName: string;
// };

// const Input = (props: {
//   value: any;
//   name: string;
//   onChange: ReactEventHandler;
// }) => {
//   const [value, setValue] = useState(props.value || "");

//   useEffect(() => {
//     setValue(props.value);
//   }, [props.value]);

//   return (
//     <input
//       name={props.name}
//       onChange={(e) => {
//         setValue(e.target.value);
//         props.onChange && props.onChange(e);
//       }}
//       value={value}
//     />
//   );
// };

// const UseController = () => {
//   const {
//     handleSubmit,
//     register,
//     control,
//     setValue,
//     formState: { errors },
//   } = useForm<FormFields>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//     },
//   });
//   const onSubmit: SubmitHandler<FormFields> = (data: any) => {
//     console.log(data);
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true })} />
//       <Controller
//         {...{
//           control,
//           register,
//           name: "lastName",
//           rules: {},
//           render: () => <Input />,
//         }}
//       />
//     </form>
//   );
// };

// export default UseController;
