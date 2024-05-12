export interface BookDto{
  bookId:string,
  bookName:string,
  bookPreviewImage:string|any|File,
  bookResource:string|any|File,
  bookCategory:string,
  pages:string,
  activeState:boolean,
  date:string,
}
