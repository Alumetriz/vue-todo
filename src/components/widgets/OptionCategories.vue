<template>
  <div class="categories__wrapper">
    <div
        class="category-item"
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category)"
    >
      <div
          :class="{'category-img': true, selected: isSelected(category)}"
          v-html="category.svgImage"
          :style="{backgroundColor: category.bgColor}"
      ></div>
      <h3
          :class="{'category-title': true, selected: isSelected(category)}"
      >{{ category.title }}</h3>
    </div>
  </div>
  <div class="set-category__btns">
    <button
        class="set-category__btn cancel-btn"
        @click="cancelCategories($store.state.Options)"
    >Cancel
    </button>
    <button
        class="set-category__btn save-category__btn"
        @click="saveCategory($store.state.Options)"
    >Save
    </button>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from "vuex";

export default {
  methods: {
    ...mapMutations({
      selectCategory: "Options/OptionCategories/selectCategory",
      saveCategory: "Options/OptionCategories/saveCategory",
      cancelCategories: "Options/OptionCategories/cancelCategories",
    })
  },
  computed: {
    ...mapState({
      categories: state => state.Options.OptionCategories.categories,
      selectedCategory: state => state.Options.OptionCategories.selectedCategory,
    }),
    ...mapGetters('Options/OptionCategories', [
      'isSelected',
    ])
  }
}
</script>

<style scoped>
.categories__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;

  margin-top: 15px;

  height: 400px;
  overflow: auto;
  padding: 10px;
}

.category-img {
  background-color: #80FFD1;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.category-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
}

.category-title {
  text-align: center;
  font-size: 19px;
  color: #E8E8E8;
  font-family: 'Open Sans', sans-serif;
}

.category-title.selected {
  color: #809CFF;
}

.set-category__btns {
  display: flex;
  justify-content: space-around;
}

.set-category__btn {
  width: 120px;
  height: 60px;
  text-transform: capitalize;
  font-size: 17px;
}

.cancel-btn {
  background-color: transparent;
  color: #8687E7;
  border: none;
  cursor: pointer;
}

.save-category__btn {
  background-color: #8687E7;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
}
</style>