<script lang="ts">
	import Button from "$ui/Button.svelte";



</script>

<div style="padding: 60px 40px 80px; display: flex;">
    <div class="flexChild" style="flex: 0 1 auto;">
        <Button>
            Default button
        </Button>

    </div>

    <div class="flexChild" style="flex: 1 1 auto;">
        <Button>
            Other button
        </Button>

    </div>
    
</div>



<style>
    .flexChild {
        margin-left: 10px;
        margin-right: 10px;
    }

</style>