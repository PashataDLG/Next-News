import React from "react";
import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list"> 
                {DUMMY_NEWS.map((article) => (<li key={article.id}>
                    <Link href={`/news/${article.slug}`}>
                        <img src={`/images/news/${article.image}`} alt={article.title} />
                        <span>{article.title}</span>
                    </Link>
                </li>))}
            </ul>
        </>
    );
};

export default NewsPage;
