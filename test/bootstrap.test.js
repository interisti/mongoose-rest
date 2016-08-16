import mongoose from 'mongoose';

/**
 * Global before hook
 */
before(done => {
	mongoose.connect('mongodb://localhost:27017/restDB', done);
});

/**
 * Global after hook
 */
after(done => {
	// here you can clear fixtures, etc.
	// remove database
	mongoose.connection.db.dropDatabase();

	done();
});
