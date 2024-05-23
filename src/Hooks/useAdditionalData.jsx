import { useEffect, useState } from "react";

const useAdditionalData = () => {
  const [additionalData, setAdditionalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (id && token) {
      fetch(`https://bikroy-server.onrender.com/profile/additional_info/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            setAdditionalData(data);
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
  return { additionalData, loading };
};

export default useAdditionalData;
