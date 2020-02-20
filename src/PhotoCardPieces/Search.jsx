import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

const Search = props => {
    return (
        <div className="search">
            <form onSubmit={props.getSearch}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Enter Date for APOD</InputGroupText>
                    </InputGroupAddon>
                    <Input value={props.search} onChange={props.updateSearch} placeholder="YYYY-MM-DD"/>
                    <Button type="submit" color="primary">Search</Button>{' '}
                </InputGroup>
            </form>
        </div>
    )

}

export default Search;