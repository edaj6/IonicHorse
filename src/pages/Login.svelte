<script>
  import loginUser from "../apis/loginUser";
  import registerUser from "../apis/registerUser";
  import globalStore from "../stores/globalStore";
  import { navigate } from "svelte-routing";

  let email = "";
  let password = "";
  let username = "default username";
  let isMember = true;

// add alert
  $: isEmpty = !email || !password || !username || $globalStore.alert;
  // toggle member
  function toggleMember() {
    isMember = !isMember;
    if (!isMember) {
      username = "";
    } else {
      username = "default username";
    }
  }

  // handle submit
  async function handleSubmit() {
    // add alert
    globalStore.toggleItem("alert", true, "loading data... please wait!");
     
     console.log("ismember" + isMember);

    let user;
    if (isMember) {
      user = await loginUser({ email, password });
    } else {
      user = await registerUser({ email, password, username });
    }

    if (user) {
      console.log("user logged in" + user.email);
      
      globalStore.toggleItem(
        "alert",
        true,
        "velkommen til, du er logget ind!"
      );

      navigate("/items");
      // add alert
      return;
    }
    console.log("no user");

    // add alert
    globalStore.toggleItem(
      "alert",
      true,
      "forkert password eller email! please try again",
      true
    );
  }
</script>

<section class="form">
  <h2 class="section-title">
    {#if isMember}sign in{:else}register{/if}
  </h2>
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <!-- single input -->
    <div class="form-control">
      <label for="email">email</label>
      <input type="email" id="email" bind:value={email} />
    </div>
    <!--end of  single input -->
    <!-- single input -->
    <div class="form-control">
      <label for="password">password</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    <!--end of  single input -->
    {#if !isMember}
      <!-- single input -->
      <div class="form-control">
        <label for="username">username</label>
        <input type="text" id="username" bind:value={username} />
      </div>
      <!--end of  single input -->
    {/if}
    {#if isEmpty}
      <p class="form-empty">please fill out all form fields</p>
    {/if}
    <button
      type="submit"
      class="btn btn-block btn-primary"
      disabled={isEmpty}
      class:disabled={isEmpty}>
      submit
    </button>
    {#if isMember}
      <p class="register-link">
        need to register?
        <button type="button" on:click={toggleMember}>click here</button>
      </p>
    {:else}
      <p class="register-link">
        already a member?
        <button type="button" on:click={toggleMember}>click here</button>
      </p>
    {/if}
  </form>
</section>