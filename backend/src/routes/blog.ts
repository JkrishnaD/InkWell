import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    variables: {
        userId: string
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const jwt = c.req.header("Authorization") || "";

    if (!jwt) {
        c.status(403);
        return c.json({ error: "token is not provided" });
    }
    const token = jwt;

    const verification = await verify(token, c.env.JWT_SECRET);
    if (!verification) {
        c.status(403);
        return c.json({ error: "unAuthorized" });
    }
    //@ts-ignore
    c.set("userId", verification.id as string);
    console.log(verification.id);
    await next();
});

blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    console.log("hello");
    const body = await c.req.json();
    //@ts-ignore
    const authorId = c.get("userId");
    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (error) {
        console.log(error);
    }
})

blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json()

    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id
    })
});

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.post.findMany({
        select: {
            title: true,
            content: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
    return c.json({
        blog
    })
})

blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param("id");
    const blog = await prisma.post.findUnique({
        where: {
            id: id.toString(),
        }, select: {
            title: true,
            content: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
    return c.json({
        blog
    })
})

blogRouter.delete("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param("id")
    const blog = await prisma.post.delete({
        where: {
            id: id.toString()
        }
    });
    return c.json({
        blog
    })
})