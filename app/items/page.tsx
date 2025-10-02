import { getItems } from "@/actions/items";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Items() {
  const items = await getItems();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl">Items</h2>

        <Button asChild>
          <Link href="/items/new">New</Link>
        </Button>
      </div>
      <ul className="my-6">
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
