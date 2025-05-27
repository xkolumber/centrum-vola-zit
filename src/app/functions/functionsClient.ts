import imageCompression from "browser-image-compression";

export const navbar_data = [
  {
    title: "Domov",
    slug: "/domov",
  },
  {
    title: "O nás",
    slug: "/o-nas",
  },
  {
    title: "Služby",
    slug: "/#sluzby",
  },
  {
    title: "Galéria",
    slug: "/galeria",
  },

  {
    title: "Blog",
    slug: "/blog",
  },
  {
    title: "Kontakt",
    slug: "/kontakt",
  },
];

export const navbar_data_mobile = [
  {
    title: "Domov",
    slug: "/domov",
  },
  {
    title: "O nás",
    slug: "/o-nas",
  },
  {
    title: "Služby",
    slug: "/#sluzby",
  },
  {
    title: "Galéria",
    slug: "/galeria",
  },

  {
    title: "Blog",
    slug: "/blog",
  },
  {
    title: "Sponzori",
    slug: "/sponzori",
  },
  {
    title: "Spolupracujeme",
    slug: "/spolupracujeme",
  },
  {
    title: "Kontakt",
    slug: "/kontakt",
  },
];

export const aws_bucket_name = "centrumvolazitopen";

export const aws_bucket_url =
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com";

export const cloudfront_url = "https://d9xqr11l6v5wz.cloudfront.net";

export async function CompressImage(file: File) {
  try {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const BLUR_DATA_URL_GRAY =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGN48uTJf2TMQFAAAGDvLAXo+D4xAAAAAElFTkSuQmCC";

export const getFormatDate = (date: string) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

export const STALE_TIME = 1000 * 60 * 10;

export function stripHtmlTags(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
