import axios from "axios";

const Fetch = async (userId) => {
    try {
      const res = await Promise.all([
        axios.get(`http://localhost:3000/user/${userId}`),
        axios.get(`http://localhost:3000/user/${userId}/activity`),
        axios.get(`http://localhost:3000/user/${userId}/average-sessions`),
		axios.get(`http://localhost:3000/user/${userId}/performance`)
      ]);
      const data = res.map((res) => res.data);
      console.log(data.flat());
	  return data
    } catch {
      throw Error("Promise failed");
    }
	
  };

  export default Fetch