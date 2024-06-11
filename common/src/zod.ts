import { z } from "zod";

export const signUpInputs = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string()
})

export type signUpType = z.infer<typeof signUpInputs>

export const signInInputs = z.object({
    email: z.string().email(),
    password: z.string(),
})

export type signInType = z.infer<typeof signInInputs>

export const createPostInputs = z.object({
    title: z.string(),
    content: z.string(),
})

export type createPostType = z.infer<typeof createPostInputs>

export const updatePostInputs = z.object({
    title: z.string().email(),
    content: z.string(),
})

export type updatePostType = z.infer<typeof updatePostInputs>
