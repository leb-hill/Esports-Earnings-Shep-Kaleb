# Esports-Earnings-Shep-Kaleb

The function getColumn() returns a single column from a csv fie as an array. The csv must be hosted online and accessed through a url.

Returns a column from a csv file at the given url as a list.
@param url {string} - the url to the raw csv contents
@param columnNumber {number} - the column you'd like as a list (the first column is 0)
@return column {list} - the list containing the specified column contents
function getColumn(url, columnNumber)

A helper function that returns the specified column from a 2D Array.
@param matrix {2D array} - the 2D array
@param col {number} - the desired column (the first column is 0)
@return column {lsit} - the desired column as a list
function getCol(matrix, col)
