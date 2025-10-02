import { getItem } from "@/actions/items";
import DeleteButton from "@/components/DeleteButton";

type Options = {
  params: {
    id: string;
  };
};

export default async function ItemPage({ params }: Options) {
  const { id } = await params;
  const item = await getItem(Number(id));

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl">Item</h2>
        <DeleteButton id={Number(id)} />
      </div>
      <div>Name: {item?.name}</div>
    </div>
  );
}
