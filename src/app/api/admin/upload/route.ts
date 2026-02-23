import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const uploadDirectory = path.join(process.cwd(), "public", "images", "news");

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/webp",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only PNG, JPG, GIF, and WebP are allowed." },
        { status: 400 }
      );
    }

    const maxSize = 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 1MB." },
        { status: 400 }
      );
    }

    const ext = path.extname(file.name) || `.${file.type.split("/")[1]}`;
    const baseName = sanitizeFilename(path.basename(file.name, ext));
    const fileName = `${baseName}${ext}`;
    // if the file already exists, delete it
    if (fs.existsSync(path.join(uploadDirectory, file.name))) {
      fs.unlinkSync(path.join(uploadDirectory, file.name));
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(uploadDirectory, fileName);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/images/news/${fileName}`;

    return NextResponse.json({ success: true, url: publicUrl, fileName });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
