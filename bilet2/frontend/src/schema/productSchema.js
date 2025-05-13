import { object, string, number } from 'yup';

export let productSchema = object({
  image: string().url("write in url format!").required(),
  title: string().required(),
  price: number().required().positive().integer(),
  desc: string().nullable(),
  category: string().required(),
});