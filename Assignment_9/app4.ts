var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
for (var _i = 0, library_1 = library; _i < library_1.length; _i++) {
    var book = library_1[_i];
    console.log(`Book Name: ${book.title}\nAuthor Name: ${book.author}\nReading Status: ${book.readingStatus}`);
}