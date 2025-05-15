export interface HowWeWork {
  id: string;
  title: string;
  text: string;
  link: string;
  color: string;
}

export interface TeamMemberInterface {
  name: string;
  job: string;
  desc: string;
  fb_link: string;
  ig_link: string;
}

export interface ThreeElementInterface {
  title: string;
  text: string;
  color: string;
}

export interface GalleryPhotoInterface {
  title: string;
  date: string;
  image: string;
  link: string;
}

export interface ContactFormInterface {
  agree: boolean;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface GalleryInterface {
  datum_pridania: string;
  fotky: string[];
  nazov: string;
  id: string;
  partition_key: string;
  slug: string;
}

export interface IsLoadingMap {
  [key: string]: boolean;
}
