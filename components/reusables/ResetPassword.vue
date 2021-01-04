<template>
    <modal wide @close="$emit('close')">
      <template slot="header">
        <div class="text-right py-3 px-3">
          <button @click="$emit('close')">
            <font-awesome-icon class="text-xs text-black mt-2 mr-2" :icon="['fa', 'times']" />
          </button>
        </div>
      </template>
      <template slot="body">
        <div class="my-5 mx-5">
          <div class="font-bold text-xl mb-2">Reset Password</div>
          <div class="text-base mb-3">Enter the email address associated with your account, and we'll email you a link to reset your password</div>
          <input type="text" class="block w-full border border-black px-3 py-3 mb-3" placeholder="Email">
          <div class="flex justify-between">
            <button class="rounded-full bg-white border border-black text-black text-center w-full py-3 mb-1" @click="$emit('login')">
            Back to Login</button>
            <button class="rounded-full bg-ideeza text-white text-center w-full py-3 mb-1">
            Send Reset Link</button>
          </div>
          </div>
      </template>
    </modal>
</template>
<script>
import Modal from '~/components/reusables/Modal.vue'
export default {
    components: {
        Modal
    }
}
</script>