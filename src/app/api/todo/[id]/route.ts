import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    if (ObjectId.isValid(params.id)) {
        const client = await clientPromise;
        const db = client.db("todo");
        const getData = await db
            .collection("tasks")
            .findOneAndDelete({ _id: new ObjectId(params.id) })

        const documents = getData?._id

        return Response.json({ completed: true, results: documents })
    } else {
        return Response.json({ completed: false, results: [] }, { status: 400 })
    }
}

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    let payload = await req.json()

    if (ObjectId.isValid(params.id)) {

        delete payload["_id"]

        const updateDocument = {
            $set: {
                ...payload
            },
        };

        console.log(updateDocument)

        const client = await clientPromise;
        const db = client.db("todo");
        const getData = await db
            .collection("tasks")
            .updateOne({ _id: new ObjectId(params.id) }, updateDocument)

        console.log(getData)
        return Response.json({ completed: true, results: getData })
    } else {
        return Response.json({ completed: false, results: [] }, { status: 400 })
    }
}