export interface Dog {
  [x: string]: any;
  title: string;
  url: string;
}

export async function fetchPictures(length = 10) {
  try {
    const res = await fetch(
      "https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json"
    );
    if (!res.ok) {
      throw new Error("response is bad");
    }
    const dogs: Dog[] = [];
    const json = await res.json();

    json.data.children.forEach((item: Dog) => {
      const title = item.data.title;
      const url = item.data.preview?.images[0]?.resolutions[2]?.url;
      if (url) {
        dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
      }
    });
    return dogs.slice(0, length);
  } catch (error) {
    console.log(error);
  }
}
