import { useEffect, useState } from "react";

const useUserProducts = () => {
  const [userProduct, setUserProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (id && token) {
      fetch(`https://bikroy-server.onrender.com/profile/my-adds/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  return { userProduct, loading };
};

export default useUserProducts;
