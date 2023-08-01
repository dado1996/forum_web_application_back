import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

export function hash(input: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(input, salt, 64).toString('hex');

  return `${salt}:${hash}`;
}

export function validate(input: string, hash: string) {
  const [salt, key] = hash.split(':');
  const hashedBuffer = scryptSync(input, salt, 64);

  const keyBuffer = Buffer.from(key, 'hex');
  return timingSafeEqual(hashedBuffer, keyBuffer);
}
