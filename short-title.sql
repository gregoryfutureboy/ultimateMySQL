-- SELECT
--   CONCAT(SUBSTRING(title, 1, 10), '...') AS 'SHORT TITLE'
-- from books;

-- SELECT
--   CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long.')
--   AS 'Test'
-- from books;

SELECT title FROM books WHERE title LIKE '%stories%';

SELECT title, pages from books ORDER BY pages DESC LIMIT 1;

SELECT CONCAT_WS(' - ', title, released_year) AS 'summary' FROM books ORDER BY released_year DESC LIMIT 3;

SELECT title, author_lname FROM books WHERE author_lname LIKE '%\ %';

SELECT title, released_year, stock_quantity FROM books ORDER BY 3 LIMIT 3;

SELECT title, author_lname FROM books ORDER BY 2, 1;

SELECT UPPER(CONCAT('My favourite author is ', CONCAT_WS(' ', author_fname, author_lname), '!')) AS 'yell' FROM books ORDER BY author_lname;