import Img from "next/image"

export default function Image({url}) {
	return(
	<div>
		<Img src={url} />
	</div>
	);
}
