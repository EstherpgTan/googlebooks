// Array to target Index
const createBookElement = (array) => {
    const bookIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < bookIndex.length; i++) {
        const bookIndexTarget = bookIndex[i];

        const newElementTitle = document.createElement("h4");

        const nodeTitle = document.createTextNode(
            // Adds Template literal Strings for all the book sections
            `Title: ${array[bookIndexTarget].Title}`
        );

        newElementTitle.appendChild(nodeTitle);
        const parentTypeTitle = document.getElementById(
            "results" + bookIndexTarget
        );
        parentTypeTitle.appendChild(newElementTitle);

        // <--- Author ----> //
        const newElementAuthor = document.createElement("h5");
        const nodeAuthor = document.createTextNode(
            `Author: ${array[bookIndexTarget].Author}`
        );
        newElementAuthor.appendChild(nodeAuthor);
        const parentTypeAuthor = document.getElementById(
            "results" + bookIndexTarget
        );
        parentTypeAuthor.appendChild(newElementAuthor);

        // <--- Description ----> //
        const newElementDescription = document.createElement("p");
        const nodeDescription = document.createTextNode(
            `Description: ${array[bookIndexTarget].Description}`
        );
        newElementDescription.appendChild(nodeDescription);
        const parentTypeDescription = document.getElementById(
            "results" + bookIndexTarget
        );
        parentTypeDescription.appendChild(newElementDescription);

        // <-- Images ---> //
        const newElementImage = document.createElement("img");
        newElementImage.setAttribute("src", array[bookIndexTarget].Image);
        newElementImage.setAttribute("alt", "na");
        const parentTypeImage = document.getElementById(
            "results" + bookIndexTarget
        );
        parentTypeImage.appendChild(newElementImage);
    }
};

export default createBookElement;
