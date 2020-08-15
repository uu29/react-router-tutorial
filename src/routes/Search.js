import React from 'react';


const Search = ({location}) => {
    return (
        <div>
            {/* location를 파라미터로 받으면 해당 컴포넌트의 props로 쿼리가 추가됨 */}
            {new URLSearchParams(location.search).get('keyword')} Search
        </div>
    );
};

export default Search;