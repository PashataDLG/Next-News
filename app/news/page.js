import React from "react";
import Link from "next/link";

const NewsPage = () => {
    return (
        <>
            <div>NewsPage</div>
            <Link href="/news/first-article">First News Item</Link>
            <Link href="/news/second-article">Second News Item</Link>
            <Link href="/news/third-article">Third News Item</Link>
        </>
    );
};

export default NewsPage;
