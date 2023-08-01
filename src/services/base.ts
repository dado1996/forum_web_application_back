import { Db } from "mongodb";
import { getConnection } from "../lib/mongo";

export class BaseService {
  protected db: Db;
  constructor() {
    this.db = getConnection();
  }
}
