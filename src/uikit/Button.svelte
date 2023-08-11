<script>
	/**
	 * Specify the button color
	 * @type {"black" | "brand" | "white" | "green" }
	 */
	export let color = 'brand';

	/**
	 * @type {'filled' | 'outlined'}
	 */
	export let look = 'filled';

	/**
	 * @type { 'short' | 'mediumShort' | 'medium' | 'mediumTall' | 'tall'}
	 */
	export let height = 'tall';

	/**
	 * @type {'filled'}
	 */
	export let hoverStyle = 'filled';

	/**
	 * @type {'medium'}
	 */
	export let horizontalPadding = 'medium';

	/** Set to `true` to disable the button */
	export let disabled = false;

	/**
	 * Set the `href` to use an anchor link
	 * @type {string | undefined}
	 */
	export let href = undefined;

	/** Obtain a reference to the HTML element */
	export let ref = null;

	/** Specify the `type` attribute for the button element */
	export let type = 'button';

	let grow = false;
	let submitting = false;
	let paired = false;

	$: buttonProps = {
		type: href && !disabled ? undefined : type,
		disabled: disabled === true ? true : undefined,
		href,
		...$$restProps,
		class: [
			'button',
			look == 'filled' && 'lookFilled',
			color == 'brand' && 'colorBrand',
			true && 'sizeSmall',
			true && 'grow',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

{#if href}
	<a bind:this={ref} {...buttonProps} on:click on:focus on:mouseover on:mouseenter on:mouseleave
		><slot /></a
	>
{:else}
	<button
		bind:this={ref}
		{...buttonProps}
		on:click
		on:focus
		on:mouseover
		on:mouseenter
		on:mouseleave
	>
		<div><slot /></div>
	</button>
{/if}

<style>
	.button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background: none;
		border: none;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 500;
		line-height: 16px;
		padding: 2px 16px;
		user-select: none;
	}

	.lookFilled.colorBrand {
		color: var(--white-500);
		background-color: var(--brand-color);
	}
	.lookFilled.colorBrand:hover {
		background-color: var(--brand-color-560);
	}
	.lookFilled.colorBrand:active {
		background-color: var(--brand-color-600);
	}
	.lookFilled.colorBrand:disabled,
	.lookFilled.colorBrand[aria-disabled='true'] {
		background-color: var(--brand-color);
	}

	.sizeSmall {
		width: 60px;
		height: 32px;
		min-width: 60px;
		min-height: 32px;
	}

	.grow,
	.sizeIcon {
		width: auto;
	}

	.lookFilled {
		transition: background-color 0.17s ease, color 0.17s ease;
	}
</style>
