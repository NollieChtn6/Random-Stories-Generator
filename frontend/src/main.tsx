import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./reset.css";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:4000",
	cache: new InMemoryCache(),
});

// https://www.codingdeft.com/posts/react-18-typescript-error/
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
);
