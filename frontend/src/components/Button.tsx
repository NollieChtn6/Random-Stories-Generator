type ButtonProps = {
	type: "button" | "submit" | "reset";
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ type, label, onClick }: ButtonProps) {
	return (
		<button type={type} onClick={onClick}>
			{label}
		</button>
	);
}
