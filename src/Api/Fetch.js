import { useState, useEffect } from "react";

export default function Fetch(url) {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
	if(!url) return
	setLoading(true);
	const getData = async () => {
	  try {
		const response = await fetch(
		  url
		);
		if (!response.ok) {
		  throw new Error(
			`This is an HTTP error: The status is ${response.status}`
		  );
		}
		let actualData = await response.json();
		setData(actualData);
		setError(null);
	  } catch(err) {
		setError(err.message);
		setData(null);
	  } finally {
		setLoading(false);
	  }  
	}
	getData()
  }, [url])

 return {data, loading, error}
}
  
