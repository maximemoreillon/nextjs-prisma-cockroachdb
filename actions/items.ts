"use server";

import { client as prismaClient } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createItemAction(state: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  if (!name) return { error: "Missing name" };
  try {
    const newItem = await prismaClient.item.create({ data: { name } });
    return redirect(`/items/${newItem.id}`);
  } catch (error) {
    return { error };
  }
}

export async function getItems() {
  const items = await prismaClient.item.findMany();
  return { items };
}

export async function getItem(id: number) {
  return await prismaClient.item.findUnique({ where: { id } });
}

export async function deleteItem(id: number) {
  await prismaClient.item.delete({ where: { id } });
  // TODO: confirm
  return redirect("/items");
}
