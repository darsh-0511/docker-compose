import express from 'express'
import { PrismaClient } from './generated/prisma';


const app = express();
const prismaClient = new PrismaClient();

app.get('/', async (req,res)=>{
    const data = await prismaClient.user.findMany()
        
    res.json({
        message:"Get endpoint",
        data:data
    })
})

app.post('/', async (req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json({
        message:"Post endpoint"
    })
})

app.listen(3000);
