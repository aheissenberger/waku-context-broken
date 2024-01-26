import { MantineConsumer } from "../components/MantineConsumer.js";
import { TestConsumer } from "../components/TestConsumer.js";

export const MantinePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <MantineConsumer />
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'MantineConsumer',
    headline: 'MantineConsumer',
    body: 'Hello world!',
  };

  return data;
};
