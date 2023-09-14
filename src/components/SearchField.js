import React from "react";
import { AutoComplete, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const SearchField = (props) => (
        <InputGroup>
            <AutoComplete
                data={props.data} 
                placeholder="Search Email" 
                onChange={props.handleChange} 
                renderMenuItem={item => {
                    return (
                        <div className="searchAutoComplete">{item}</div>
                    );
                }}
            />
                <InputGroup.Button onClick={props.handleSubmit} tabIndex={-1}>
                    <SearchIcon />
                </InputGroup.Button>
        </InputGroup>
);
  
export default SearchField;