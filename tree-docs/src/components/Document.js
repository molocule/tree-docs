import { useEffect, useState, useReducer } from 'react';
import { Accordion, Button, Container, Icon, Form, Grid } from 'semantic-ui-react'

function Document() {

    let fakeSection1 = {
        id: 1,
        title: "Title1",
        text: "lorem ipsum",
        active: false
    }

    let fakeSection2 = {
        id: 2,
        title: "Title2",
        text: "lorem ipsum2",
        active: false
    }

    const [sections, setSections] = useState([fakeSection1, fakeSection2])

    const [active, setActive] = useState([false, false]);

    function addSection() {
        setSections([...sections, {id: 3, title: "Title3", text: "new"}])
    }

    function deleteSection(e, id) {
        e.stopPropagation();
        setSections(sections.filter((elem) => {
            return elem.id !== id
        }));
    }

    function toggleSection(e, titleProps) {
        let newArr = [...sections]
        newArr[titleProps.index].active = !titleProps.active;
        setActive(newArr);
    }

    function handleTitleClick(e) {
        e.stopPropagation();
    }

    return (
        <Container style={{marginTop: "50px"}}>
            <Button onClick = {addSection}>New Paragraph</Button>

            <Accordion styled style={{marginTop: "20px"}}>
                {sections.length ? sections.map((section, index) => {
                    return (
                        <>
                            <Accordion.Title active={section.active} index={index} onClick={toggleSection}>
                                <Form>
                                    <Form.Group inline>
                                        <Form.Input icon="dropdown" iconPosition="left" size="massive" transparent placeholder="Title" width={15} defaultValue={section.title} onClick={(e) => handleTitleClick(e)} />
                                        <Form.Button size="mini" icon>
                                            <Icon name='angle up'/>
                                        </Form.Button>
                                        <Form.Button size="mini" icon>
                                            <Icon name='angle down'/>
                                        </Form.Button>
                                        <Form.Button icon size="mini" width={1} key={section.id} onClick={(e) => deleteSection(e, section.id)}>
                                            <Icon name="trash"/>
                                        </Form.Button>
                                    </Form.Group>
                                </Form>
                            </Accordion.Title>
                            <Accordion.Content active={section.active}>
                                <Form>
                                    <Form.TextArea placeholder="Content" defaultValue={section.text} />
                                </Form>
                            </Accordion.Content>
                        </>
                    )
                }) : <h1>No sections yet!</h1>}
            </Accordion>

        </Container>
    );
}

export default Document;
