import { client } from "./client";

export async function getPracticeAreas(language: string) {
    const query = `*[_type == "practiceArea"]{
    "title": select(
      $language == 'tr' => title_tr,
      title_en
    ),
    "slug": slug.current,
    "description": select(
      $language == 'tr' => description_tr,
      description_en
    ),
    "content": select(
      $language == 'tr' => content_tr,
      content_en
    ),
    "image": image.asset->url
  }`;

    return client.fetch(query, { language });
}

export async function getPracticeAreaBySlug(slug: string, language: string) {
    const query = `*[_type == "practiceArea" && slug.current == $slug][0]{
    "title": select(
      $language == 'tr' => title_tr,
      title_en
    ),
    "slug": slug.current,
    "description": select(
      $language == 'tr' => description_tr,
      description_en
    ),
    "content": select(
      $language == 'tr' => content_tr,
      content_en
    ),
    "image": image.asset->url
  }`;

    return client.fetch(query, { slug, language });
}

export async function getPracticeAreaBySlugRaw(slug: string) {
    const query = `*[_type == "practiceArea" && slug.current == $slug][0]{
      title_en,
      title_tr,
      "slug": slug.current,
      description_en,
      description_tr,
      content_en,
      content_tr,
      "image": image.asset->url
  }`;
    return client.fetch(query, { slug });
}

export async function getAllPracticeAreas() {
    const query = `*[_type == "practiceArea"]{
      title_en,
      title_tr,
      "slug": slug.current,
      description_en,
      description_tr,
      "image": image.asset->url
  }`;
    return client.fetch(query);
}
