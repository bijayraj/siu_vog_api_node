module.exports = function (app) {
    app.use('/api/v1', require('./unauth.routes'));
    app.use('/api/v1/user', require('./user.routes'));
    app.use('/api/v1/member', require('./member.routes'));
    app.use('/api/v1/exercise', require('./exercise.routes'));
    app.use('/api/v1/user-exercise', require('./user-exercise.routes'));


}