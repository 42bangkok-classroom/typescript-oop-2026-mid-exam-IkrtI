export interface FullAlbum {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
}
export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

import axios from "axios";

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";

export async function mapPhotoToAlbum(
  userIds?: number[]
): Promise<FullAlbum[]> {
  if (!userIds || userIds.length == 0) return [];
  let photos: Photo[] = (await axios({
    url: PHOTOS_URL,
  })
    .then((res) => res.data)
    .catch((x) => {
      return [];
    })) as Photo[];
  if (!photos) return [];
  let album: Album[] = (await axios({
    url: ALBUMS_URL,
  })
    .then((res) => res.data)
    .catch((x) => {
      return [];
    })) as Album[];
  if (!album) return [];
  const Full: FullAlbum[] = [];
  for (let index = 0; index < userIds.length; index++) {
    const userId = userIds[index];
    let albumx: Album[] = [];
    albumx = album.filter((d) => d.userId == userId);
    albumx.forEach((alb) => {
      let x = photos.filter((pho) => pho.albumId == alb.id);
      let X: Photo[] = [];
      x.forEach((d) => {
        X.push(d);
      });

      Full.push({
        ...alb,
        photos: X,
      });
    });
  }
  return Full;
}

// mapPhotoToAlbum([1]);
