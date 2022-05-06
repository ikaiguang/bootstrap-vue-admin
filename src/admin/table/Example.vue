<template>
  <b-row>
    <b-col>
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon"><i class="icon icon-tasks"></i></span>
          <h5>Table Example</h5>
          <span class="label">
                        <b-link href="#"><b-badge variant="primary">Link1</b-badge></b-link>
                    </span>
        </div>
        <div class="widget-content">
          <b-table id="my-table"
                   responsive
                   hover
                   striped
                   bordered
                   :per-page="perPage"
                   :current-page="currentPage"
                   :fields="fields"
                   :items="items">
          </b-table>
          <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table">
          </b-pagination>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
const fields = [
  {key: "username", label: "用户名", sortable: true},
  {key: "age", label: "年龄", sortable: true},
  {key: "email", label: "电子邮箱", sortable: false},
  {key: "register_date", label: "注册时间", sortable: true},
];
const items = [
  {username: "张三", age: 15, email: 'zhangsan@admin.com', register_date: "2019-01-01"},
  {username: "李四", age: 25, email: 'lisi@admin.com', register_date: "2019-01-02"},
  {username: "小明", age: 18, email: 'xiaoming@admin.com', register_date: "2019-01-03"},
  {username: "小强", age: 28, email: 'xiaoqiang@admin.com', register_date: "2019-01-08"},
  {username: "小梅", age: 20, email: 'xiaomei@admin.com', register_date: "2019-01-09"},
  {username: "张三", age: 15, email: 'zhangsan@admin.com', register_date: "2019-01-01"},
  {username: "李四", age: 25, email: 'lisi@admin.com', register_date: "2019-01-02"},
  {username: "小明", age: 18, email: 'xiaoming@admin.com', register_date: "2019-01-03"},
  {username: "小强", age: 28, email: 'xiaoqiang@admin.com', register_date: "2019-01-08"},
  {username: "小梅", age: 20, email: 'xiaomei@admin.com', register_date: "2019-01-09"},
];

export default {
  data() {
    return {
      fields: fields,
      items: items,
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>
