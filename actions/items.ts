"use server";

export async function getItems() {
  return [{ name: "dummy" }];
}

export async function createItemAction(state: any, formData: FormData) {
  return "Hello";
}
