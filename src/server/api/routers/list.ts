import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { game } from "~/types/types";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const listRouter = createTRPCRouter({
  createList: protectedProcedure
    .input(z.object({ name: z.string().min(1)}))
    .mutation(async ({ input , ctx }) => {
      const list = await ctx.db.list.create({
        data: {
          name: input.name,
          Owner: {
            connect: {
              id: ctx.session.user.id
            }
          }
        }
      })
      return list
    }),
  getLists: protectedProcedure
    .query(({ ctx }) => {
      return ctx.db.list.findMany({
        where: {
          Owner: {
            id: ctx.session.user.id
          }
        },
        include: {
          games: true
        }
      });
    }),
  getGames: protectedProcedure
    .query(({ ctx }) => {
      return ctx.db.game.findMany({
        where: {
          list: {
            id: ctx.session.user.id
          }
        },
      });
    }),
  isGameInList: protectedProcedure
    .input(z.object({ gameId: z.string() }))
    .query(async ({ input, ctx }) => {
      const game = await ctx.db.game.findFirst({
        where: {
          gameId: input.gameId,
          list: {
            Owner: {
              id: ctx.session.user.id
            }
          }
        },
        include: {
          list: true
        }
      });
      return game?.list ?? null;
    }),
  addGameToList: protectedProcedure
    .input(z.object({ gameId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const game = await ctx.db.game.findFirst({
        where: {
          gameId: input.gameId,
        },
      });
      let newGame: game | null = null;
      if (!game) {
        newGame = await ctx.db.game.create({
          data: {
            gameId: input.gameId,
          },
        });
      }
      const list = await ctx.db.list.findFirst({
        where: {
          Owner: {
            id: ctx.session.user.id
          }
        },
      });
      if (!list) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `User does not have a list`,
        });
      }
      const existingGameInList = await ctx.db.game.findFirst({
        where: {
          gameId: input.gameId,
          list: {
            id: list.id
          }
        }
      });
      if (existingGameInList) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Game is already in the list`,
        });
      }
      const newGameList = await ctx.db.game.create({
        data: {
          gameId: newGame?.gameId ?? input.gameId,
          list: {
            connect: {
              id: list.id
            }
          },
          name: newGame?.name ?? "",
          cover_url: newGame?.cover_url ?? "",
          score: newGame?.score ?? 0,
          review: "",
        },
      });
      return newGameList;
    }),


})
