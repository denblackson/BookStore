
namespace BookStore.Domain.Models
{
    public class Book
    {
        public const int MAX_TITLE_LENGTH = 250;

        public Guid Id { get; }
        public string Title { get; } = string.Empty;
        public string Description { get; } = string.Empty;
        public decimal Price { get; }

        private Book(Guid id, string title, string description, decimal price)
        {
            Id = id;
            Title = title;
            Description = description;
            Price = price;
        }

        public static (Book book, string errorMsg) Create(Guid id, string title, string description, decimal price)
        {
            var errorMSg = string.Empty;

            if (string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                errorMSg = $"Title can not be null or empty, and title max length is {MAX_TITLE_LENGTH}";
            }

            var book = new Book(id, title, description, price);

            return (book, errorMSg);
        }
    }
}
