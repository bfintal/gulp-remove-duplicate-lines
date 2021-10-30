const through = require( 'through2' ),
	PluginError = require( 'plugin-error' );

module.exports = function ( opt ) {
	return through.obj( function ( file, enc, cb ) {
		if ( file.isNull() ) {
			cb( null, file );
			return;
		}

		if ( file.isStream() ) {
			cb( new PluginError( 'gulp-remove-duplicate-lines', 'Streaming not supported' ) );
			return;
		}

		let str = file.contents.toString( enc );
		const lines = str.split( /\r\n|\r|\n/g );

		const newLines = lines.reduce( ( newLines, line ) => {
			if ( opt.exclude && line.match( opt.exclude ) ) {
				newLines.push( line );
				return newLines;
			}
			if ( opt.include && ! line.match( opt.include ) ) {
				newLines.push( line );
				return newLines;
			}
			if ( line && ! newLines.includes( line ) ) {
				newLines.push( line );
			}
			return newLines;
		}, [] )

		str = newLines.join( '\n' );
		file.contents = Buffer.from( str );

		this.push( file );

		cb();
	} );
};