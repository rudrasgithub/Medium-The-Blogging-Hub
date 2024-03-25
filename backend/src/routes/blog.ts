import {PrismaClient} from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from '@rudrasnpm/medium';

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string;
    }
}>();
blogRouter.use("/*",async(c,next)=>{
    const authorization=c.req.header("authorization") || "";
    try{
        const user=await verify(authorization,c.env.JWT_SECRET)
        if(user){
            c.set("userId",user.id);
            await next();
        }else{
            c.status(403);
            return c.json({message:"You are not logged in"});
        }
    }catch(e){
        c.status(403);
        return c.json({
            message:"Unauthorized"
        })
    }
})
blogRouter.post('/',async(c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const authorId=c.get('userId');
    const body=await c.req.json();
    const {success}=createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Invalid Blog Inputs"
        })
    }
    const blog=await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(authorId)
        }
    })
    return c.json({
        id:blog.id
    })
})
blogRouter.put('/',async(c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body=await c.req.json();
    const {success}=updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Invalid Update Blog Inputs"
        })
    }
    const blog=await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
    return c.json({
        blog:blog
    })
})
blogRouter.get('/user/:id',async(c)=>{
    const id=c.req.param("id");
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const userblogs=await prisma.blog.findMany({
        where:{
            id:Number(id)
        },
        select:{
            content:true,
            title:true,
        }
    })
    if(!userblogs){
        return c.json({
            message:"You haven't published any public blogs yet."
        })
    }
    return c.json({
        userblogs
    })
})
blogRouter.get('/bulk',async(c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const blogs=await prisma.blog.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });
    return c.json({
        blogs
    })
})
blogRouter.delete('/:id',async(c)=>{
    const blogId=c.req.param("id"); 
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    await prisma.blog.delete({
        where:{
            id:Number(blogId)
        }
    })
    return c.json({message:"Blog deleted successfully"})
})
blogRouter.get('/:id',async(c)=>{
    const blogId=c.req.param("id"); 
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try{
        const blog=await prisma.blog.findFirst({
            where:{
                id:Number(blogId)
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                },
                authorId:true
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching blog post`"
        })
    }
})
