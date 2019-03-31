<template>
  <div>
    <el-card class="box-card" :body-style="{ padding: '0px'}" shadow="never">
      <el-button type="success" @click="onSubmit">立即修改</el-button>
<!--      <el-button type="warning">草稿</el-button>-->
    </el-card>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.category" placeholder="请选择文章分类">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="评论">
        <el-radio-group v-model="form.comment">
          <el-radio label="开启评论"></el-radio>
          <el-radio label="关闭评论"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="摘要">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="封面图">
        <Upload v-model="form.imageUrl"/>
      </el-form-item>
    </el-form>
    <Tinymce
            v-model="form.content"
            :url="url"
            :with-credentials="false"
            @on-ready="onEditorReady"
            @on-destroy="onEditorDestroy"
            @on-upload-success="onEditorUploadComplete"
            @on-upload-fail="onEditorUploadFail"
    ></Tinymce>
  </div>
</template>

<script>
  import Tinymce from "@/components/Tinymce";
  import Upload from "@/components/Upload";
  export default {
    name: "edit",
    data() {
      return {
        url: "",
        form: {
          title: "",
          author: "",
          date: "",
          rate: null,
          category: "",
          categoryies: [],
          comment: "开启评论",
          imageUrl: "",
          dess: "",
          content: ""
        }
      };
    },
    components: {
      Tinymce,
      Upload
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isType = file.type === "image/jpeg" || "image/png";
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isType) {
          this.$message.error("上传头像图片只能是 JPG 或者 PNG 格式!");
        }

        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isType && isLt2M;
      },
      onSubmit() {
        // console.log("submit!");
      },
      onEditorReady() {},
      onEditorDestroy() {},
      onEditorUploadComplete() {},
      onEditorUploadFail() {}
    }
  };
</script>

<style scoped>
  .box-card {
    text-align: right;
    border: none;
    margin-bottom: 20px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>