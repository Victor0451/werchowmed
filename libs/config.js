import { PrismaClient as WerchowsgiClient } from "../prisma/generated/werchowsgi";
import { PrismaClient as WerchowsClient } from "../prisma/generated/werchow";
import { PrismaClient as WerchowCampClient } from "../prisma/generated/werchowcamp";
import { PrismaClient as WerchowSepClient } from "../prisma/generated/werchowsep";
import { PrismaClient as WerchowServClient } from "../prisma/generated/werchowserv";
import { PrismaClient as SanMiguelClient } from "../prisma/generated/sanmiguel";

let SGI;
let Werchow;
let Camp;
let Sep;
let Serv;
let SanMiguel;

//check if we are running in production mode
if (process.env.NODE_ENV === "production") {
  Werchow = new WerchowsClient();
  SGI = new WerchowsgiClient();
  Camp = new WerchowCampClient();
  Sep = new WerchowSepClient();
  Serv = new WerchowServClient();
  SanMiguel = new SanMiguelClient();
} else {
  //check if there is already a connection to the database
  if (!global.Werchow) {
    global.Werchow = new WerchowsClient();
  } else if (!global.SGI) {
    global.SGI = new WerchowsgiClient();
  } else if (!global.Camp) {
    global.Camp = new WerchowCampClient();
  } else if (!global.Sep) {
    global.Sep = new WerchowSepClient();
  } else if (!global.Serv) {
    global.Serv = new WerchowServClient();
  } else if (!global.SanMiguel) {
    global.SanMiguel = new SanMiguelClient();
  }

  Werchow = global.Werchow;
  SGI = global.SGI;
  Camp = global.Camp;
  Sep = global.Sep;
  Serv = global.Serv;
  SanMiguel = global.SanMiguel;
}

export { Werchow, SGI, Camp, Sep, Serv, SanMiguel };
