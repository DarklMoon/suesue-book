import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";



const s3Client = new S3Client({
  region: process.env.REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    sessionToken: process.env.AWS_SESSION_TOKEN || "",
  },
});

async function uploadFileToS3(file: any, fileName: any) {

    const fileBuffer = file;
    console.log("FileName:", file);
    console.log("FileBuffer:", fileBuffer);

    const params = {
        Bucket: "test-cloudbased",
        Key: `${fileName}`,
        Body: fileBuffer,
        ContentType: "image/png"
    }

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    
    return fileName;
}

export async function POST(request: any) {
    try {

        const formData = await request.formData();
        const file = formData.get("file");

        if(!file) {
            return NextResponse.json( { error: "File is required."}, { status: 400 } );
        } 

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = await uploadFileToS3(buffer, file.name);
        console.log("FilenameS3:", fileName)

        return NextResponse.json({ success: true, filename: fileName});
    } catch (error) {
        return NextResponse.json({ error });
    }
}