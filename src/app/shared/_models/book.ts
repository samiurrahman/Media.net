export namespace BooksModel {

    export class Book {
        constructor(
            books: Booktype[],
            favourites: Booktype[]
        ) {}
    }

    export class Booktype {
        constructor(
            id: string,
            bookName: string,
            auther: string,
            bookPrice: string,
            isFav = false
        ) { }
    }
}
