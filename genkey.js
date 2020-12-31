// Node.js program to demonstrate the	 
// crypto.createCipheriv() method 

// Includes crypto module 
const crypto = require('crypto'); 

// Difining algorithm 
const algorithm = 'aes-256-cbc'; 

// Defining key 
const key = crypto.randomBytes(32); 

// Defining iv 
const iv = crypto.randomBytes(16); 

// An encrypt function 
function encrypt(text) { 

// Creating Cipheriv with its parameter 
let cipher = crypto.createCipheriv( 
	'aes-256-cbc', Buffer.from(key), iv); 

// Updating text 
let encrypted = cipher.update(text); 

// Using concatenation 
encrypted = Buffer.concat([encrypted, cipher.final()]); 

// Returning iv and encrypted data 
    return {
        iv: iv.toString('base64'),
        encryptedData: encrypted.toString('base64')
    }; 
} 

// Displays output 
var output = encrypt(String(process.env.SECRET_KEY)); 
console.log(output); 
