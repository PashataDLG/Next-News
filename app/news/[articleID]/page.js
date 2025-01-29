import React from "react";

const NewsDetail = ({ params }) => {
    return (
        <>
            <div>NewsDetail</div>
            <p>{params.articleID}</p>
        </>
    );
};

export default NewsDetail;
