import { ColumnDef } from "@tanstack/react-table";
import { ReproStock } from "../types";
import { formatDate } from "@/utils/format-date";
import { MaterialFilter } from "./material-filter";

// Interface for the createColumns function props
interface ColumnProps {
  materialOptions: string[];
  selectedMaterials: string[];
  setSelectedMaterials: React.Dispatch<React.SetStateAction<string[]>>;
}

// Function to create columns with the material filter
export const createColumns = ({
  materialOptions,
  selectedMaterials,
  setSelectedMaterials,
}: ColumnProps): ColumnDef<ReproStock>[] => [
  {
    header: "Drum ID",
    accessorKey: "repro_drum_id",
    cell: ({ row }) => (
      <span className="font-medium text-primary">
        {row.getValue("repro_drum_id")}
      </span>
    ),
  },
  {
    header: "Date Created",
    accessorKey: "date_created",
    cell: ({ row }) => {
      const date = row.getValue("date_created") as string;
      return <span>{formatDate(date)}</span>;
    },
  },
  {
    accessorKey: "material",
    header: () => (
      <MaterialFilter
        materialOptions={materialOptions}
        selectedMaterials={selectedMaterials}
        setSelectedMaterials={setSelectedMaterials}
      />
    ),
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("material")}</span>
    ),
  },
  {
    header: "Capacity (L)",
    accessorKey: "capacity",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("capacity")}</span>
    ),
  },
  {
    header: "Current Volume (L)",
    accessorKey: "current_volume",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("current_volume")}</span>
    ),
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const date = row.getValue("created_at") as string;
      return <span>{formatDate(date)}</span>;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div
          className={`px-4 py-1 text-sm font-medium rounded-full w-fit ${
            status === "active"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
              : status === "pending"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
          }`}
        >
          {status}
        </div>
      );
    },
  },
];
