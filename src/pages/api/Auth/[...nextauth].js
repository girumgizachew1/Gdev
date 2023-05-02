import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        // Add your own authentication logic here
        const response = await fetch("/api/Login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        if (response.ok) {
          return {
            token: data.token,
            email: email
          };
        } else {
          throw new Error(data.message);
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  jwt: {
    secret: "my-secret-key",
    encryption: true,
    signingKey: "signingKey",
    encryptionKey: "encryptionKey"
  }
};

export default (req, res) => NextAuth(req, res, options);
