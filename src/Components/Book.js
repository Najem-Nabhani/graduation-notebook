import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import WrittingPage from "./WrittingPage";
import { FrontCover, DearFather, AskToWrite, BackCover} from "./StaticPages";
import firebase from "../Database/firebase";
import Spinner from "react-bootstrap/Spinner";
function MyBook() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const messages = firebase.database().ref("/Notes");

		let msgsArr = [];
		messages.once("value", (snapshot) => {
			snapshot.forEach((msg) => {
				msgsArr.push(msg.val());
      });
      
      setNotes(msgsArr);
		});
  
	}, []);

  
  
  if(notes.length > 0)
	return (
    <HTMLFlipBook className="book" width={300} height={500} showCover={true}>
			<FrontCover/>
      <DearFather/>
      <AskToWrite/>
			{notes.map((note, idx) => (
        <WrittingPage key={idx} name={note.name} msg={note.msg} dir="ar"/>
        ))}
    <BackCover/>
		</HTMLFlipBook>
  );
  
  return   <Spinner className="spinner" animation="border" variant="dark" />

  
}
export default MyBook;
