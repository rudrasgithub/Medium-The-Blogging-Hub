import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signInInput, signUpInput } from "@rudrasnpm/medium-common";

export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();

userRouter.post('/signup',async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    const body=await c.req.json()
    const {success}=signUpInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Invalid Inputs"
        })
    }
    const existingUser=await prisma.user.findUnique({
        where:{
            email:body.email,
        }
    })
    if(existingUser){
        c.status(411);
        return c.json({
            message:"Email already exists"
        })
    }
    const user=await prisma.user.create({
        data:{
            name: body.name,
            email:body.email,
            password:body.password
        }
    })
    console.log("done");
    const token=await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({
        jwt:token
    })
})
userRouter.post('/signin',async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    const body=await c.req.json()
    const {success}=signInInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Invalid Inputs"
        })
    }
    const user=await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    })
    if(!user){
        c.status(403);
        return c.json({error:"user not found"});
    }
    const token=await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
        jwt:token
    })
})