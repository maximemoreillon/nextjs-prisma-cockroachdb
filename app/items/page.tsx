import { getItems } from "@/actions/items";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Items() {
  const data = await getItems();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl">Items</h2>

        <Button asChild>
          <Link href="/items/new">New</Link>
        </Button>
      </div>
      <ul className="my-6">
        {data.items.map((item, index) => (
          <li key={index}>
            <Link href={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
