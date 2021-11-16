import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function Document() {

    function addParagraph() {

    }
    function deleteParagraph(paragraphID) {
        
    }
    function hideParagraph(paragraphID) {
        
    }
    let fakeParagraph = {
        id: 1,
        text: "Lorem Ipsum"
    }

    const [paragraphs, setParagraphs] = useState([fakeParagraph, fakeParagraph]);


    useEffect(() => {    
        // Pull in document data
        
    });


    return (
        <Container fluid className="p-5">

        <h1 align="center"> Hi! Welcome to your document</h1>
        
        <p>
        <Button variant="outline-primary" onClick = {addParagraph()}> + New Paragraph</Button>
        </p>

        {paragraphs.map((paragraph) => {
            return (
                <Stack gap={2} className="col-md-5 mx-auto">
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Paragraph 
                    </Accordion.Header>
                    <Accordion.Body>
                    <Button variant="outline-danger"  className="float-end"
                    onClick = {deleteParagraph()}>Delete</Button>
                        <p>{paragraph.text}</p>

                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Stack>
            )
        })}

        </Container>
    );
}

export default Document;
