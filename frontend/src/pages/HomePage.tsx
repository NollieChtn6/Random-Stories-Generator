import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Loader } from "../components/Loader";
import { RANDOM_STORY_QUERY } from "../graphql/queries";

export function HomePage() {
	const [generateRandomStory, { data, loading, error }] = useLazyQuery<{
		randomStory: string;
		// https://www.apollographql.com/docs/react/caching/advanced-topics
	}>(RANDOM_STORY_QUERY, { fetchPolicy: "no-cache" });

	const [message, setMessage] = useState<string | null>(null);

	const handleClickOnGenerate = async () => {
		try {
			const response = await generateRandomStory();
			if (error) {
				setMessage("Erreur lors du chargement de l'histoire");
			} else if (data?.randomStory) {
				setMessage(null);
			}
			return response;
		} catch (err) {
			setMessage("Une erreur inattendue s'est produite");
			console.error("Unexpected error:", err);
		}
	};

	useEffect(() => {
		if (error) {
			setMessage("Erreur lors du chargement de l'histoire");
		} else if (data?.randomStory) {
			setMessage(null);
		}
	}, [data, error]);

	return (
		<div className="homepage-container">
			<div className="instructions-container">
				<p className="instructions">
					Générez une histoire aléatoire en cliquant sur le bouton ci-dessous.
				</p>
				<div className="button-container">
					<Button
						type="button"
						label={"Générer une histoire"}
						onClick={handleClickOnGenerate}
					/>
				</div>
			</div>
			<div className="story-container">
				{loading && <Loader />}
				{message && <p>{message}</p>}
				{data?.randomStory && <p className="story">{data.randomStory}</p>}
			</div>
		</div>
	);
}
