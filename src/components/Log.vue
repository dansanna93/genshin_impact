<template>
    <form @submit='onSubmit' class="form">
        <div class="form-control">
            <label>E-Mail</label>
            <input type="email"
            v-model="email"
            placeholder="Insert Email...">
        </div>
        <div class="form-control">
            <label>Password</label>
            <input type="password"
            v-model="pwd"
            placeholder="Insert password...">
        </div>
        <input type="submit" value="Login" class="btn btn-block">
    </form>
</template>

<script>
export default {
    name: 'Log',
    data() {
        return {
            email: '',
            pwd: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
        }
    }
}
</script>

<style scoped>
.form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control select {
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>