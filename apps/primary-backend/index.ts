import {prismaClient} from "db/client"
import {redisClient} from "redis/client";
import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/project",async(req,res)=> {
  const {prompt}=req.body;
  
})