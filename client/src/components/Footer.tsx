import { Col, Container, Row } from "react-bootstrap";
import { Envelope, Twitter } from "react-bootstrap-icons";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="justify-content-center text-center">
					<Col xs={12} md={4}>
						<a
							href="https://twitter.com/toncompte"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter /> X (Twitter)
						</a>
					</Col>
					<Col xs={12} md={4}>
						<a href="mailto:contact@tonsite.com">
							<Envelope /> contact@tonsite.com
						</a>
					</Col>
					<Col xs={12} md={4}>
						<a
							href="https://www.linkedin.com/in/tonprofil/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
