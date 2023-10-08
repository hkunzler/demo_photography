<script>
	export let item;
</script>

<div
	class="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
>
	<img src={item.thumbnail} alt={item.title} class="w-full h-48 object-cover" />
	<div class="p-4 flex flex-col justify-between">
		<div>
			<h2 class="text-2xl font-primary mb-2">{item.title}</h2>
			<p class="text-gray-600 mb-2">
				<span class="inline-block mr-2">
					<img src="/calendarIcon.svg" role="none" alt="Calendar Icon" />
				</span>
				{item.date}
			</p>
			<p class="mb-4">{item.description}</p>
		</div>
		<a href={item.url} class="text-primary hover:underline hover:text-secondary">View</a>
	</div>
</div>
