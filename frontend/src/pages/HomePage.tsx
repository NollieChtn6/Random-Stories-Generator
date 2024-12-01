import { useState } from "react";
import { Button } from "../components/Button";

export function HomePage() {
	const [randomStory, setRandomStory] = useState<string | null>(null);

	return (
		<div>
			<p>
				Générez une histoire aléatoire en cliquant sur le bouton ci-dessous.
			</p>
			<Button label={"Générer une histoire"} onClick={() => {}} />
		</div>
	);
}
