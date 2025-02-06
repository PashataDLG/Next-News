"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import NewsList from "@/components/news-list";
import fetchNews from "@/lib/newsApi";

const NewsPage = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["news"],
        queryFn: fetchNews,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={data} />
        </>
    );
};

export default NewsPage;