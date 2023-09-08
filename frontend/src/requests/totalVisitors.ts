export const totalVisitors = async (): Promise<number> => {
    const response = await fetch("http://localhost:8000/total_visitors", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}