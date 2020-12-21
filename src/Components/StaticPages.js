import React from "react";
import "../styles/covers.css";

export const FrontCover = React.forwardRef((props, ref) => {
	return (
		<div className="front-cover" ref={ref}>
			<h1>NAJM</h1>
			<h1>EL-DEEN</h1>
			<h1>MARWAN</h1>
			<h1>NABHANI</h1>
			<div className="seperator">
				<hr />
				<img className="gradHat" src="\Svg\gradHat.svg" />
				<hr />
			</div>
			<h2 className="title">Graduation Notebook</h2>

			<h3 className="year">2020-2021</h3>
		</div>
	);
});

export const DearFather =  React.forwardRef((props, ref) => {
	return (
		<div className="dad-cover" ref={ref}>
			<img src='Images\Dad.jpg'/>
			<p>  أهدي نجاحي وتخرجي الى والدي الحبيب</p>
			<p> الرجل الذي جعل مني رجلا ...</p>
			<br/>
			<p> الذي ضحى بكل ما لديه من أجل أولاده</p>
			<p> الذي كان دوما يهتم للعلم قبل أي شيء </p>
			<p>  الذي كان يفتخر بي وبإنجازاتي. </p>
			<br/>
			<p>   الذي كان دائما يقول لي</p>
			<p> "أعرف انك تستطيع ان تحقق افضل من ذلك".</p>
			<br/>
			<p>  الذي علمني أن أجد نفسي وأن أحارب مخاوفي</p>
			<p>  وترك لي الحياة كي تعلمني ما تبقى</p>
			<br/>
			<p>  أسأل الله ان يغفر له ويتغمده برحمته الواسعة</p>
		</div>
	)
});

export const AskToWrite = React.forwardRef((props, ref) => {
	return (
		<div className="writtingPage" ref={ref}>
			
		</div>
	)
});

export const BackCover = React.forwardRef((props, ref) => {
	return(
		<div className="ending" ref={ref}>
				<img src="Images/StarLogo.png"/>
		</div>
	)
});
