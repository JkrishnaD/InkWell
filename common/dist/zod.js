"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInputs = exports.createPostInputs = exports.signInInputs = exports.signUpInputs = void 0;
const zod_1 = require("zod");
exports.signUpInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    name: zod_1.z.string()
});
exports.signInInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.createPostInputs = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updatePostInputs = zod_1.z.object({
    title: zod_1.z.string().email(),
    content: zod_1.z.string(),
});
