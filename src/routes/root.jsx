import homeService from "services/homeService";
import { useLoaderData, Form } from "react-router-dom";

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="detail">hha</div>

      <Form>
        <button type="submit">New1</button>
      </Form>
    </>
  );
}

export async function loader() {
  const contacts = await homeService.getHome();
  return { contacts };
}

export async function action() {
  await homeService.getHome();
}
