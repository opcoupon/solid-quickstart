import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://opcoupon.com/deals" target="_blank">
          opcoupon.com/deals
        </a>{" "}
        Banggood and Geekbuying Coupon Codes.
      </p>
    </main>
  );
}
