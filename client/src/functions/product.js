import axios from "axios";

const token = localStorage.getItem("token");

export const getProducts = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API}/product/all`);
  return res.data;
};

export const createProduct = async (
  name,
  price,
  description,
  image,
  category
) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API}/product/create`,
    {
      name,
      price,
      description,
      image,
      category,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
