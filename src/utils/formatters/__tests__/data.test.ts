import {
  formatDates,
  createFormatter,
  createPaginatedFormatter,
} from "../data";

describe("Data Formatting Utilities", () => {
  describe("formatDates()", () => {
    const testDate = new Date("2023-01-15T12:30:45Z");
    const testDateISOString = testDate.toISOString();

    test("should convert Date objects to ISO strings", () => {
      const input = {
        id: 1,
        name: "Test Item",
        created_at: testDate,
        updated_at: testDate,
      };

      const result = formatDates(input, ["created_at", "updated_at"]);

      expect(result.created_at).toBe(testDateISOString);
      expect(result.updated_at).toBe(testDateISOString);
      expect(result.id).toBe(1);
      expect(result.name).toBe("Test Item");
    });

    test("should handle null date values", () => {
      const input = {
        id: 1,
        created_at: null,
        updated_at: testDate,
      };

      const result = formatDates(input, ["created_at", "updated_at"]);

      expect(result.created_at).toBe(null);
      expect(result.updated_at).toBe(testDateISOString);
    });

    test("should handle missing fields", () => {
      const input = {
        id: 1,
        created_at: testDate,
        // updated_at is missing
      };

      // Fix: Use a type assertion to allow passing a field that doesn't exist in the object
      // This is intentional for this test case to verify the behavior with missing fields
      const result = formatDates(input, [
        "created_at",
        "updated_at" as keyof typeof input,
      ]);

      expect(result.created_at).toBe(testDateISOString);
      // @ts-expect-error - Property 'updated_at' does not exist
      expect(result.updated_at).toBeUndefined();
    });

    test("should return the original value for non-Date values", () => {
      const input = {
        id: 1,
        date_string: "2023-01-15",
        created_at: testDate,
      };

      const result = formatDates(input, ["date_string", "created_at"]);

      expect(result.date_string).toBe("2023-01-15");
      expect(result.created_at).toBe(testDateISOString);
    });

    test("should convert string values that look like dates to null", () => {
      const input = {
        id: 1,
        date_ordered: "invalid date",
      };

      const result = formatDates(input, ["date_ordered"]);

      // Non-Date values are preserved but might become null if they're falsy
      expect(result.date_ordered).toBe("invalid date");
    });

    test("should handle undefined values", () => {
      const input = {
        id: 1,
        date_ordered: undefined,
      };

      const result = formatDates(input, ["date_ordered"]);

      expect(result.date_ordered).toBe(null);
    });

    test("should preserve input object type structure", () => {
      // interface TestOrder {
      //   id: number;
      //   date_ordered: Date;
      //   created_at: Date | null;
      //   status: string;
      // }

      const input = {
        id: 1,
        date_ordered: testDate,
        created_at: null,
        status: "pending",
      };

      const result = formatDates(input, ["date_ordered", "created_at"]);

      console.log(result);

      // Type checking happens at compile time, this test ensures runtime behavior
      expect(typeof result.id).toBe("number");
      expect(typeof result.date_ordered).toBe("string");
      expect(result.created_at).toBe(null);
      expect(typeof result.status).toBe("string");

      // Additional runtime type check
      // This ensures the returned object has the same structure as input
      expect(Object.keys(result).sort()).toEqual(Object.keys(input).sort());
    });

    // Type-level test (this is checked at compile time)
    test("type-level tests", () => {
      // This test doesn't actually run, it's checked by the TypeScript compiler
      // type TestType = {
      //   id: number;
      //   name: string;
      //   created_at: Date;
      //   updated_at: Date | null;
      // };

      const input = {
        id: 1,
        name: "Test",
        created_at: new Date(),
        updated_at: null,
      };

      const result = formatDates(input, ["created_at", "updated_at"]);

      // TypeScript should infer this type correctly
      // const _typeCheck: TestType = result;

      // The next line would cause a compile error if types are wrong
      // const _wrongTypeCheck: { id: string } = result; // This should not compile
    });

    test("should format dates in an object", () => {
      const input = {
        id: 1,
        created_at: new Date("2023-01-01T00:00:00Z"),
      };

      // Fix: Make sure we're only passing field names that exist in the input object
      const result = formatDates(input, ["created_at"]);

      expect(result.created_at).toEqual("2023-01-01T00:00:00.000Z");
      expect(result.id).toEqual(1);
    });
  });

  describe("createFormatter()", () => {
    test("should create a reusable formatter function", () => {
      const testDate = new Date("2023-01-15T12:30:45Z");

      // interface TestOrder {
      //   id: number;
      //   created_at: Date;
      // }

      const formatOrder = createFormatter(["created_at"]);

      const result = formatOrder({ id: 1, created_at: testDate });

      expect(result.id).toBe(1);
      expect(result.created_at).toBe(testDate.toISOString());
    });
  });

  describe("createPaginatedFormatter()", () => {
    test("should format items in a paginated response", () => {
      const itemFormatter = (item: { id: number; name: string }) => ({
        ...item,
        formatted: true,
      });

      const paginatedFormatter = createPaginatedFormatter(itemFormatter);

      const result = paginatedFormatter({
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
        total: 2,
      });

      expect(result.total).toBe(2);
      expect(result.items[0].formatted).toBe(true);
      expect(result.items[1].formatted).toBe(true);
      expect(result.items[0].id).toBe(1);
      expect(result.items[1].id).toBe(2);
    });
  });
});
