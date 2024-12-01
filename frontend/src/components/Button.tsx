type ButtonProps = {
	label: string;
	onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
	return <button type="button">{label}</button>;
}
