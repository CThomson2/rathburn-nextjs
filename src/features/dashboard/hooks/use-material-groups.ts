import { useQuery } from "@tanstack/react-query";
import { getMaterialGroups } from "../api/get-material-groups";
import { MaterialGroupsResponse } from "../types/api";

export function useMaterialGroups() {
  return useQuery<MaterialGroupsResponse>({
    queryKey: ["materialGroups"],
    queryFn: getMaterialGroups,
  });
}
