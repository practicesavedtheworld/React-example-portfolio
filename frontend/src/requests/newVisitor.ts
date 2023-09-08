interface status {
    status: string
}

export const newVisitor = async (): Promise<status> => {
    const response: Response = await fetch("https://localhost:8000/new_visitor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}