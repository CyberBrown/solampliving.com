import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-base-200 flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-primary mb-4">Solamp Living</h1>
        <p class="text-lg text-base-content/70 mb-8">
          Coming Soon
        </p>
        <div class="flex gap-4 justify-center">
          <button class="btn btn-primary">Learn More</button>
          <button class="btn btn-outline">Contact Us</button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Solamp Living - Coming Soon",
  meta: [
    {
      name: "description",
      content: "Solamp Living - Premium living solutions",
    },
  ],
};
