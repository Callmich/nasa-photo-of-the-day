import React from "react";

const Search = props => {
    return (
        <div className="search">
            <form onSubmit={props.getSearch}>
                <input type="text" value={props.search} onChange={props.updateSearch} placeholder="YYYY-MM-DD"/>
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )

}

export default Search;