export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  var x = `referral_key=${userId};max-age=${expiresAt.toISOString()};domain=example.com`;
}