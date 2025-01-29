import React from "react";
import Link from "next/link";

const MainHeader = () => {
    return (
        <>
            <Link href="/">
                Home
            </Link>
            <Link href="/news">
                News
            </Link>
        </>
    );
};

export default MainHeader;
