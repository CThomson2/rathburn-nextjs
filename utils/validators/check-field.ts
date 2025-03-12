import { PrismaClient } from "/prisma/generated/client";

/**
 * Field Validator Utilities
 *
 * This module provides utilities to check database field constraints
 * based on Prisma's metadata rather than runtime queries.
 */

const prisma = new PrismaClient();

/**
 * Check if a field in a model is nullable according to the database schema
 * @param model The Prisma model name (e.g., 'orders', 'drums')
 * @param field The field name to check
 * @returns True if the field can be null, false otherwise
 */
export function isNullable(model: string, field: string): boolean {
  // Get model metadata from Prisma's dmmf
  const modelInfo = (prisma as any)._baseDmmf.modelMap[model];

  if (!modelInfo) {
    throw new Error(`Model '${model}' not found in Prisma schema`);
  }

  const fieldInfo = modelInfo.fields.find((f: any) => f.name === field);

  if (!fieldInfo) {
    throw new Error(`Field '${field}' not found in model '${model}'`);
  }

  return fieldInfo.isNullable || false;
}

/**
 * Check if a field has a default value in the database schema
 * @param model The Prisma model name
 * @param field The field name to check
 * @returns True if the field has a default value, false otherwise
 */
export function hasDefaultValue(model: string, field: string): boolean {
  const modelInfo = (prisma as any)._baseDmmf.modelMap[model];

  if (!modelInfo) {
    throw new Error(`Model '${model}' not found in Prisma schema`);
  }

  const fieldInfo = modelInfo.fields.find((f: any) => f.name === field);

  if (!fieldInfo) {
    throw new Error(`Field '${field}' not found in model '${model}'`);
  }

  return fieldInfo.hasDefaultValue || false;
}

/**
 * Get the data type of a field in the database schema
 * @param model The Prisma model name
 * @param field The field name to check
 * @returns The field type as a string (e.g., 'String', 'Int', 'DateTime')
 */
export function getFieldType(model: string, field: string): string {
  const modelInfo = (prisma as any)._baseDmmf.modelMap[model];

  if (!modelInfo) {
    throw new Error(`Model '${model}' not found in Prisma schema`);
  }

  const fieldInfo = modelInfo.fields.find((f: any) => f.name === field);

  if (!fieldInfo) {
    throw new Error(`Field '${field}' not found in model '${model}'`);
  }

  return fieldInfo.type;
}
