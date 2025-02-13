import NewsList from "@/components/news-list";
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage(props) {
    const params = await props.params;
    const filter = params.filter;

    let links = await getAvailableNewsYears();

    const selectedYear = filter?.[0]; // filter ? filter[0] : undefined;
    const selectedMonth = filter?.[1]; // filter ? filter[1] : undefined;
    console.log(selectedMonth);

    let news;

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    const getAvailableYears = await getAvailableNewsYears();

    if (
        (selectedYear && !getAvailableYears.includes(selectedYear)) ||
        (selectedMonth &&
            !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
    ) {
        throw new Error("Invalid filter.");
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
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
