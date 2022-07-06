import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {Book} from "./book-list/book.model";

export interface AppState {
  books: Array<Book>;
  collection: Array<string>;
  testCount: number
}

export const addBook = createAction(
  '[books] Add Book',
  props<{ bookId: any }>()
);

export const removeBook = createAction(
  '[books] Remove Book',
  props<{ bookId: any }>()
);

export const retrievedBookList = createAction(
  '[books] Retrieve Books Success',
  props<{ books: Array<Book> }>()
);

export const initialState: AppState = {books:[], collection:[], testCount:0};

export const bookReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => {
    const newState = { ...state, books:books, testCount:3 }
    console.log(newState)
    return newState
  })
)

export const selectBooks = (state:any) => state.books;


export const selectCollectionState = createFeatureSelector<
  AppState,
  Array<string>
  >("collection");

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books: Array<Book>, collection: Array<string>) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );
