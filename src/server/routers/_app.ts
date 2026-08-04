import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { PROJECTS_DATA } from "../data/projects";
import { YOUTUBE_CHANNELS_DATA } from "../data/youtubeChannels";

export const appRouter = router({
  getProjects: publicProcedure.query(() => {
    return PROJECTS_DATA;
  }),

  getProjectBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input }) => {
      const project = PROJECTS_DATA.find((p) => p.slug === input.slug);
      if (!project) {
        throw new Error("Project not found");
      }
      return project;
    }),

  getYouTubeChannels: publicProcedure.query(() => {
    return YOUTUBE_CHANNELS_DATA;
  }),
});

export type AppRouter = typeof appRouter;
