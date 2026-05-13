import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prismaClient = new PrismaClient({ adapter });
export { prismaClient };


/**
 * So probably you want this
 * when test import your client, you don't give them db methods access and populate the db
 * 
 * // do nothing when someone call your prismaclient
 * prisma = {
 *      sum : {
 *          create: () => {}
 *      }
 * }
 */