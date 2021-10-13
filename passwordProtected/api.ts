import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
import compare from 'safe-compare';
import { NextApiRequest, NextApiResponse } from 'next';
import { checkCookieLogin, COOKIE_NAME, PASSWORD } from './utils';

type ResponseData = {
  message: string;
};

export const login = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  try {
    if (req.method !== 'POST') {
      throw new Error('Invalid method.');
    }

    if (!req.body.password) {
      throw new Error('Invalid request.');
    }

    const password = PASSWORD;
    const { password: providedPassword } = req.body;

    if (compare(providedPassword, password)) {
      res.setHeader(
        'Set-Cookie',
        serialize(COOKIE_NAME, jwt.sign({}, password), {
          httpOnly: true,
          sameSite: false,
          path: '/',
          maxAge: 60 * 60 * 24,
        })
      );
      res.status(200).end();
    } else {
      throw new Error('Invalid password');
    }
    return;
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      res.status(401).end();
      return;
    }
    res.status(500).json({ message: err?.message || 'An error has occured.' });
  }
  res.status(200).json(req.body);
};

export const check = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  try {
    if (req.method !== 'GET') {
      throw new Error('Invalid method.');
    }

    if (checkCookieLogin(req)) {
      res.status(200).end();
    }
    res.status(401).end();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      res.status(401).end();
      return;
    }

    res.status(500).json({ message: err?.message || 'An error has occured.' });
  }
  res.status(200).end();
};
