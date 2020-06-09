// Создаем приложение, в котором существует компонент Diagrams задающий кол-во
// столбцов-диаграмы(7 вертикальных блоков, высотой 100-300px).
// 1.2)Поведение конкретного столбца: Каждый обладает уникальным цветом, именем,
// значением(задает высоту блоку).

// 1.3) Под каждым есть регулятор (input type="range") при перемещении которого -
// меняется высота соответствующего блока.

// Измененные значения сохраняются в локальном хранилище.
// При перезагрузке страницы - выбранные настройки сохраняются.

// 3 *) Создать кнопку, которая отфильтрует столбцы по возрастанию.
// 4 *) При перезагрузке страницы отфильтрованный ряд остается.

Vue.component("diagrams", {
  data() {
    return {
      columns: [
        { name: "Diagram1", color: "red", height: 50 },
        { name: "Diagram2", color: "aqua", height: 100 },
        { name: "Diagram3", color: "salmon", height: 35 },
        { name: "Diagram4", color: "blue", height: 300 },
        { name: "Diagram5", color: "brown", height: 5 },
        { name: "Diagram6", color: "plum", height: 125 },
        { name: "Diagram7", color: "purple", height: 280 },
      ],
    };
  },
  created() {
    if (localStorage.getItem("sortedColumns")) {
      this.columns = JSON.parse(localStorage.getItem("sortedColumns"));
    }

    for (let i = 0; i < this.columns.length; i++) {
      if (localStorage.getItem(this.columns[i].name + "Height")) {
        this.columns[i].height = localStorage.getItem(
          this.columns[i].name + "Height"
        );
      }
    }
  },
  template: `
    <div class="diagramms" >

    <div class="container">
    <div class="diagr-item"  v-for="column in columns">
          <div class="column" v-bind:style="{background: column.color, height: column.height + 'px'}">  </div>
          <p>{{ column.name }} - {{column.height}}</p>

          <change-height  :column="column"></change-height>
    </div>
    </div>

        <btn-filter :columns="columns"></btn-filter>

    </div>
    `,
});

Vue.component("change-height", {
  props: {
    column: Object,
  },
  data() {
    return {};
  },
  methods: {
    saveHeight(column) {
      localStorage.setItem(column.name + "Height", column.height);
    },
  },
  template: `
        <div class="change-height">
          <input type="range" min="0" max="300" @change="saveHeight(column)" v-model="column.height">
        </div>
    `,
});

Vue.component("btn-filter", {
  props: {
    columns: Array,
  },
  data() {
    return {
      btnName: "Sort",
    };
  },
  methods: {
    onClick(columns) {
      columns.sort(function (a, b) {
        if (parseInt(a.height) <= parseInt(b.height)) {
          return -1;
        }
        if (parseInt(a.height) > parseInt(b.height)) {
          return 1;
        }
        return 0;
      });
      localStorage.setItem("sortedColumns", JSON.stringify(columns));
    },
  },
  template: `
  <button class="btn-filter" @click="onClick(columns)">{{ btnName }}</button>
`,
});

const app = new Vue({
  el: "#app",
});
