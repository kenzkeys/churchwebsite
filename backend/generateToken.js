import crypto from "crypto";

function generateToken(length) {
  return crypto.randomBytes(length).toString("hex");
}

const tokenLength = 16; // Adjust the length as needed
const token = generateToken(tokenLength);
console.log(`Generated Token: ${token}`);
