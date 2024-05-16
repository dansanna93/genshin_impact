<template>
    <form @submit="onSubmit" class="form">
        <div class="form-control">
            <label>Name</label>
            <input type="text" name="name"
            v-model="name"
            placeholder="Character Name...">
        </div>
        <div class="form-control">
            <label>Rarity</label>
            <select name="rarity" id="rarity"
            v-model="rarity">
                <option value="" disabled selected>Choose Rarity...</option>
                <option value="4_star">4*</option>
                <option value="5_star">5*</option>
            </select>
        </div>
        <div class="form-control">
            <label>Weapon</label>
            <select name="weapon" id="weapon"
            v-model="weapon">
                <option value="" disabled selected>Choose Weapon...</option>
                <option value="Bow">Bow</option>
                <option value="Catalyst">Catalyst</option>
                <option value="Claymore">Claymore</option>
                <option value="Polearm">Polearm</option>
                <option value="Sword">Sword</option>
            </select>
        </div>
        <div class="form-control">
            <label>Vision</label>
            <select name="vision" id="vision"
            v-model="vision">
                <option value="" disabled selected>Choose Vision...</option>
                <option value="Anemo">Anemo</option>
                <option value="Cryo">Cryo</option>
                <option value="Electro">Electro</option>
                <option value="Geo">Geo</option>
                <option value="Hydro">Hydro</option>
                <option value="Pyro">Pyro</option>
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

                const charAttributes = {
                    name: this.name,
                    rarity: this.rarity,
                    weapon: this.weapon,
                    vision: this.vision
                }

                this.$emit('search-character', charAttributes)

                this.name = ''
                this.rarity = ''
                this.weapon = ''
                this.vision = ''
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