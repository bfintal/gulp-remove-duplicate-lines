# gulp-remove-duplicate-lines

Gulp plugin that removes all duplicate lines in a file.

## Installation

```
npm install --save-dev gulp-remove-duplicate-lines
```

## Usage

```js
const removeDuplicateLines = require( 'gulp-remove-duplicate-lines' );

gulp.task( 'do-something', function() {
	return gulp.src( './src/file.txt )
		.pipe( removeDuplicateLines() )
		.pipe( gulp.dest( 'dist/' ) )
} )
```

**Example Input File:**
```
one
two
three
three
four
five
two
six
six
six
```

**Output:**
```
one
two
three
four
five
six
```

## Optional Arguments

```js
.pipe( removeDuplicateLines( {
    // Regex, lines that match this will not be filtered 
    // and will always be included in the output.
    exclude: /^[A-Z]/g, 

    // Regex, lines that match this will only be parsed, 
    // if the line doesn't match this, it will always be 
    // included in the output.
    include: /^\w/g,
} ) )
```

### Examples

#### Remove duplicate lines, but exclude lines that start with uppercase letters

```js
.pipe( removeDuplicateLines( {
    // Exclude lines that start with uppercase letters.
    exclude: /^[A-Z]/g, 
} ) )
```

```
Input:
one
two
Three
Three
four
four

Output:
one
two
Three
Three
four
```

#### Remove duplicate lines, but only on lines that start with a letter

```js
.pipe( removeDuplicateLines( {
    // Include only lines that start with a letter
    include: /^\w/g,
} ) )
```

```
Input:
1
2
three
three
4
4

Output:
1
2
three
4
4
```

#### Remove duplicate lines, but only on lines that start with a letter, and exclude lines that start with uppercase letters

Technically, you can use just one regex to achieve this example, but this shows you can use both `exclude` and `include` at the same time.

```js
.pipe( removeDuplicateLines( {
    // Exclude lines that start with uppercase letters.
    exclude: /^[A-Z]/g, 
    // Include only lines that start with a letter
    include: /^\w/g,
} ) )
```

```
Input:
1
1
two
Three
Three
four
four
two

Output:
1
1
two
Three
Three
four
```