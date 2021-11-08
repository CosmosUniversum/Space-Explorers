import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { User } from '../models/user.js'
import { Explorer } from '../models/explorer.js'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, explorer, done) {
      User.findOne({ googleId: explorer.id }, function (err, user) {
        if (err) return done(err)
        if (user) {
          return done(null, user)
        } else {
          const newExplorer = new Explorer({
            name: explorer.displayName,
            avatar: explorer.photos[0].value,
          })
          const newUser = new User({
            email: explorer.emails[0].value,
            googleId: explorer.id,
            explorer: newExplorer._id
          })
          newExplorer.save(function (err) {
            if (err) return done(err)
          })
          newUser.save(function (err) {
            if (err) {
              // Something went wrong while making a user - delete the profile
              // we just created to prevent orphan profiles.
              Explorer.findByIdAndDelete(newExplorer._id)
              return done(err)
            }
            return done(null, newUser)
          })
        }
      })
    }
  )
)

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id)
  .populate('explorer', 'name avatar')
  .exec(function(err, user) {
    done(err, user)
  })
})
