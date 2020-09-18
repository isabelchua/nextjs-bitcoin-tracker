import Head from "next/head";
import Navbar from "./Navbar";
const Layout = props => (
	<div>
		<Head>
			<title>Bitz</title>
			{/* <link rel="stylesheet" href="./components/bootstrap.min.css" /> */}
			<link
				rel="stylesheet"
				href="https://bootswatch.com/4/slate/bootstrap.css"
			/>
		</Head>
		<Navbar />
		<div className="container">{props.children}</div>
	</div>
);
export default Layout;
