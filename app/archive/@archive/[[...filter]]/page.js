import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
    const filter = params.filter;

    const selectedYear = filter?.[0]; // filter ? filter[0] : undefined;
    const selectedMonth = filter?.[1]; // filter ? filter[1] : undefined;\

    let news;

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    const links = getAvailableNewsYears();
    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            return (
                                <li key={link}>
                                    <Link href={`/archive/${link}`}>
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
}
