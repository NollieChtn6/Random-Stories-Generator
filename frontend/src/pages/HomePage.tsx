import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { RANDOM_STORY_QUERY } from "../graphql/queries";

export function HomePage() {
	const [generateRandomStory, { data, loading, error }] = useLazyQuery<{
		randomStory: string;
		// https://www.apollographql.com/docs/react/caching/advanced-topics
	}>(RANDOM_STORY_QUERY, { fetchPolicy: "no-cache" });

	const [message, setMessage] = useState<string | null>(null);

	const handleClickOnGenerate = async () => {
		setMessage("Chargement de l'histoire en cours...");
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
		if (loading) {
			setMessage("Chargement de l'histoire en cours...");
		} else if (error) {
			setMessage("Erreur lors du chargement de l'histoire");
		} else if (data?.randomStory) {
			setMessage(null);
		}
	}, [data, loading, error]);

	return (
		<div>
			<p>
				Générez une histoire aléatoire en cliquant sur le bouton ci-dessous.
			</p>
			<Button
				type="button"
				label={"Générer une histoire"}
				onClick={handleClickOnGenerate}
			/>
			{message && <p>{message}</p>}
			{data?.randomStory && <p>{data.randomStory}</p>}
		</div>
	);
}
