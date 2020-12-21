import React from "react";
import "../styles/pagesStyle.css";

const WrittingPage = React.forwardRef((props, ref) => {
  console.log(props.dir);
	return (
		<div className="writtingPage" ref={ref}>
			<figure className="quote">
				<blockquote className={props.dir}>
          {props.msg}
				</blockquote>
				<figcaption className={props.dir}>
					&mdash; {props.name}
				</figcaption>
			</figure>
		</div>
	);
});

export default WrittingPage;
