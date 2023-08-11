<script lang="ts">
    
    export let username = "username"
    export let nick = "nick"
    export let avatarURL = "avatar_url"
    export let status = "status"
    export let suppress = "suppress"
    export let mute = "mute"
    export let deaf = "deaf"
    export let game = {name: "gameName"}
    export let selfMute = "self_mute"
    export let selfDeaf = "self_deaf"

    let voice = false;

    function getStatusClass(s: string) {
        return s;
    }
</script>

{#if !voice && game != null && game.name != null}
    <span class="widgetMemberGame">game.name</span>
{/if}

{#if voice && (mute || selfMute || suppress)}
    <span class="widgetIcon widgetIconMute"></span>
{/if}

{#if voice && (deaf || selfDeaf)}
    <span class="widgetIcon widgetIconDeaf"></span>
{/if}



<div class="widgetMember">
    <div class="widgetMemberAvatar">
        <img alt="" src={avatarURL}/>
        
        {#if !voice && (deaf || selfDeaf)}
            <span class="widgetMemberStatus {getStatusClass(status)}"></span>
        {/if}
    </div>
    <span class="widgetMemberName">{nick || username}</span>
</div>