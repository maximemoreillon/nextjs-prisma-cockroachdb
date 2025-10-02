"use client";

import { deleteItem } from "@/actions/items";
import { Button } from "./ui/button";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  async function handleClick() {
    if (!confirm(`Delete item ${id}?`)) return;
    await deleteItem(id);
  }
  return <Button onClick={handleClick}>Delete</Button>;
}
