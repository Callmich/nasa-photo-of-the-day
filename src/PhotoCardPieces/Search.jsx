import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Container, Row, Col } from 'reactstrap';

const Search = props => {
    return (
        <Container>
        <div className="search">
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <form onSubmit={props.getSearch}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Enter Date for APOD</InputGroupText>
                            </InputGroupAddon>
                            <Input value={props.search} onChange={props.updateSearch} placeholder="YYYY-MM-DD"/>
                            <Button type="submit" color="primary">Search</Button>{' '}
                        </InputGroup>
                    </form>
                </Col>
            </Row>
        </div>
        </Container>
    )

}

export default Search;