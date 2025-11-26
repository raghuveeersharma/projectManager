declare module "cookie-session" {
  import { RequestHandler } from "express";

  interface CookieSessionOptions {
    name?: string;
    keys?: string[];
    maxAge?: number;
    secure?: boolean;
    httpOnly?: boolean;
    domain?: string;
    path?: string;
    sameSite?: boolean | "lax" | "strict" | "none";
  }

  function cookieSession(options?: CookieSessionOptions): RequestHandler;

  export default cookieSession;
}
