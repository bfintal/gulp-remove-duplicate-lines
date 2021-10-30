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
