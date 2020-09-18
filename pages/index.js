import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = props => (
	<Layout>
		<div>
			<h1>Welcome to Bitz</h1>
			{/* {props.bpi.time.updated} */}
			<p>Check current Bitcoin rate</p>
			<Prices bpi={props.bpi} />
		</div>
	</Layout>
);

Index.getInitialProps = async function () {
	const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
	const data = await res.json();

	return {
		bpi: data.bpi
	};
};

export default Index;
