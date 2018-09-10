function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`無効なメールアドレスです:${email}`);
}

const email = "janedoe.com";

const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
  console.error(validateEmail.message);
} else {
  console.log(`正しいメールアドレスです:${email}`);
}