import { ReactSearchAutocomplete } from "react-search-autocomplete";

export const SearchBar = (props) => {
    return (
        <div style={{display: 'inline'}}>
            <ReactSearchAutocomplete
                // items={allActivePublisher1}
                // onSearch={handleOnSearch}
                // onHover={handleOnHover}
                // onSelect={gotoPublisher}
                // onFocus={handleOnFocus}
                className="form-control"
                placeholder="Search here"
                styling={{
                    zIndex: 999,
                    // width: '100%',
                    borderRadius: '10px',
                    backgroundColor: '#E9EAF0',
                    boxShadow: 'none'
                }}
                autoFocus
                // formatResult={formatResult}
            />
        </div>
    );
}