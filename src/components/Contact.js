import { useForm } from "react-hook-form"
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form action="" className="m-5 flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} className="border py-2 m-2" />
      <input type="email" {...register("email")} className="border py-2 m-2" />
      <input type="password" {...register("password")} className="border py-2 m-2" />
      <button type="submit" className="bg-green-700 px-4 py-2 m-2 text-white">Submit</button>
    </form>
  )
}
export default Contact