import createBookElement from "./dom-util.js";

// Requesting books from the Google API
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

const getSearchUrl = (searchTerm) => {
    return urlBase + searchTerm;
};

// Fetch API to make HTTP requests to web server.
const search = async (searchTerm) => {
    // Saving API call
    const requestPromise = fetch(getSearchUrl(searchTerm));
    // Waiting for response
    const response = await requestPromise;
    // Saving JSON object
    const searchData = await response.json();
    console.log(searchData);

    // Mapping over search Image, Author, Title and Description
    const searchResult = searchData.items.map((book) => {
        const bookInfo = {};

        if (book.volumeInfo.imageLinks.smallThumnail) {
            bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
        } else {
            bookInfo.Image = "Image is not available";
        }

        if (book.volumeInfo.author) {
            bookInfo.Author = book.volumeInfo.Author;
        } else {
            bookInfo.Author = "Author is not known";
        }

        if (book.volumeInfo.title) {
            bookInfo.Title = book.volumeInfo.title;
        } else {
            bookInfo.Title = "Title is not available";
        }

        if (book.volumeInfo.description) {
            bookInfo.Description = book.volumeInfo.description;
        } else {
            bookInfo.Description = "Not available";
        }
        return bookInfo;
    });

    //     bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
    //     bookInfo.Author = book.volumeInfo.author;
    //     bookInfo.Title = book.volumeInfo.title;
    //     bookInfo.Description = book.volumeInfo.description;
    //     return bookInfo;
    // });

    createBookElement(searchResult);
};

// Click even when "Search books" is clicked
searchbooks.addEventListener("click", (e) => {
    e.preventDefault();
    const searchinput = document.getElementById("searchinput").value;
    search(searchinput);
});

// Search loop for Image, Author, Title and Description.
//     for (let i = 0; i < 10; i++) {
//         document.getElementById("imageresult" + i).src = searchResult[i].Image;

//         document.getElementById(
//             "authorresult" + i
//         ).innerHTML = `Author: ${searchResult[i].Author}`;

//         document.getElementById("titleresult" + i).innerText =
//             "Title: ${searchResult[i].Title}";

//         document.getElementById("descriptionresult" + i).innerText =
//             "Description: ${searchResult[i].Description}";
//     }
//     console.log(searchResult);
// };
