import { Container, Input, Form, Button, Icon, Grid } from 'semantic-ui-react'

export default function Section() {
    return (
        <Container style={{marginTop: '20px'}}>
            <Grid>
                <Grid.Column width={15}>
                    <Form>
                        <Form.Group inline>
                            <Form.Input size="massive" transparent placeholder="Title" width={15}  />
                            <Form.Button floated="right" icon size="small" width={1}>
                                <Icon name="trash"/>
                            </Form.Button>
                        </Form.Group>
                        <Form.TextArea placeholder="Content" />
                    </Form>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={1}>
                    <Button style={{marginBottom: '5px'}} size="mini" icon>
                        <Icon name='angle up'/>
                    </Button>
                    <Button style={{marginTop: '5px'}} size="mini" icon>
                        <Icon name='angle down'/>
                    </Button>
                </Grid.Column>
            </Grid>
        </Container>
    )
}