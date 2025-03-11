import { clientApi as api } from "@/lib/api-client/client";
import { MaterialGroupsResponse } from "../types/api";

export const getMaterialGroups = (): Promise<MaterialGroupsResponse> => {
  return api.get("/materials/groups");
};
