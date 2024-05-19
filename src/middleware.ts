import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

// export default () => { };
export default withMiddlewareAuthRequired();