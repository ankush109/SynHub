/* eslint-disable @typescript-eslint/no-extraneous-class */
import jwt, { JwtPayload } from "jsonwebtoken";

const JWTOptions = {
  algorithm: "HS256",
  issuer: "docurum.com",
};

class JWTService {
  static sign(payload, userId, expiry, secret) {
    const secretKey = secret + userId;
    return jwt.sign(payload, secretKey, { ...JWTOptions, expiresIn: expiry, audience: userId });
  }

  static verify(token, userId, secret) {
    const secretKey = secret + userId;
    return jwt.verify(token, secretKey, JWTOptions);
  }

  static decode(token) {
    const decodedJWT = jwt.decode(token, { complete: true });
    if (decodedJWT?.header.alg !== JWTOptions.algorithm && decodedJWT?.header.typ !== "JWT") {
      throw new jwt.JsonWebTokenError("Headers don't match");
    }
    if ((decodedJWT.payload).iss !== JWTOptions.issuer) {
      throw new jwt.JsonWebTokenError("Issuer don't match");
    }
    if ((decodedJWT.payload).id !== (decodedJWT.payload).aud) {
      throw new jwt.JsonWebTokenError("Audience don't match");
    }
    return decodedJWT.payload;
  }
}

export default JWTService;
