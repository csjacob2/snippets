# Cryptography
**_A range of cryptography questions and solutions using the CryptoJS library for security class assignments._**

1. Decrypt AES (`decrypt_aes.html`): Decrypt a ciphertext when given the 128-bit Initialization Vector and a 256-bit key.
2. Break a Weak AES Key (`breaking_aes.html`): Break a ciphertext when not supplied with the encryption key but given the hint that it is 256 bits long with the 251 leftmost bits are all 0s and the Initialization Vector set to 0.
3. SHA256 Encryption (`sha_generation.html`): Compute the SHA-256 hash of a plaintext string.
4. Weak Hashing Algorithm (`weak_hashing.html`): Using a weak cryptographic hashing algorithm, find a second string that encrypts into the same output, showing a collision (it is not second preimage resistant).
5. Computing multiplicative inverse modulo _n_: Compute the inverse of _x mod N_.
6. Brute force password cracking: Crack 10 "easy" MD5 hashed passwords using a brute force method. The passwords are taken from the "10,000 Top Passwords" list and are in increasing order of difficulty.