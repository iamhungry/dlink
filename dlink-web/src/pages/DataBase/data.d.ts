export type DataBaseTableListItem = {
  id: number,
  name: string,
  alias: string,
  groupName: string,
  type: string,
  ip: string,
  port: number,
  url: string,
  username: string,
  password: string,
  note: string,
  dbVersion: string,
  status: boolean,
  enabled: boolean,
  createTime: Date,
  updateTime: Date,
};