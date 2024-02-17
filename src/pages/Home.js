import React from "react";
import Tags from "../components/Tags/Tags";
import Videos from "../components/VideoComponents/Videos";
import Pagination from "../components/UI/Pagination";

const Home = () => {
	return (
		<>
			<Tags />
			<Videos />
      <Pagination />

		</>
	);
};

export default Home;
