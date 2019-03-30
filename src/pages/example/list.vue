<template>
  <div>
    <el-card class="box-card" :body-style="{ padding: '0px'}" shadow="never">
      <el-row>
        <el-col :span="4" class="deviation">
          <el-input v-model="input" width="200" placeholder="请输入搜索的内容"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="primary">搜索</el-button>
          <el-button type="success">添加文章</el-button>
          <el-button type="danger">批量删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-table
      ref="singleTable"
      :data="list"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" type="index" label="ID" width="50"></el-table-column>
      <el-table-column property="address" label="Title"></el-table-column>
      <el-table-column align="center" property="name" label="Author" width="120"></el-table-column>
      <el-table-column align="center" property="name" label="isTop" width="120">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.newsTop" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="tag"
        label="status"
        width="100"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === 'draft' ? 'info' : scope.row.tag === 'published' ? 'success' : 'danger'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" property="date" label="Date" width="120"></el-table-column>
      <el-table-column label="Actions" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination
      v-show="list.length>0"
      :total="list.length"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      input: "",
      list: [
        {
          date: "2016-05-02",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "draft",
          newsTop: true
        },
        {
          date: "2016-05-04",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "deleted",
          newsTop: false
        },
        {
          date: "2016-05-01",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "published",
          newsTop: true
        },
        {
          date: "2016-05-03",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "draft",
          newsTop: false
        },
        {
          date: "2016-05-02",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "draft",
          newsTop: true
        },
        {
          date: "2016-05-04",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "deleted",
          newsTop: false
        },
        {
          date: "2016-05-01",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "published",
          newsTop: true
        },
        {
          date: "2016-05-03",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "draft",
          newsTop: false
        },
        {
          date: "2016-05-02",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "draft",
          newsTop: true
        },
        {
          date: "2016-05-04",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "deleted",
          newsTop: false
        },
        {
          date: "2016-05-01",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "published",
          newsTop: true
        },
        {
          date: "2016-05-03",
          name: "Margaret",
          address:
            "Wcyd Jcfwscywpj Ajtumwguye Jpnfy Osqicmnqe Upory Fkdhrv Njlgemnw Xpkpqk",
          tag: "draft",
          newsTop: false
        }
      ],
      currentRow: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 15
      }
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleEdit(index, row) {
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
    },
    getList() {}
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
  border: none;
}

.deviation {
  margin-right: 10px;
}
</style>