import axios from "axios";

import NewsList from "@/components/news-list";

const NewsPage = async () => {
    const response = await axios.get("http://localhost:8080/news");

    if (!response.data) {
        throw new Error("There was an error fetching the news");
    }

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={response.data} />
        </>
    );
};

export default NewsPage;
