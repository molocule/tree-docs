import { useState } from 'react';
import { getDocuments } from "../api/Database";
import { Container } from 'semantic-ui-react'
import { List, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom";

function DocumentList() {

    const [documents] = useState(getDocuments());

    let alt = false;
    let navigate = useNavigate();

    function handleItemClick(id) {
        navigate("/tree", { state: { nodeID : id }});
    }

    return (
        <Container style={{marginTop: "50px"}}>
            <h1>Available Files:</h1>
            <List>
            {documents.length ? documents.map((document, index) => {
                    alt = !alt;
                    return (
                        <span key={document.id}>
                            <ListItemButton selected={alt} component="a" onClick={ () => handleItemClick(document.id) }>
                                <ListItemText primary={document.name} />
                            </ListItemButton>
                        </span>
                    )
                }) : <h1>No sections yet!</h1>}
            </List>
        </Container>
    );
}

export default DocumentList;
