import { useCounterStore } from "@/stores/counter";
import { createPinia } from "pinia";
import { describe, expect, test } from "vitest";

describe("counter tests", () => {
	const counter = useCounterStore(createPinia());

	test("verify that the default value is 0", () => {
		expect(counter.count).toBe(0);
	});

	test("increments the state by 1", () => {
		counter.increment();

		expect(counter.count).toBe(1);

		// reset state
		counter.count = 0;
	});

	test("increments the state by 3", () => {
		counter.increment();
		counter.increment();
		counter.increment();

		expect(counter.count).toBe(3);

		// reset state
		counter.count = 0;
	});

	test("double getter", () => {
		counter.increment();
		counter.increment();

		expect(counter.count).toBe(2);

		expect(counter.doubleCount).toBe(4);

		// reset state
		counter.count = 0;
	});
});
