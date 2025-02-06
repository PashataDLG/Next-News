import axios from "axios";

export default async function fetchNews() {
    try {
        const response = await axios.get("http://localhost:8080/news");
        console.log(`This is the response:`, response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
}
