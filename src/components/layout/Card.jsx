function Card({ title, description, img }) {
  return (
    <div class="max-w-xs rounded-md shadow-md bg-gray-500 text-coolGray-100">
      <img
        src={img}
        alt=""
        class="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
      />
      <div class="flex flex-col justify-between p-6 space-y-8">
        <div class="space-y-2">
          <h2 class="text-3xl font-semibold tracking-wide">{title}</h2>
          <p class="dark:text-gray-300">{description}</p>
        </div>
        <button
          type="button"
          class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-outline"
        >
          Dowiedz się więcej
        </button>
      </div>
    </div>
  );
}

export default Card;
