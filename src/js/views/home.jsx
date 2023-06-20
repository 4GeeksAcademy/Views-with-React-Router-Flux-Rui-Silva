import React from "react";
import Navbar from "/src/js/component/navbar.jsx"
import Jumbotron from "/src/js/component/jumbotron.jsx";
import Cards from "/src/js/component/cards.jsx";
import Footer from "/src/js/component/footer.jsx";

const Home = () => {

	return (
		<div className="container-flex">
			<Navbar title={"Start Bootstrap"} link1={"Home"} link2={"About"} link3={"Services"} link4={"Contact"} />
			<Jumbotron title={"A Warm Welcome!"} description={
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			} button={"Call to action!"} />
			<Cards url={"https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"} 
					title={"Lorem Ipsum"} 
					content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius a sapien ac euismod. Curabitur facilisis ex ligula, in vulputate."}
					button={"Find out more!"} 
					url1={"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"} 
					content1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium porta ipsum ultricies semper. Morbi eu luctus lacus. Vivamus aliquam non nisi nec luctus. Sed convallis lectus et nisi lacinia."}
					url2={"https://fastly.picsum.photos/id/39/3456/2304.jpg?hmac=cc_VPxzydwTUbGEtpsDeo2NxCkeYQrhTLqw4TFo-dIg"} 
					content2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at elit ante. Nullam et massa aliquam ipsum convallis laoreet. Nullam aliquet pulvinar libero, at porta."}
					url3={"https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM"} 
					content3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas quam a mauris semper, quis lacinia lacus bibendum. Maecenas condimentum euismod dui quis dignissim. Donec ac nibh ut erat elementum aliquet. Sed efficitur molestie lacus, et consequat orci sagittis sit."}
			/>
			<Footer footerText={"Copyright © myfirst React Website 2023"}/>
		</div>
	);
};

export default Home;
