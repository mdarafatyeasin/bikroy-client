import { useEffect, useState } from "react";

const useBasicData = () => {
  const [basicData, setBasicData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (id && token) {
      fetch(`https://bikroy-server.onrender.com/profile/basic_info/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            setBasicData(data);
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
  return { basicData, loading };
};

export default useBasicData;
