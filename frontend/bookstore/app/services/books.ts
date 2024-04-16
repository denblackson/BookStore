export interface BookRequest {
    title: string;
    description: string;
    price: number;
}

export const getAllBooks = async () => {
    const responce = await fetch("https://localhost:7290/BooksContloller");

    return responce.json();
};

export const createBook = async (bookRequest: BookRequest) => {
await fetch("https://localhost:7290/BooksContloller", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(bookRequest),
});
};


export const updateBook = async (id: string, bookRequest: BookRequest) => {
    await fetch(`https://localhost:7290/BooksContloller/${id}`, {
    method: "PUT",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(bookRequest),
});
};

export const deleteBook = async (id: string) => {
    await fetch(`https://localhost:7290/BooksContloller/${id}`, {
    method: "DELETE",
});
};