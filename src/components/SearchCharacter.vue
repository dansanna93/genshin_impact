<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Name</label>
            <input type="text" name="name"
            v-model="name"
            placeholder="Character Name...">
        </div>
        <div class="form-control">
            <label>Rarity</label>
            <select name="rarity" id="rarity">
                <option value="4stars">4*</option>
                <option value="5stars">5*</option>
            </select>
        </div>
        <div class="form-control">
            <label>Weapon</label>
            <select name="weapons" id="weapons"
            placeholder="Choose Weapon...">
                <option value="bow">Bow</option>
                <option value="catalyst">Catalyst</option>
                <option value="claymore">Claymore</option>
                <option value="polearm">Polearm</option>
                <option value="sword">Sword</option>
            </select>
        </div>
        <div class="form-control">
            <label>Vision</label>
            <select name="visions" id="visions"
            placeholder="Choose Vision...">
                <option value="anemo">Anemo</option>
                <option value="cryo">Cryo</option>
                <option value="electro">Electro</option>
                <option value="geo">Geo</option>
                <option value="hydro">Hydro</option>
                <option value="pyro">Pyro</option>
            </select>
        </div>
        <input type="submit" value="Search"
        class="btn btn-block">
    </form>
</template>

<script>
    export default {
        name: 'SearchCharacter',
        data() {
            return {
                name: '',
                rarity: '',
                weapon: '',
                vision: ''
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
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
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