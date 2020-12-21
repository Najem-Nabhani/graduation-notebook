import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyBook from "./Components/Book";
import AddPageButton from "./Components/AddPageButton";

import firebase from "./Database/firebase";
import publicIp from "public-ip";

function App() {
	const [show, setShow] = useState(false);

	const [message, setMessage] = useState({name: '', msg: ''});
	const [sent, setSent] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const getClientIP = async () => await publicIp.v4();

	function handleSent({msg, name}) {

		getClientIP().then((ip) => {
			const messages = firebase
				.database()
				.ref(`/Notes/${ip.replace(/\./g, "-")}`);
			messages
				.set({
					msg,
					name,
				})
				.then(() => {setShow(false); setSent(true);});
		});
	}

	return (
		<div>
			<Modal
				className="modalUtil"
				show={show}
				onHide={handleClose}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<Form>
						<Form.Group controlId="Form.MessageArea">
							<Form.Label>نص الرسالة</Form.Label>
							<Form.Control as="textarea" rows={3} onChange={(e)=>setMessage({...message, msg: e.target.value})} />
						</Form.Group>

						<Form.Group controlId="Form.Username">
							<Form.Label>الإسم</Form.Label>
							<Form.Control type="text" onChange={(e)=>setMessage({...message, name: e.target.value})} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer  style={{margin: 'auto'}}>
					<Button style={{width: '200px'}}variant="primary" onClick={() => handleSent(message)} disabled={message.name == '' || message.msg == ''}>
						إرسال
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						إلغاء
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="bookWrapper">
				<img className="background" src="Images/bamboo-wood-texture-desk.jpg" />
				<MyBook />
				{!sent && <AddPageButton handler={handleShow} />}
			</div>

			{sent && <div className="notify" onClick={(e)=>e.target.style.display = "none"}>
				تم ارسال الرسالة بنجاح
			</div>}

			<div className="credits">
				<div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
				Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
			</div>
		</div>
	);
}

export default App;
