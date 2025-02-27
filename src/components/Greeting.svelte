<script module lang="ts">
    type Props = {
        messages: string[];
    };
</script>

<script lang="ts">
    const { messages }: Props = $props();

    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)];

    let greeting = $state(messages[0]);
</script>

<div class="greeting">
    <h3>{greeting}! Thank you for visiting.</h3>
    <button onclick={(_) => (greeting = randomMessage())}>
        New Greeting
    </button>
</div>
