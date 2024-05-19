import clientPromise from "@/lib/mongodb";
import { ZTodo } from "@/interfaces/zod/todo";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from '@auth0/nextjs-auth0';

/**
 * This TypeScript function processes a POST request by parsing the request content, validating it
 * using Zod schema, inserting data into a MongoDB database, and returning a response based on the
 * insertion result.
 * @param {Request} req - The `req` parameter in the `POST` function is typically an object
 * representing the incoming request to the server. In this case, it seems to be of type `Request`,
 * which is commonly used in web development frameworks like Express.js or similar. The `req` object
 * usually contains information about the
 * @returns If the `insertRes.insertedId` exists, the function will return `{ completed: true }`.
 * Otherwise, it will return `{ completed: false }`.
 */
export const POST = async (req: NextRequest) => {

    const content = await req.json()
    const response = ZTodo.safeParse(content);

    if (response.error) {
        const { errors } = response.error;

        return Response.json(errors, { status: 400 })
    }

    const client = await clientPromise;
    const db = client.db("todo");
    const insertRes = await db
        .collection("tasks")
        .insertOne({
            ...response.data
        })

    if (insertRes.insertedId) {
        return Response.json({ completed: true });
    }
    return Response.json({ completed: false })
}

/**
 * This TypeScript function retrieves tasks from a MongoDB database based on the user's email stored in
 * the session.
 * @param {NextRequest} req - NextRequest object containing information about the incoming request. It
 * likely includes details such as headers, body, and query parameters.
 * @returns The function GET is returning a JSON response with the properties "completed" set to true
 * and "results" containing an array of documents fetched from the "tasks" collection in the "todo"
 * database for the user stored in the session.
 */
export const GET = async (req: NextRequest) => {
    const res = new NextResponse();
    const session = await getSession(req, res);

    const client = await clientPromise;
    const db = client.db("todo");
    const getData = db
        .collection("tasks")
        .find({ user: session?.user.email })

    const documents = await getData.toArray()

    return Response.json({ completed: true, results: documents })
}