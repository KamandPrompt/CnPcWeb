const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Recruiter = mongoose.model("recruiters");
const Student = mongoose.model("students");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Recruiter.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
        })
        .catch((err) => console.log(err));
      Student.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
        })
        .catch((err) => console.log(err));
      return done(null, false);
    })
  );
};
