import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hash = async (text: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(text, salt);
  return hash;
};

export const generateToken = async (data: any, options: jwt.SignOptions = {}) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is missing');
  }
  const p = new Promise((resolve, reject) => {
    jwt.sign(data, JWT_SECRET, options, (err: Error, token: string) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
  const token = await p;
  return token;
};

export const decodeToken = async <T>(token: string): Promise<T> => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is missing');
  }
  const p = new Promise<T>((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (e: Error, decoded: any) => {
      if (e) return reject(e);
      resolve(decoded);
    });
  });
  const decoded = await p;
  return decoded;
};

export const compareHash = async (hash: string, expected: string) => {
  const valid = bcrypt.compare(expected, hash);
  return valid;
};
