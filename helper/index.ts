export enum SuggestionRequestType {
    CONTACT_FORM = "CONTACT_FORM",
    CLIENT_TESTIMONIAL_FORM = "CLIENT_TESTIMONIAL_FORM",
    TEAM_MEMBER_FORM = "TEAM_MEMBER_FORM",
    PRICING_TABLE_FORM = "PRICING_TABLE_FORM",
}
export const NoImage = "https://via.placeholder.com/150?text=No+Image";

export interface ImageByte {
    file_name: string;
    data: string;
    type: string;
}

export const encodeFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject("No file found");
        }
        if (!isFileSizeValid(file.size)) {
            reject("File is too large!");
        }

        if (!checkFileFormat(file)) {
            reject(
                "Invalid file format! Only JPEG, PNG, JPG, and SVG are allowed."
            );
        }

        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result as string;
            if (typeof result === "string") {
                const base64String = result.split(",")[1];
                resolve(base64String);
            }
        };

        reader.onerror = function (e) {
            reject("Error reading file: " + e.target?.error);
        };

        reader.readAsDataURL(file);
    });
};

const MAX_SIZE_MB = 3;
export const isFileSizeValid = (fileSize: number): boolean => {
    const maxSize = 1024 * 1024 * MAX_SIZE_MB;
    return fileSize <= maxSize;
};

function checkFileFormat(file: File): boolean {
    const allowedFormats = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/svg+xml",
    ];
    return allowedFormats.includes(file.type);
}

// form checker
const formTypeList = [
    SuggestionRequestType.CONTACT_FORM,
    SuggestionRequestType.CLIENT_TESTIMONIAL_FORM,
    SuggestionRequestType.TEAM_MEMBER_FORM,
    SuggestionRequestType.PRICING_TABLE_FORM,
];

export const needsFormFill = (suggestion_types: string[]) => {
    return (
        suggestion_types &&
        suggestion_types.some((t) => formTypeList.includes(t as SuggestionRequestType))
    );
};

// image decode
export function decodeBase64(image: ImageByte | null): string {
    if (image === null || !image.data || !image.type) {
        return NoImage;
    }
    return `data:${image.type};base64,${image.data}`;
}

export function parseBase64Image(base64String: string) {
    const matches = base64String.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
        throw new Error("Invalid input: not a data URI");
    }
    return {
        type: matches[1],
        data: matches[2],
    };
}

export function generateImageBytesObjectFromBase64(
    base64String: string | null,
    text: string
): ImageByte {
    if (base64String === null) {
        return {
            file_name: "",
            data: "",
            type: "",
        };
    }
    const { data, type } = parseBase64Image(base64String);
    const extension = type.split("/")[1];
    const file_name = `${text.toLowerCase().split(" ").join("_")}.${extension}`;
    return {
        data,
        type,
        file_name,
    };
}
