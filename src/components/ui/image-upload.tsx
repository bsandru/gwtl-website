"use client";

import { Upload, X, Image as ImageIcon } from "lucide-react";
import {
    Dropzone,
    DropZoneArea,
    DropzoneDescription,
    DropzoneFileList,
    DropzoneFileListItem,
    DropzoneMessage,
    DropzoneRemoveFile,
    DropzoneTrigger,
    InfiniteProgress,
    useDropzone,
} from "@/components/ui/dropzone";

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    placeholder?: string;
}

/**
 * Image upload component using shadcn-dropzone
 * For now, it simulates upload and stores the file as a data URL
 * In production, replace onDropFile with actual upload to your storage
 */
export function ImageUpload({
    value,
    onChange,
    placeholder = "Click or drag image to upload",
}: ImageUploadProps) {
    const dropzone = useDropzone<string, string>({
        onDropFile: async (file) => {
            // Simulate upload - in production, upload to your storage service
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const dataUrl = reader.result as string;
                    onChange(dataUrl);
                    resolve({ status: "success", result: dataUrl });
                };
                reader.onerror = () => {
                    resolve({ status: "error", error: "Failed to read file" });
                };
                reader.readAsDataURL(file);
            });
        },
        onRemoveFile: () => {
            onChange("");
        },
        validation: {
            accept: {
                "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
            },
            maxSize: 10 * 1024 * 1024, // 10MB
            maxFiles: 1,
        },
    });

    // If there's already a value and no files in dropzone, show the preview
    if (value && dropzone.fileStatuses.length === 0) {
        return (
            <div className="relative rounded-xl overflow-hidden border border-border bg-muted/20">
                <img
                    src={value}
                    alt="Uploaded image"
                    className="w-full h-48 object-cover"
                />
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        );
    }

    return (
        <Dropzone {...dropzone}>
            <DropzoneDescription className="text-muted-foreground">
                PNG, JPG, GIF or WebP up to 10MB
            </DropzoneDescription>
            <DropzoneMessage />
            <DropZoneArea className="flex-col gap-2 py-8 border-dashed">
                <DropzoneTrigger className="flex flex-col items-center gap-2 bg-transparent hover:bg-muted/50 px-6 py-4 rounded-lg transition-colors">
                    <div className="p-3 bg-muted rounded-full">
                        <Upload className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{placeholder}</span>
                </DropzoneTrigger>
                <DropzoneFileList>
                    {dropzone.fileStatuses.map((file) => (
                        <DropzoneFileListItem key={file.id} file={file}>
                            <div className="flex items-center gap-3">
                                <ImageIcon className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm truncate flex-1">{file.fileName}</span>
                                <DropzoneRemoveFile
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                >
                                    <X className="w-4 h-4" />
                                </DropzoneRemoveFile>
                            </div>
                            <InfiniteProgress status={file.status} />
                        </DropzoneFileListItem>
                    ))}
                </DropzoneFileList>
            </DropZoneArea>
        </Dropzone>
    );
}

export default ImageUpload;
