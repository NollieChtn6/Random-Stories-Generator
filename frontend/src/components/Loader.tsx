import { Hearts } from "react-loader-spinner";

export function Loader() {
	return (
		<div className="loader">
			<Hearts
				height="80"
				width="80"
				color="#D1C7D4"
				ariaLabel="hearts-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
			<p>Chargement de l&rsquo;histoire en cours...</p>
		</div>
	);
}
