import React from "react";
import Link from "next/link";
import { ScheduleType, DistillationType } from "../types";

interface ProductionScheduleProps {
  schedule: ScheduleType;
  onDownload: (distillationId: number) => void;
  onEdit: (distillationId: number) => void;
}

const ProductionSchedule: React.FC<ProductionScheduleProps> = ({
  schedule,
  onDownload,
  onEdit,
}) => {
  // Helper function to determine if schedule is active based on date
  const isScheduleActive = () => {
    const scheduleDate = new Date(schedule.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return scheduleDate >= today;
  };

  // Determine status based on date comparison
  const scheduleStatus = isScheduleActive() ? "active" : "complete";

  return (
    <div className="box">
      <div className="box-header justify-between">
        <div className="box-title">
          Production Schedule - {schedule.schedule_name}
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`badge ${
              scheduleStatus === "active" ? "bg-success" : "bg-secondary"
            } text-white`}
          >
            {scheduleStatus === "active" ? "Active" : "Completed"}
          </span>
          <span className="badge bg-primary text-white">
            {schedule.site} Site
          </span>
          <span className="font-medium text-sm">
            {new Date(schedule.date).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="box-body">
        <div className="table-responsive">
          <table className="table whitespace-nowrap min-w-full">
            <thead>
              <tr className="border-b border-defaultborder">
                <th scope="col">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkboxAllDistillations"
                    defaultValue=""
                    aria-label="Select all distillations"
                  />
                </th>
                <th scope="col" className="text-start">
                  Still Code
                </th>
                <th scope="col" className="text-start">
                  Solvent
                </th>
                <th scope="col" className="text-start">
                  Description
                </th>
                <th scope="col" className="text-start">
                  Quantity (L)
                </th>
                <th scope="col" className="text-start">
                  Last Updated
                </th>
                <th scope="col" className="text-start">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.distillations.map((distillation) => (
                <tr
                  key={distillation.distillation_id}
                  className="border-b border-defaultborder"
                >
                  <th scope="row">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`distillation-${distillation.distillation_id}`}
                      defaultValue=""
                      aria-label={`Select distillation ${distillation.distillation_id}`}
                    />
                  </th>
                  <td>
                    <div className="flex items-center">
                      <span className="font-medium">
                        {distillation.still_code}
                      </span>
                    </div>
                  </td>
                  <td>{distillation.solvent}</td>
                  <td>
                    <span className="text-truncate max-w-[200px] block">
                      {distillation.description}
                    </span>
                  </td>
                  <td>{distillation.quantity}</td>
                  <td>{new Date(distillation.updated_at).toLocaleString()}</td>
                  <td>
                    <div className="hstack flex gap-3 text-[.9375rem]">
                      <button
                        aria-label="Download distillation report"
                        className="ti-btn ti-btn-icon ti-btn-sm ti-btn-success-full"
                        onClick={() => onDownload(distillation.distillation_id)}
                      >
                        <i className="ri-download-2-line"></i>
                      </button>
                      <button
                        aria-label="Edit distillation"
                        className="ti-btn ti-btn-icon ti-btn-sm ti-btn-info-full"
                        onClick={() => onEdit(distillation.distillation_id)}
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {schedule.distillations.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-4">
                    No distillations scheduled for this date.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="box-footer">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-medium">
              Total Distillations: {schedule.distillations.length}
            </span>
          </div>
          <div>
            <span className="text-sm font-medium">
              Assigned Employees: {schedule.employees.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionSchedule;
