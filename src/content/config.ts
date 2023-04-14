import { z, defineCollection } from 'astro:content';

const subjectCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    abbreviation: z.string(),
    description: z.string(),
    course: z.string(),
    campus: z.string(),
    repository: z.string().url(),
    preview: z.string().url().optional(),
    professors: z.array(z.string()),
  }),
});

const courseCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    abbreviation: z.string(),
    level: z.string(),
    campus: z.string(),
    page: z.string(),
  }),
});

const studentCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    name: z.object({
      compact: z.string(),
      full: z.string(),
    }),
    avatar: z.string().url(),
    courses: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        campus: z.string(),
        isFinished: z.boolean().optional(),
      })
    ),
    addresses: z.object({
      github: z.string().url(),
      linkedin: z.string().url(),
      twitter: z.string().url().optional(),
      stackoverflow: z.string().url().optional(),
      lattes: z.string().email().optional(),
      researchgate: z.string().email().optional(),
      instagram: z.string().email().optional(),
      email: z.string().email().optional(),
    }),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    preview: z.string().url(),
    page: z.string().url(),
    repository: z.string().url(),
    course: z.string(),
    subject: z.string(),
    semester: z.number(),
    campus: z.string(),
    tags: z.array(z.string()),
    owners: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        github: z.string().url(),
        avatar: z.string().url(),
      })
    ),
  }),
});

export const collections = {
  subjects: subjectCollection,
  courses: courseCollection,
  students: studentCollection,
  projects: projectCollection,
};
