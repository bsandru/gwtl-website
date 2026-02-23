"use client";

import { Upload, X, Image as ImageIcon, CheckCircle2 } from "lucide-react";
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
import { uploadImage } from "@/lib/actions";

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    placeholder?: string;
}

export function ImageUpload({
    value,
    onChange,
    placeholder = "Click or drag image to upload",
}: ImageUploadProps) {
    const dropzone = useDropzone<string, string>({
        onDropFile: async (file) => {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const data = await uploadImage(formData);

                if (!data.success) {
                    return {
                        status: "error",
                        error: data.error || "Upload failed",
                    };
                }

                onChange(data.url!);
                return { status: "success", result: data.url! };
            } catch {
                return { status: "error", error: "Network error during upload" };
            }
        },
        onRemoveFile: () => {
            onChange("");
        },
        validation: {
            accept: {
                "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
            },
            maxSize: 10 * 1024 * 1024,
            maxFiles: 1,
        },
    });

    if (value && dropzone.fileStatuses.length === 0) {
        return (
            <div className="relative rounded-xl overflow-hidden border border-border bg-muted/20 group">
                <img
                    src={value}
                    alt="Featured image"
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-destructive hover:text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                >
                    <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 inset-x-0 px-3 py-1.5 bg-background/70 text-xs text-muted-foreground truncate opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}
                </div>
            </div>
        );
    }

    const uploadedFile = dropzone.fileStatuses.find(
        (f) => f.status === "success"
    );

    if (uploadedFile && value) {
        return (
            <div className="relative rounded-xl overflow-hidden border border-border bg-muted/20 group">
                <img
                    src={value}
                    alt="Uploaded image"
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-emerald-600/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Uploaded
                </div>
                <button
                    type="button"
                    onClick={() => {
                        dropzone.onRemoveFile(uploadedFile.id);
                        onChange("");
                    }}
                    className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-destructive hover:text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                >
                    <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 inset-x-0 px-3 py-1.5 bg-background/70 text-xs text-muted-foreground truncate opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}
                </div>
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
