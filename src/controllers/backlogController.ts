import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBacklog = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { boardId, projectKey } = req.params;
  if (!boardId && !projectKey) {
    res.status(400).json({ message: "Board Id and Project Key is required" });
    return;
  }
  try {
    let backlog = await prisma.backlog.findUnique({
      where: {
        BoardId: boardId,
      },
      include: {
        Issues: {
          select: {
            Id: true,
            User: true,
            Label: true,
          },
        },
      },
    });
    if (backlog) {
      res.json(backlog?.Issues);
      return;
    }

    // backlog = new Backlog({
    //   boardId: boardId,
    //   cardIds: [],
    // });
    // res.json([]);
    return;
  } catch (error) {
    console.error("Error fetching backlog:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching backlog" });
  }
};
