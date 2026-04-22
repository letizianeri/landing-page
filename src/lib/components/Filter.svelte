<script>
	let { group = $bindable(), value } = $props();
</script>

<label>
	<input type="radio" {value} bind:group />
	{value}
</label>

<style>
	label {
		padding-block: var(--size-2);
		padding-inline: var(--size-4);
		font-size: var(--size-6);
		border-radius: 999px;
		cursor: pointer;
		transition: background-color 0.25s var(--ease-out-quart);

		&:hover {
			background-color: var(--color-filter--hover);
		}

		&:has(input:checked) {
			font-weight: 700;
			background-color: var(--color-filter--selected);
		}
	}

	input {
		display: none;
	}
</style>
