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
  photo: string;
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

export interface ActualityInterface {
  author: string;
  id: string;
  title: string;
  date: string;
  slug: string;
  title_photo: string;
  partition_key: "all";
  text1: string;
  text2: string;
  text3: string;
  photo1: string;
  photo2: string;
  photo3: string;
  another_photos: string[];
  viditelnost: boolean;
}

export interface SponsorInterface {
  id: string;
  link: string;
  logo: string;
  title: string;
  partition_key: "all";
  priority: number;
}

export interface CooperationInterface {
  id: string;
  link: string;
  logo: string;
  title: string;
  partition_key: "all";
  priority: number;
}

export interface BlogInterface {
  author: string;
  id: string;
  title: string;
  date: string;
  slug: string;
  title_photo: string;
  partition_key: "all";
  text1: string;
  text2: string;
  text3: string;
  photo1: string;
  photo2: string;
  photo3: string;
  video1: string;
  video2: string;
  video3: string;
  another_photos: string[];
  viditelnost: boolean;
}
