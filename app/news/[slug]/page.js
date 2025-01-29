import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const NewsDetail = ({ params }) => {
    const articleSlug = params.slug;
    const articleItem = DUMMY_NEWS.find(
        (article) => article.slug === articleSlug
    );

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${articleItem.image}`} alt={articleItem.title} />
                <h1>{articleItem.title}</h1>
                <time dateTime={articleItem.date}>{articleItem.date}</time>
            </header>
            <p>{articleItem.content}</p>
        </article>
    );
};

export default NewsDetail;
