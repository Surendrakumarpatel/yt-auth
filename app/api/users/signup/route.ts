import { connect } from "@/database/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); 
        const { username, email, password } = body;
        let user = await User.findOne({email});
        if(user)
            return NextResponse.json({error:"User already exists"}, {status:400});
        
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        user = await User.create({
            username,
            email,
            password:hashedPassword,
        });

        return NextResponse.json({message:"User registered successfully!"}, {status:201});
        
    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500});
    }
}