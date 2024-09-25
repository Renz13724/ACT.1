class Book:
    def __init__(self, title, author, borrower, status):
        self.title = title
        self.author = author
        self.borrower = borrower
        self.status = status

    def display_book(self):
        print(f"Title: {self.title}, Author: {self.author}, Borrower: {self.borrower}, Status: {self.status}")

# Create book objects
book1 = Book("1984", "George Orwell", "Alice", "Borrowed")
book2 = Book("To Kill a Mockingbird", "Harper Lee", "Charlie", "Borrowed")
book3 = Book("The Great Gatsby", "F. Scott Fitzgerald", "", "Available")
book4 = Book("War and Peace", "Leo Tolstoy", "Alice", "Borrowed")
book5 = Book("Pride and Prejudice", "Jane Austen", "Diana", "Borrowed")
book6 = Book("Brave New World", "Aldous Huxley", "", "Available")
book7 = Book("The Catcher in the Rye", "J.D. Salinger", "Bob", "Borrowed")
book8 = Book("Crime and Punishment", "Fyodor Dostoevsky", "Eve", "Borrowed")
book9 = Book("The Lord of the Rings", "J.R.R. Tolkien", "Charlie", "Borrowed")
book10 = Book("The Hobbit", "J.R.R. Tolkien", "Charlie", "Borrowed")

# Display information for books borrowed by Alice
print("Books borrowed by Alice:")
for book in [book1, book4]:
    book.display_book()

# Display information for the available book
print("\nAvailable book:")
for book in [book3]:
    book.display_book()

# Display information for books written by J.R.R. Tolkien and Jane Austen
print("\nBooks written by J.R.R. Tolkien and Jane Austen:")
for book in [book9, book10, book5]:
    book.display_book()
    
    
