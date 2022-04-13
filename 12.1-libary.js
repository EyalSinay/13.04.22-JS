var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


const isReading = booksObj => {
    const bookReading = booksObj.map(element => {
        if (element.readingStatus) {
            return element;
        }
    });
    console.log(bookReading);
}

isReading(library);