import { signInInputs, signUpInputs } from '@jaya5063/inkwell-common/dist/zod';
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    variables: {
        userId: string
    }
}>();

userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const success = signInInputs.safeParse(body)
    if (!success) {
        c.status(403)
        return c.text("Invalid Inputs")
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password,
            }
        })
        if (!user) {
            c.status(411)
            return c.json({
                msg: "Invalid User"
            })
        }

        const token = await sign({ id: user?.id }, c.env.JWT_SECRET);

        return c.text(token)
    } catch {
        return c.text("error while signing in!!")
    }
});

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const success = signUpInputs.safeParse(body);
    if (!success) {
        c.status(403)
        return c.text("Invalid Inputs")
    }

    try {
        const exist = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (exist) {
            c.status(403)
            return c.text("User Already Exists")
        }

        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: body.password,
            },
        });

        if (!user) {
            c.status(403)
            return c.json({
                msg: "invalid User"
            })
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.text(token)
    } catch (error) {
        return c.json({
            msg: "missing credentials"
        })
    }
})