export const totalVisitors = async (): Promise<number> => {
    const response = await fetch("https://localhost:8080/total_visitors", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}